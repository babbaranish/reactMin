import "./navbar.styles.scss";
import pic from "../../assets/author.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ListIcon from "@mui/icons-material/List";
function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                    />
                    <SearchIcon id="searchIcon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <ChatBubbleIcon className="icon" />
                    </div>
                    <div className="item">
                        <ListIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src={pic} alt="author image" className="avtar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
