import Layout from "@/components/Layout/layout";
import Domestic from "./components/Domestic/page";
import DomesticGrid from "./components/Domestic/components/DomesticGrid";
import Education from "./components/Education/page";
import EducationGrid from "./components/Education/components/EducationGrid";
import Entertainment from "./components/Entertainment/page";
import EntertainmentGrid from "./components/Entertainment/components/entertainmentGrid";
import Environment from "./components/Environment/page";
import EnvironmentGrid from "./components/Environment/components/EnvironmentGrid";
import Food from "./components/Food/page";
import FoodGrid from "./components/Food/components/FoodGrid";
import Health from "./components/Health/page";
import HealthGrid from "./components/Health/components/HealthGrid";
import Politics from "./components/Politics/page";
import PoliticsGrid from "./components/Politics/components/PoliticsGrid";
import Science from "./components/Science/page";
import ScienceGrid from "./components/Science/components/ScienceGrid";
import Sports from "./components/Sports/page";
import SportsGrid from "./components/Sports/components/SportsGrid";
import Technology from "./components/Technology/page";
import TechnologyGrid from "./components/Technology/components/TechnologyGrid";
import Top from "./components/Top/page";
import TopGrid from "./components/Top/components/TopGrid";
import Tourism from "./components/Tourism/page";
import TourismGrid from "./components/Tourism/components/TourismGrid";
import World from "./components/World/page";
import WorldGrid from "./components/World/components/WorldGrid";
import Business from "./components/Business";
import BusinessGrid from "./components/Business/components/BusinessGrid";

export default function Home() {
    return (
            <>
                <Layout>

                    <Business />
                    <BusinessGrid />

                    <Domestic />
                    <DomesticGrid />

                    <Education />
                    <EducationGrid />

                    <Entertainment />
                    <EntertainmentGrid />

                    <Environment />
                    <EnvironmentGrid />

                    <Food />
                    <FoodGrid />

                    <Health />
                    <HealthGrid />

                    <Politics />
                    <PoliticsGrid />

                    <Science />
                    <ScienceGrid />

                    <Sports />
                    <SportsGrid />

                    <Technology />
                    <TechnologyGrid />

                    <Top />
                    <TopGrid />

                    <Tourism />
                    <TourismGrid />

                    <World />
                    <WorldGrid />
                </Layout>
            </>
    );
  }