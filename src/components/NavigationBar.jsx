import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
      <nav className="navigation-top">
        <h1>The Web Blog</h1>
        
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/New-blog">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default NavigationBar;