import Sidebar from "../../components/sidebar/Sidebar.component";
import "./home.styles.scss";
function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">Home Container</div>
        </div>
    );
}

export default Home;
