import './newMembersItem.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function NewMembersItem() {
  return (
    <div className="newMemberItem">
    <img className='newMemberImage' src="assets/1.jpeg" alt="" />
    <div className="newMemberInfo">
      <span className="newMemberName">Anna Kaller</span>
      <span className="newMemberJob">Software Engineer</span>
    </div>
    <button className='newMemberButton'>
      <VisibilityIcon className='newMemberButtonIcon'/>
      <span className='newMemberButtonText'>Display</span>
    </button>
  </div>
  )
}
