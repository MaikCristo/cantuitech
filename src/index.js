import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from "./Routes/Home";
import Missao from "./Routes/Missao";
import Institucional from "./Routes/Institucional";
import NotFound from "./Routes/NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'



/*const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Missao",
                element: <Missao/>
            },
            {
                path: "/Institucional",
                element: <Institucional />
            },
        ],
    },
])
*/
const AppMenu = () => {
    return (

        <Router>

            <Routes>
                <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="Missao" element={<Missao />} />
                <Route path="Institucional" element={<Institucional />} />
                    {/* Rota de erro (404) */}
                <Route path="*" element={<NotFound />} />
            </Route>
            </Routes>
        </Router>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMenu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
