import './productPage.css';
import Layout from "../../layout/Layout";
import { DataGrid } from "@mui/x-data-grid";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductPage() {
    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
          field: "productname",
          headerName: "Product Name",
          width: 250,
          editable: true,
          renderCell: (param) => {
            return (
              <div className="productListItem">
                <img src={param.row.avatar} alt="" />
                <span>{param.row.productname}</span>
              </div>
            );
          },
        },
        {
          field: "price",
          headerName: "Price",
          width: 100,
          editable: true,
          sortable: false,
        },
        {
          field: "isExist",
          headerName: "isExist",
          sortable: false,
          width: 100,
        },
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productPageActions">
                <Link to={`/products/${params.row.id}`}>
                  <button className="editProductPageButton">
                    <span>Edit</span>
                    <EditRoadOutlinedIcon className="productPagePageIcon" />
                  </button>
                </Link>
                <button className="DeleteProductPageButton" onClick={(e)=>handleDelete(params.row.id)}>
                  <span>Delete</span>
                  <DeleteForeverOutlinedIcon className="DeleteProductPageIcon" />
                </button>
              </div>
            );
          },
        },
      ];
    
      const rows = [
        {
          id: 1,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 2,
          productname: "AirPad",
          price: "$98.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 3,
          productname: "AirPad",
          price: "$140.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 4,
          productname: "AirPad",
          price: "$12.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 5,
          productname: "AirPad",
          price: "$58.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 6,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 7,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 8,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 9,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 10,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 11,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 12,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
        {
          id: 13,
          productname: "AirPad",
          price: "$120.00",
          avatar: "assets/pexels-photo-7156886.jpeg",
          IsExist: "active",
        },
      ];
    
      const [data, setData] = useState(rows);
    
      const handleDelete = (id) => {
        setData(
          data.filter((row) => {
            return row.id !== id;
          })
        );
      };
    
      return (
        <Layout>
          <div className="productssList">
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={9}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
        </Layout>
      );
}
