import Carousel from "../components/Carousel"
import FeatureStart from "../components/FeatureStart"
import AboutStart from "../components/AboutStart"
import ServiceStart from "../components/ServiceStart"

export default function Home(){
    return (
        <div>
            <Carousel/>
            <FeatureStart/>
            <AboutStart/>
            <ServiceStart/>
        </div>
    )
}