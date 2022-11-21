function ProjectElement(props) {
    return (
        <div className="projectHolder">
            <div className="circularImage"
                 style={{backgroundImage: "url(images/" + props.image + ")", backgroundSize: props.size + "px"}}/>
            <div className="projectInfo">
                <div className="projectTitle">{props.title}</div>
                <div className="projectDescription">{props.description}</div>
            </div>
        </div>
    );
}

export default ProjectElement;
