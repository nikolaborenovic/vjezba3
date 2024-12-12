import SectionFive from './components/SectionFive';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionSeven from './components/SectionSeven';
import SectionSix from './components/SectionSix';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'


const Home = () => {
    return(
        <div>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
        </div>
    )
}

export default Home;