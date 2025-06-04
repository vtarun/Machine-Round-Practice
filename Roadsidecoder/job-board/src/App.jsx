import { useState, useEffect } from "react";
import './App.css';

function Job({ job }) {
  return (
    <div className="jobCard">
      {job.url ? <a href={job.url}>{job.title}</a> : <p>{job.title}</p>}
      <p>
        <span>By {job.by}</span>{" "}
        <span> - {(new Date(job.time)).toLocaleString("en-GB")}</span>
      </p>
    </div>
  );
}

export default function App() {
  const [jobsIdList, setJobsIdList] = useState([]);
  const [jobsDetails, setJobsDetails] = useState([]);
  const [limit, setLimit] = useState(6);

  async function fetchJobDetails(slicedJobs){
    
    const allPromises = slicedJobs.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      return fetch(url, {
            method: 'GET', 
            "Content-type": 'Application-json'
          }).then(response => response.json());
    });

    Promise.all(allPromises).then(result => { setJobsDetails([...jobsDetails, ...result])})
  }
  async function fetchJobs(){
    try{    
      const response = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json', 
          {
            method: 'GET', 
            "Content-type": 'Application-json'
          }
      );
      const jobIds = await response.json();
      const slicedJobs = jobIds.slice(0, limit);

      setJobsIdList(jobIds);
      fetchJobDetails(slicedJobs);

    } catch(err){

    }

  };

  function loadMoreJobs(){
    const endLimit = Math.min(limit + 6, jobsIdList.length);
    const slicedJobs = jobsIdList.slice(limit, endLimit);
    setLimit(endLimit);    
    fetchJobDetails(slicedJobs, endLimit);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h3 className="title">Hacker News Jobs Board</h3>
      <div className="jobs">
        {jobsDetails.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      <button onClick={loadMoreJobs} disabled={limit >= jobsIdList.length}>Load more jobs</button>
    </div>
  );
}
