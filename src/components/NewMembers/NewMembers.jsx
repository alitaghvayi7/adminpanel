import './newMembers.css';
import NewMembersItem from "../NewMembersItem/NewMembersItem";

export default function NewMembers() {
  return (
    <div className='newMemberContainer'>
      <NewMembersItem />
      <NewMembersItem />
      <NewMembersItem />
      <NewMembersItem />
      <NewMembersItem />
    </div>
  )
}
