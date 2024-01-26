import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Portfolio from './components/portfolio.jsx';
import Resume from './components/resume.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <About/>,
            },
            {
                path: 'portfolio',
                element: <Portfolio/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            },
            {
                path: 'resume',
                element: <Resume/>,
            },
        ],
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)