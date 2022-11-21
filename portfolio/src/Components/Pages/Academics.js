import ProjectElement from "../ProjectElement";

function Academics() {
    return (
        <div id="mainPage">
            <h1>Academics</h1>
            <h2>Degrees</h2>
            <div id="degreeHolder">
                <b>Bachelor of Science – Computer Science</b>, <em>Worcester Polytechnic Institute</em>, May 2023<br/>
                <b>Minor – Robotics Engineering</b>, <em>Worcester Polytechnic Institute</em>, May 2023<br/>
                <b>Master of Science – Computer Science</b>, <em>Worcester Polytechnic Institute</em>, May 2023
            </div>
            <h2>Courses</h2>
            <ul>
                <li>Database Management Systems</li>
                <li>Distributed Computing Systems</li>
                <li>Machine Learning</li>
                <li>Object-oriented Analysis and Design</li>
                <li>Systems Programming Concepts</li>
                <li>Algorithms</li>
                <li>Webware</li>
                <li>Introduction to Machine Organization and Assembly</li>
                <li>Software Engineering</li>
                <li>Operating Systems</li>
                <li>Technical Writing</li>
                <li>Software Tutorials</li>
                <li>Natural Language Processing</li>
                <li>Design of Software Systems</li>
                <li>User Experience Design</li>
            </ul>
            <h2>Academic Projects</h2>
            <ProjectElement image="bogl_icon.png" size="70"
                            title="Major Qualifying Project: BoGL Web"
                            description="The purpose of this project is converting a piece of Windows software called
                            BoGL to a web-based application. This software allows Mechanical Engineering students to
                            generate bond graphs from system diagrams. I mostly contributed to the UI of the application,
                            which is written in Typescript and run in a Blazor WebAssembly application."/>
            <ProjectElement image="softEngPath.png" size="100"
                            title="Brigham and Women’s Faulkner Hospital Facility Map"
                            description="I lead a 10-person software engineering team in developing an application that
                            included pathfinding, map building, and integrated service requests. We used Java, Apache
                            Derby, JavaFX, and Material Design and followed Agile methodologies to achieve our goals.
                            Our prototype included a feature for tracking the availability of parking spots."/>
            <ProjectElement image="VCU_robot.jpg" size="105"
                            title="Guiding a Robot with Haptic Feedback"
                            description="I completed a mentorship project through Virginia Commonwealth University's
                            Computer Science Department that combined virtual reality and haptic technology to guide a
                            LEGO Robot around virtual obstacles. I learned how to interface between programs written in
                            different languages and worked in C++ C#, and Python."/>
            <ProjectElement image="NCESE.png" size="70"
                            title="Models and Programs for Enhancing Social and Emotional Learning in Disadvantaged Schools"
                            description="This project sought to help the NCESE identify and connect with effective
                            social and emotional learning (SEL) approaches being implemented in the US for use in
                            Broadmeadows, Australia. We identified successful SEL approaches used in the United States,
                            researched their practices and efficacy, and recommended to the NCESE ones that are compatible
                            with the social and emotional needs of students in Broadmeadows."/>
            <br/>
        </div>
);
}

export default Academics;
