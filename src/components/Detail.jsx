import { useParams } from "react-router-dom"
import blogData from "./blogs";


const Detail = () => {
    const {id} = useParams();

  return (
    <div className="detail">
        detail
    </div>
  )
}

export default Detail