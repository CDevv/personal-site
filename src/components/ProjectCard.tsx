import { Component } from "solid-js";
import Button from "./Button";

const ProjectCard: Component<{
    title: string,
    description: string
}> = (props) => {
    return (
        <div class="card dark-2">
            <h1>{props.title}</h1>
            <p class="cardDescription">{props.description}</p>
            <div class="bottomElement">
                <Button>Details</Button>
            </div>
        </div>
    )
}

export default ProjectCard;