import { Component, ParentComponent } from "solid-js";

const Button: ParentComponent<{
    onClick?: () => void
}> = (props) => {
    return (
        <button class="button button-border dark-3" on:click={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;