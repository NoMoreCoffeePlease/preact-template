import { useContext } from "preact/hooks";
import { TranslateContext } from "@denysvuika/preact-translate";
import { FunctionalComponent, h } from "preact";
import * as style from "./style.scss";

const Home: FunctionalComponent = () => {
    const { setLang, t, lang } = useContext(TranslateContext);
    return (
        <div class={style.home}>
            <div class="row">
                <div class="col-lg-10">
                    <h1>{t("home.title")}</h1>
                    <p>{t("home.text")}</p>
                </div>
                <div class={"col-lg-2"}>
                    <h1>{t("home.title")}</h1>
                    <p>{t("home.text")}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
