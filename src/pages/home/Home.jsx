import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import "./home.css";

export default function Home() {
    return (
    <>
                <Sidebar />
        <Header />

            <div className="home">
              
            </div>
        
        <div className="sideNote">
            this is sidebar
        </div>
    </>

    );
}