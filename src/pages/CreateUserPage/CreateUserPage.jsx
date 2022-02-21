import './createUserPage.css'
import Layout from '../../layout/Layout';
import CreateUser from '../../components/CreateUser/CreateUser';
export default function CreateUserPage() {
  return (
    <Layout>
        <div className="createUserPageContainer">
            <h3 className='createUserPageTitle'>Create User</h3>
            <CreateUser />
        </div>
    </Layout>
  )
}
