import './userInfoEdit.css';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function UserInfoEdit() {
  return (
    <form className='userInfoEditForm'>
        <fieldset className='UserInfoEditFormLeft'>
            <label htmlFor="userEditUsername">UserName</label>
            <input type="text" id="userEditUsername" className='userEditInput' placeholder='AnnaBecker99'/>
            <label htmlFor="userEditFullname">FullName</label>
            <input type="text" id="userEditFullname" className='userEditInput' placeholder='AnnaBecker'/>
            <label htmlFor="userEditEmail">Email</label>
            <input type="text" id="userEditEmail" className='userEditInput' placeholder='AnnaBecker@gmail.com'/>
            <label htmlFor="userEditPhoneNumber">PhoneNumber</label>
            <input type="text" id="userEditPhoneNumber" className='userEditInput' placeholder='+1 123 12 12'/>
            <label htmlFor="userEditAddress">Address</label>
            <input type="text" id="userEditAddress" className='userEditInput' placeholder='NewYork,USA'/>
        </fieldset>
        <fieldset className="UserInfoEditFormRight">
            <img className='userInfoEditPicture' src="assets/pexels-photo-1526814.jpeg" alt="" />
            <label htmlFor="userEditProfilePicture">
                <FileUploadIcon/>
            </label>
            <input type="file" id="userEditProfilePicture" style={{display:"none"}} accept=".png,.jpg,.jpeg"/>
            <button type='submit' className='userEditSubmitBuuton'>Update</button>
        </fieldset>
    </form>
  )
}
