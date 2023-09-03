import { Link } from "react-router-dom";


const Navbar = () => (
  <header>
    <nav>
      <h2 className="nav-title">
        <Link to='/'>
          Blog
        </Link>
      </h2>

      <ul className="nav-ul">
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/about'>
        <li>About</li>
      </Link>
      <Link to='blog'>
        <li>Blog</li>
      </Link>
      </ul>
    </nav>
  </header>
);



export default Navbar