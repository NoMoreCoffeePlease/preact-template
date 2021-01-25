import { FunctionalComponent, h } from "preact";
import * as style from "./style.scss";
import iconValues from "../../assets/iconValues";

const Header: FunctionalComponent = () => {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={iconValues.logo} width="30" height="30" alt="" />
            </a>
        </nav>
    );
};

export default Header;
