
import { Blog } from './index'
import blogData from "./blogs"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="blogs">
        {blogData.map((blog) => (
          <Link to={'/blog/'+blog.id} key={blog.id}>
          <Blog key={blog.id} image={blog.image} name={blog.name} age={blog.age} power={blog.power} icon={blog.icon}/>
          </Link>
        ))}
      </div>
    </div>
  );
};



export default Home