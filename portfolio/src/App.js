import './App.css';
import {useState} from "react";
import Experience from "./Components/Pages/Experience";
import Academics from "./Components/Pages/Academics";
import About from "./Components/Pages/About";

function App() {
    let [currentPage, setCurrentPage] = useState("About");
    document.title = currentPage;
    let pageComponent;
    if (currentPage === "About") {
        pageComponent = <About/>;
    } else if (currentPage === "Academics") {
        pageComponent = <Academics/>
    } else if (currentPage === "Experience") {
        pageComponent = <Experience/>;
    }

    return (
        <div id="mainBody">
            <div id="sideMenu">
                <img id="profileImage" src="images/icon.jpg" alt="Margaret Profile"/>
                <div id="name">Margaret Earnest</div>
                <br/>
                <div id="subtitle">Software Engineer</div>
                <nav>
                    <button onClick={() => setCurrentPage("About")}>About Me</button>
                    <br/>
                    <button onClick={() => setCurrentPage("Academics")}>Academics</button>
                    <br/>
                    <button onClick={() => setCurrentPage("Experience")}>Experience</button>
                    <br/>
                </nav>
            </div>
            {pageComponent}
        </div>
    );
}

export default App;
