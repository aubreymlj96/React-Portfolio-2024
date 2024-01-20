import './app.css';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Resume from './components/resume'
import Contact from './components/contact';
import Footer from './components/footer';

function App(){
    return (
        <div className='porfolio'>
            <Header />
            <About />
            <Portfolio />
            <Resume />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;