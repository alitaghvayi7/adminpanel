import "./usersPage.css";
import Layout from "../../layout/Layout";
import { DataGrid } from "@mui/x-data-grid";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UsersPage() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "username",
      headerName: "User Name",
      width: 250,
      editable: true,
      renderCell: (param) => {
        return (
          <div className="userListItem">
            <img src={param.row.avatar} alt="" />
            <span>{param.row.username}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "transactions",
      headerName: "TransActions",
      width: 100,
      editable: true,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userPageActions">
            <Link to={`/users/${params.row.id}`}>
              <button className="EditUserPageButton">
                <span>Edit</span>
                <EditRoadOutlinedIcon className="EditUserPageIcon" />
              </button>
            </Link>
            <button className="DeleteUserPageButton" onClick={(e)=>handleDelete(params.row.id)}>
              <span>Delete</span>
              <DeleteForeverOutlinedIcon className="DeleteUserPageIcon" />
            </button>
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Snow",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/1.jpeg",
      status: "active",
    },
    {
      id: 2,
      username: "jon",
      email: "jon@gmail.com",
      transactions: "$98.00",
      avatar: "assets/2.jpeg",
      status: "active",
    },
    {
      id: 3,
      username: "mock",
      email: "jon@gmail.com",
      transactions: "$140.00",
      avatar: "assets/3.jpeg",
      status: "active",
    },
    {
      id: 4,
      username: "alex",
      email: "jon@gmail.com",
      transactions: "$12.00",
      avatar: "assets/4.jpeg",
      status: "active",
    },
    {
      id: 5,
      username: "snadra",
      email: "jon@gmail.com",
      transactions: "$58.00",
      avatar: "assets/5.jpeg",
      status: "active",
    },
    {
      id: 6,
      username: "jeff",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/6.jpeg",
      status: "active",
    },
    {
      id: 7,
      username: "jes",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/7.jpeg",
      status: "active",
    },
    {
      id: 8,
      username: "joe",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/8.jpeg",
      status: "active",
    },
    {
      id: 9,
      username: "jina",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/9.jpeg",
      status: "active",
    },
    {
      id: 10,
      username: "rebecca",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/pexels-photo-1152994.jpeg",
      status: "active",
    },
    {
      id: 11,
      username: "jina",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/Profile-Photo-Wallpaper1.jpg",
      status: "active",
    },
    {
      id: 12,
      username: "jina",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/Profile-Photo-Wallpaper2.jpg",
      status: "active",
    },
    {
      id: 13,
      username: "jina",
      email: "jon@gmail.com",
      transactions: "$120.00",
      avatar: "assets/profile.jpeg",
      status: "active",
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
      <div className="usersList">
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
