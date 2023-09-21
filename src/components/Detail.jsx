import { useParams } from "react-router-dom"
import { useEffect } from "react";


const Detail = () => {
    const {id} = useParams();

    useEffect(()=>{
      fetch('https://api.pexels.com/v1/curated?page=2&per_page=40')
        .then(res => res.json())
        .then(data => console.log(data))
    },[id])

  return (
    <div className="detail">
        detail
    </div>
  )
}

export default Detail