import { A } from "@solidjs/router";
import { ParentComponent } from "solid-js";

const NavItem: ParentComponent<{
    href: string
}> = (props) => {
    return (
        <A
            class="navitem"
            href={props.href}
        >{props.children}</A>
    )
}

export default NavItem;