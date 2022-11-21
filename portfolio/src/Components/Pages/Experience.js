import ProjectElement from "../ProjectElement";

function Experience() {
    return (
        <div id="mainPage">
            <h1>Experience</h1>
            <h2>Projects</h2>
            <ProjectElement image="toast_logo.png" size="105"
                            title="Toast Internship"
                            description="I designed and implemented an internal report to help diagnose customer service
                            tickets. Throughout the internship, I participated in Agile ceremonies including daily standup,
                            sprint planning, and grooming. While working on my main project, I collaborated with other
                            teams to test new, more efficient code patterns and fixed bugs."/>
            <ProjectElement image="di_logo.png" size="70"
                            title="Dimensional Insight Internship"
                            description="I supported the Dimensional Insight R&D team and participated in daily Agile
                            scrums. My main projects were developing a Treemap chart, a Hexbin map layer, and part of an
                            internal bookmarking system. I also upgraded and debugged older code."/>
            <ProjectElement image="programmetry.png" size="105"
                            title="Programmetry"
                            description={
                                <p><a href="https://programmetry.herokuapp.com/" target="_blank">Programmetry</a> is a
                                    website I originally made for an Independent Study Project and later continued
                                    as a personal project. The works from the academic project explored computational
                                    poetry and the intersection between poetry and interactive art. The website includes
                                    pieces such as "global pandemic", a poem inscribed into a Python program using all 33
                                    Python 3 keywords, "This Person does not Exist", a context free grammar that generates
                                    a new poem on each page load, and "You are in Control", which experiments with poetry,
                                    movement, and user interaction. Later works under the Programmetry project focused
                                    more on visuals being combined with words, sound, and user interaction to create an
                                    experience.</p>
                            }/>
            <h2>Activities</h2>
            <ProjectElement image="audiophiles_logo.jpg" size="105"
                            title="The WPI Audiophiles"
                            description="I've been a member of the WPI Audiophiles, WPI's only co-ed a cappella group,
                            for all four years of college."/>
            <ProjectElement image="mustard_seed.jpg" size="120"
                            title="The Mustard Seed"
                            description="I volunteer at Worcester-based soup kitchen The Mustard Seed once a week."/>
            <br/>
        </div>
    );
}

export default Experience;
