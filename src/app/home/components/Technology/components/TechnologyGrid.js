import TechnologyCard from "@/components/Ui/technologyCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=science&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=technology&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function TechnologyGrid() {
    let technologyRes = await getData();
    // console.log(technology);
    let technologys = technologyRes.results;

    return (
        <>
            <section className="technology-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {technology.map((technology, index)=> (
                                <technologyCard
                                key={`technology=${index}`}
                                image_url={technology.image_url}
                                title={technology.title}
                                published_at={technology.published_at}
                                />
                            ))} */}

                        {Array.isArray(technologys) ? (
                            technologys.map((technology, index) => (
                                <TechnologyCard
                                    key={`technology-${index}`}
                                    image_url={technology.image_url}
                                    title={technology.title.slice(0, 20) + '....'}
                                    pubDate={technology.pubDate}
                                />
                            ))
                        ) : (
                            <p>technology is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}