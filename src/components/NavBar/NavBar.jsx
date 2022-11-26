import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FcSettings } from 'react-icons/fc';
import { BsMic } from 'react-icons/bs';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="nav flex">
      <div className="backCircle">
        <IoIosArrowDropleftCircle />
      </div>
      <div className="nav-icon-grp flex">
        <BsMic />
        <FcSettings />
      </div>
    </nav>
  );
}

export default NavBar;
