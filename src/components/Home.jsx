import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <Link to='/about'>About</Link><br />
      <Link to='/abc'>404</Link><br />
      <Link to='/'>Home</Link>
      Home
    </div>
  )
}

export default Home