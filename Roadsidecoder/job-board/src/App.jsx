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
  const [jobsList, setJobsList] = useState([]);
  const [limit, setLimit] = useState(6);

  async function fetchJobDetails(jobList, limit){
    
    const allPromises = jobList.slice(limit, limit+6).map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      return fetch(url, {
            method: 'GET', 
            "Content-type": 'Application-json'
          }).then(response => response.json());
    });

    Promise.all(allPromises).then(result => { setJobsList(result)})
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
      fetchJobDetails(jobIds, 0);

    } catch(err){

    }

  };

  function loadMoreJobs(){
    fetchJobDetails(jobIds, 0);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h3 className="title">Hacker News Jobs Board</h3>
      <div className="jobs">
        {jobsList.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
      </div>
      <button onClick={loadMoreJobs}>Load more jobs</button>
    </div>
  );
}
