import "./createProduct.css";

export default function CreateProduct() {
  return (
    <form className="createProductForm">
      <fieldset className="createProductFormLeft">
        <fieldset className="createProductInputGroup">
          <label htmlFor="createProductProductName">ProductName</label>
          <input
            type="text"
            id="createProductProductName"
            className="createProductInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createProductInputGroup">
          <label htmlFor="createProductPrice">Price</label>
          <input
            type="text"
            id="createProductPrice"
            className="createProductInput"
            placeholder="john"
          />
        </fieldset>
        <fieldset className="createProductInputGroup">
          <label htmlFor="createProductActive">Active</label>
          <select id="createProductActive" className="createProductInput">
            <option value="active">active</option>
            <option value="deactive">deActive</option>
          </select>
        </fieldset>
        <fieldset className="createProductInputGroup">
          <label htmlFor="createProductInStock">InStock</label>
          <select id="createProductInStock" className="createProductInput">
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
        </fieldset>
        <fieldset>
          <button type="submit" className="createProductButtonSubmit">
            Create
          </button>
        </fieldset>
      </fieldset>
      <fieldset className="createProductFormRight">
        <fieldset className="createProductInputGroup">
          <label htmlFor="createProductImage">Product Image</label>
          <input type="file" id="createProductImage" accept=".jpg,.png,.jpeg" />
        </fieldset>
      </fieldset>
    </form>
  );
}
