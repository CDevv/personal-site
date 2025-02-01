import { Component } from "solid-js";
import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";

const Home: Component = () => {
    return (
        <>
            <Button>Hello!</Button>
            <ProjectCard title="Hello!" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat rhoncus leo tempor tincidunt. Sed vel ex porta, lacinia dui sed, ultrices augue. Pellentesque mollis, tellus id varius vestibulum, orci urna pretium libero, sed fringilla magna tellus tempor mi. Curabitur ex lorem, iaculis a ullamcorper ac, ornare quis elit. Phasellus pretium sodales maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi tincidunt ante et elementum sagittis."></ProjectCard>
        </>
    )
}

export default Home;