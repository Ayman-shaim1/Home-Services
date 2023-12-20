import DefaultLayout from "./app/layouts/DefaultLayout";
import { Provider } from "react-redux";
import store from "./app/redux/store";

export default function App() {

    return (
        <Provider store={store}>
            <DefaultLayout/>
       </Provider>)
    
}