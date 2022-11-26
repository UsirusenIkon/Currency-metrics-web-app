import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FcSettings } from 'react-icons/fc';
import { BsMic } from 'react-icons/bs';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav flex">
      <div className="backCircle">
        <Link to="/"><IoIosArrowDropleftCircle /></Link>
      </div>
      <div className="nav-icon-grp flex">
        <BsMic />
        <FcSettings />
      </div>
    </nav>
  );
}

export default NavBar;
