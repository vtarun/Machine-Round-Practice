import { HeartIcon, SpinnerIcon } from "./icons.jsx";
import { useState, useEffect } from "react";

const url = "https://questions.greatfrontend.com/api/questions/like-button";

export default function App() {
  const [like, setLike] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');
    const payload = { action : like ? 'like' : 'unlike' };
    try {
      const response = await fetch(url, {
        method : "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload) 
      });

      const result = await response.json();
      if(result.message === 'Success!'){       
        setLike(prev => !prev);
      }else{
        throw new Error(result.message)
      }
    } catch (err) {
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };


  return (
    <div>
      {
        !loading && (<button onClick={handleClick} className={like ? 'like' : 'default'}><HeartIcon /> Like </button>)
      }
      {
        loading && ( <button onClick={handleClick} className={like ? 'likeLoading' : 'defaultLoading'}><SpinnerIcon /> Like </button>)
      }
      {error && <p>{error}</p>}
    </div>
  );
}
