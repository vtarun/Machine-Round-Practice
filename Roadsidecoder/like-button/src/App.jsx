import { HeartIcon, SpinnerIcon } from "./icons.jsx";
import { useState, useEffect } from "react";

const url = "https://questions.greatfrontend.com/api/questions/like-button";

export default function App() {
  const [like, setLike] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setButtonState(prev => like ? 'likeLoading' : 'unlikeLoading');
    const payload = like ? 'like' : 'unlike';
    try {
      const response = await fetch(url, (method = "POST"), { action: payload });
      const result = response.json();
      if(result.message == 'sucess'){
        setLike(true);
      }
    } catch (error) {

    }finally{

    }
  };

  return (
    <div>
      {
        !loading && (<button onClick={handleClick} className={`like ? 'like' : 'default'`}><HeartIcon /> Like </button>)
      }
      {
        loading && ( <button onClick={handleClick} className={`like ? 'likeLoading' : 'defaultLoading'`}><SpinnerIcon /> Like </button>)
      }
    </div>
  );
}
