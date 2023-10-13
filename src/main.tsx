import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store';
import App from "./App.tsx";
import './index.scss';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import PagesProvider from "./providers/PagesProvider.tsx";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PagesProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PagesProvider>
        </Provider>
    </React.StrictMode>
);
