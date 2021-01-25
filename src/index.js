import "./style/reset.scss";
import "./style/index.scss";
import "./style/themes.scss";
import "./style/_base.scss";
import { Provider } from "react-redux";
import { store } from "./redux-store";
import MainNavigator from "./navigation/main-navigator";
const root = () => {
    return (
        <Provider store={store}>
            <MainNavigator />
        </Provider>
    );
};

export default root;
