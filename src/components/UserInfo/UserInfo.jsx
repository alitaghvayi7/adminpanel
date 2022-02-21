import './userInfo.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';

export default function UserInfo() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='userInfoContainer'>
        <div className="userInfoProfileAndJob">
            <img className='userInfoProfile' src={PF+'1.jpeg'} alt="" />
            <div className="userInfoJobContainer">
                <span className="userInfoName">Anna Backer</span>
                <span className='userInfoJob'>Sofware Enginner</span>
            </div>
        </div>
        <div className="userInfoAccountDetail">
            <h5 className='userInfoAccountTitle'>Account Details</h5>
            <div className="userInfoAccountDetailItem">
                <PersonOutlineOutlinedIcon className="userInfoAccountItemIcon"/>
                <span>AnnaBeck</span>
            </div>
            <div className="userInfoAccountDetailItem">
                <CalendarTodayOutlinedIcon className="userInfoAccountItemIcon"/>
                <span>1999/04/05</span>
            </div>
        </div>
        <div className="userInfoAccountDetail">
            <h5 className='userInfoAccountTitle'>Contact Details</h5>
            <div className="userInfoAccountDetailItem">
                <PhoneAndroidOutlinedIcon className="userInfoAccountItemIcon"/>
                <span>+1 123 12 12</span>
            </div>
            <div className="userInfoAccountDetailItem">
                <AlternateEmailOutlinedIcon className="userInfoAccountItemIcon"/>
                <span>annabecker@gmail.com</span>
            </div>
            <div className="userInfoAccountDetailItem">
                <MyLocationOutlinedIcon className="userInfoAccountItemIcon"/>
                <span>New York , USA</span>
            </div>
        </div>
    </div>
  )
}
