
import { Blog } from './index'
import blogData from "./blogs"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Home = () => {
  
  const [vans, setvans] = useState([]);
  useEffect(()=>{
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setvans(data.vans))
  })
  return (
    <div className="home">
      <div className="blogs">
        {blogData.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <Blog key={blog.id} image={blog.image} name={blog.name} age={blog.age} power={blog.power} icon={blog.icon}/>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default Home