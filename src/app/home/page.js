import Layout from "@/components/Layout/layout";
import CategoryNewsSection from "./components/CategoryNewsSection";

export default function Home() {
    return (
        <>
            <Layout>
                <CategoryNewsSection category="business" />

                <CategoryNewsSection category="education" />

                <CategoryNewsSection category="food" />
            </Layout>
        </>
    );
}