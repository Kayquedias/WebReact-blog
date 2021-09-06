import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
      <nav className="navigation-top">
        <h1>Face<span style={{color: '#01017e'}}>note</span>book</h1>
        
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/New-blog">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default NavigationBar;