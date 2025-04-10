import { Link } from 'react-router-dom';


export function Nav() {
  return (
    <div className="navBarContainer">
      <div className="navBarOptions">
        <img
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png"
          alt="Logo"
          className="navBarHeaderImg"
        />
        <Link to="/" >Plants</Link>
        <Link to="/soil">Soil</Link>
        </div>
    </div>
  );
}

export default Nav;
