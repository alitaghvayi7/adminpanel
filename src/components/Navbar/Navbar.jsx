import  './navbar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="leftNavbar">
            <span className="navbarLogo">
                AdminPanel
            </span>
        </div>
        <div className="rightNavbar">
            <div className="navbarIconContainer">
                <div className="navbarIconItem">
                    <NotificationsNoneIcon className="navbarIcon"/>
                    <span className="navbarLogoBadge">2</span>
                </div>
                <div className="navbarIconItem">
                    <LanguageIcon className="navbarIcon"/>
                    <span className="navbarLogoBadge">2</span>
                </div>
                <div className="navbarIconItem">
                    <SettingsIcon className="navbarIcon"/>
                </div>
            </div>
            <img className='navbarProfile' src="assets/pexels-photo-1526814.jpeg" alt="" />
        </div>
    </div>
  )
}
