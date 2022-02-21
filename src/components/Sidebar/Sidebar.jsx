import "./sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarSeprator">
          <h5 className="sidebarHeaderItem">DashBoard</h5>
          <ul className="sidebarItemContainer">
            <Link to={"/"}>
              <li className="sidebarItem">
                <HomeOutlinedIcon className="sidebarIcon" />
                <span className="sidebarTitle">Home</span>
              </li>
            </Link>
            <li className="sidebarItem">
              <AnalyticsOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Analytics</span>
            </li>
            <li className="sidebarItem">
              <BarChartOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Sales</span>
            </li>
          </ul>
        </div>
        <div className="sidebarSeprator">
          <h5 className="sidebarHeaderItem">QuickMenu</h5>
          <ul className="sidebarItemContainer">
            <Link to={"/users"}>
              <li className="sidebarItem">
                <PersonOutlineOutlinedIcon className="sidebarIcon" />
                <span className="sidebarTitle">Users</span>
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="sidebarItem">
                <ProductionQuantityLimitsOutlinedIcon className="sidebarIcon" />
                <span className="sidebarTitle">products</span>
              </li>
            </Link>
            <li className="sidebarItem">
              <PaidOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Transactions</span>
            </li>
            <li className="sidebarItem">
              <ReportGmailerrorredOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Reports</span>
            </li>
          </ul>
        </div>
        <div className="sidebarSeprator">
          <h5 className="sidebarHeaderItem">Notifications</h5>
          <ul className="sidebarItemContainer">
            <li className="sidebarItem">
              <MailOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Emails</span>
            </li>
            <li className="sidebarItem">
              <ForumOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Feedbacks</span>
            </li>
            <li className="sidebarItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Messages</span>
            </li>
          </ul>
        </div>
        <div className="sidebarSeprator">
          <h5 className="sidebarHeaderItem">Staff</h5>
          <ul className="sidebarItemContainer">
            <li className="sidebarItem">
              <ManageAccountsOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Manage</span>
            </li>
            <li className="sidebarItem">
              <ShowChartOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Analytics</span>
            </li>
            <li className="sidebarItem">
              <InsertCommentOutlinedIcon className="sidebarIcon" />
              <span className="sidebarTitle">Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
