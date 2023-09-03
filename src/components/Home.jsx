
import { Blog } from './index'
import blogData from "./blogs"


const Home = () => {
  return (
    <div className="home">
      {
        blogData.map((blog) => {
          <Blog
            key={blog.id}
            image={blog.image}
            name={blog.name}
          />
        })
      }
    </div>
  )
}

export default Home