import "./createProductPage.css";
import Layout from "../../layout/Layout";
import CreateProduct from "../../components/CreateProduct/CreateProduct";

export default function CreateProductPage() {
  return (
    <Layout>
      <div className="createProductPageContainer">
        <h3 className="createProductPageTitle">Create Product</h3>
        <CreateProduct />
      </div>
    </Layout>
  );
}
