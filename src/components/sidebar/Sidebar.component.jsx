import "./sidebar.styles.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
// const titles = {
//     Dashboard: <DashboardIcon />,
//     Users: <PersonIcon />,
//     Products: <StoreIcon />,
//     Orders: <CreditCardIcon />,
//     Delivery: <LocalShippingIcon />,
//     Stats: <AssesssmentIcon />,
//     Notification: <NotificationsIcon />,
//     "System Health": <SettingsSystemDaydreamIcon />,
//     Logs: <PsychologyIcon />,
//     Settings: <SettingsIcon />,
//     Profile: <AccountCircleIcon />,
//     Logout: <LogoutIcon />,
// };

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">DashMin</span>
            </div>
            <hr />
            <div className="center">
                {/* <ul>
                    {Object.keys(titles).map((key, index) => {
                        return (
                            <li key={index}>
                                {titles[key]}
                                <span>{key}</span>
                            </li>
                        );
                    })}
                </ul> */}

                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>dashboard</span>
                    </li>
                    <p className="title">LISTS</p>

                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>

                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>

                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    );
}

export default Sidebar;
