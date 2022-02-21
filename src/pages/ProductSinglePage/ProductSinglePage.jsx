import "./productSinglePage.css";
import Layout from "../../layout/Layout";
import Chart from "../../components/Chart/Chart";
import ProductInfoDetails from "../../components/ProductInfoDetails/ProductInfoDetails";
import { Link } from "react-router-dom";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const data = [
  {
    name: "Jan",
    SaleProduct: 4000,
  },
  {
    name: "Feb",
    SaleProduct: 3000,
  },
  {
    name: "Mar",
    SaleProduct: 2000,
  },
];

export default function ProductSinglePage() {
  return (
    <Layout>
      <div className="productSingleContainer">
        <div className="productSingleHeader">
          <h3 className="productSingleTitle">Edit Product</h3>
          <Link to={`/products/create`}>
            <button className="productSingleCreateProduct">Create</button>
          </Link>
        </div>
        <div className="productSingleBody">
          <div className="productSingleBodyLeft">
            <h5 className="chartTitle">Sales Performance</h5>
            <Chart data={data} dataKey={"SaleProduct"} />
          </div>
          <div className="productSingleBodyRight">
            <ProductInfoDetails />
          </div>
          
        </div>
        <div className="productSingleFooter">
            <form className="ProductInfoEditForm">
              <fieldset className="ProductInfoEditFormLeft">
                <label htmlFor="ProductEditProductname">ProductName</label>
                <input
                  type="text"
                  id="ProductEditProductname"
                  className="ProductEditInput"
                  placeholder="AnnaBecker99"
                />
                <label htmlFor="ProductEditPrice">Price</label>
                <input
                  type="text"
                  id="ProductEditPrice"
                  className="ProductEditInput"
                  placeholder="AnnaBecker"
                />
                <label htmlFor="ProductEditActive">Active</label>
                <select id="ProductEditActive"  className="ProductEditInput">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
                <label htmlFor="ProductEditPhoneInStock">InStock</label>
                <select id="ProductEditInStock"  className="ProductEditInput">
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </fieldset>
              <fieldset className="ProductInfoEditFormRight">
                <img
                  className="ProductInfoEditPicture"
                  src="assets/pexels-photo-1526814.jpeg"
                  alt=""
                />
                <label htmlFor="ProductEditProfilePicture">
                  <FileUploadIcon />
                </label>
                <input
                  type="file"
                  id="ProductEditProfilePicture"
                  style={{ display: "none" }}
                  accept=".png,.jpg,.jpeg"
                />
                <button type="submit" className="ProductEditSubmitBuuton">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
      </div>
    </Layout>
  );
}
