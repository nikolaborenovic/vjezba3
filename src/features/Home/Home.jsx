import { useNavigate } from 'react-router-dom';
import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSeven from './components/SectionSeven';
import SectionSix from './components/SectionSix';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'


const Home = () => {
    
    const navigate = useNavigate();
    const handleRedirect = (route) => {
        navigate(route)
    }
    return(
        <div>
            <SectionOne handleRedirect={handleRedirect}/>
            <SectionTwo/>
            <SectionThree handleRedirect={handleRedirect}/>
            <SectionFour handleRedirect={handleRedirect}/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven handleRedirect={handleRedirect}/>
        </div>
    )
}

export default Home;