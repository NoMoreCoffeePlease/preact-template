import { FunctionalComponent, h } from "preact";
import * as style from "./style.scss";

const Notfound: FunctionalComponent = () => {
    return (
        <div class={style.notfound}>
            <h1>Error 404</h1>
            <p>That page doesn&apos;t exist.</p>
        </div>
    );
};

export default Notfound;
