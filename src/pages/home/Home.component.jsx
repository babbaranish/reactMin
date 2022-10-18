import Navbar from "../../components/navbar/Navbar.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import "./home.styles.scss";
function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                Home Container
            </div>
        </div>
    );
}

export default Home;
