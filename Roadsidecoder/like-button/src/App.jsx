import { HeartIcon, SpinnerIcon } from "./icons.jsx";
import { useState } from "react";

const url = "https://questions.greatfrontend.com/api/questions/like-button";

export default function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async () => {
    setError(null);
    setIsFetching(true);

    try {
      const response = await fetch(url, {
        method : "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({action: liked ? 'unlike': 'like'}) 
      });

      
      if(response.status >= 200 && response.status < 300){       
        setLiked(!liked);
      }else{
        const result = await response.json();
        setError(result.message);
        return
      }
    } catch (err) {
      setError(err.message);
    }finally{
      setIsFetching(false);
    }
  };


  return (
    <div>
      {
        !isFetching  && (<button onClick={handleLikeUnlike} className={liked ? 'like' : 'default'}><HeartIcon /> Like </button>)
      }
      {
        isFetching  && ( <button onClick={handleLikeUnlike} className={liked ? 'likeLoading' : 'defaultLoading'}><SpinnerIcon /> Like </button>)
      }
      {error && <p>{error}</p>}
    </div>
  );
}
