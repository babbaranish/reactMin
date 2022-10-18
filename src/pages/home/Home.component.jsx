import Navbar from "../../components/navbar/Navbar.component";
import Sidebar from "../../components/sidebar/Sidebar.component";
import Widget from "../../components/widgets/Widget.component";
import "./home.styles.scss";
function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget />
                    <Widget />
                    <Widget />
                    <Widget />
                </div>
            </div>
        </div>
    );
}

export default Home;
