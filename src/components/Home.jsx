import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <Link to='/about'>About</Link><br />
      <Link to='/abc'>404</Link>
      Home
    </div>
  )
}

export default Home