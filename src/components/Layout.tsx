import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import NavItem from "./NavItem";

const Layout: ParentComponent = (props) => {
    return (     
        <>
            <div class="layout dark-2">
                <NavItem href="#">Test</NavItem>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout;