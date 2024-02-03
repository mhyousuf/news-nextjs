import Layout from "@/components/Layout/layout";
import Business from "./components/Business";
import BusinessGrid from "./components/BusinessGrid";
import Domestic from "./components/Domestic/page";
import DomesticGrid from "./components/Domestic/components/DomesticGrid";

export default function Home() {
    return (
            <>
                <Layout>

                    <Business />

                    <BusinessGrid />

                    <Domestic />

                    <DomesticGrid />
                </Layout>
            </>
    );
  }