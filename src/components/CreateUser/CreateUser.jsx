import "./createUser.css";

export default function CreateUser() {
  return (
    <form className="createUserForm">
      <fieldset className="createUserFormLeft">
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserUserName">UserName</label>
          <input
            type="text"
            id="createUserUserName"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserEmail">Email</label>
          <input
            type="text"
            id="createUserEmail"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserPhone">Phone</label>
          <input
            type="tel"
            id="createUserPhone"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label>Gender : </label>
          <fieldset>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male" value="male" />
          </fieldset>
          <fieldset>
            <label htmlFor="female">FeMale</label>
            <input type="radio" name="gender" id="female" value="female" />
          </fieldset>
          <fieldset>
            <label htmlFor="other">other</label>
            <input type="radio" name="gender" id="other" value="other" />
          </fieldset>
        </fieldset>
        <fieldset>
          <button type="submit" className="createUserButtonSubmit">
            Create
          </button>
        </fieldset>
      </fieldset>
      <fieldset className="createUserFormRight">
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserFulName">FullName</label>
          <input
            type="text"
            id="createUserFulName"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserPassword">Password</label>
          <input
            type="text"
            id="createUserPassword"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserAddress">Address</label>
          <input
            type="text"
            id="createUserAddress"
            className="createUserInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createUserInputGroup">
          <label htmlFor="createUserActive">Active</label>
          <select id="createUserActive" className="createUserInput">
            <option value="active">active</option>
            <option value="deActive">Deactive</option>
          </select>
        </fieldset>
      </fieldset>
    </form>
  );
}
