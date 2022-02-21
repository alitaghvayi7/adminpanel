import "./userSinglePage.css";
import Layout from "../../layout/Layout";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserInfoEdit from "../../components/UserInfoEdit/UserInfoEdit";
import { Link } from "react-router-dom";
export default function UserSinglePage() {
  return (
    <Layout>
      <div className="userSingleContainer">
        <div className="userSingleHeader">
          <h3 className="userSingleTitle">Edit User</h3>
          <Link to={`/users/create`}>
            <button className="userSingleCreateUser">Create</button>
          </Link>
        </div>
        <div className="userSingleBody">
          <div className="userSingleLeftBody">
            <UserInfo />
          </div>
          <div className="userSingleRightBody">
          <h3 className="userSingleEditTitle">Edit</h3>
            <UserInfoEdit />
          </div>
        </div>
      </div>
    </Layout>
  );
}
