import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from "./store/store"
import {CookiesProvider} from 'react-cookie';
import {Provider} from "react-redux";

const Root = () => {
    return(
        <CookiesProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </CookiesProvider>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
