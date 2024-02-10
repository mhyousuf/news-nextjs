import WorldCard from "@/components/Ui/worldCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/world?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=science&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=world&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function WorldGrid() {
    let worldRes = await getData();
    // console.log(world);
    let worlds = worldRes.results;

    return (
        <>
            <section className="world-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {world.map((world, index)=> (
                                <worldCard
                                key={`world=${index}`}
                                image_url={world.image_url}
                                title={world.title}
                                published_at={world.published_at}
                                />
                            ))} */}

                        {Array.isArray(worlds) ? (
                            worlds.map((world, index) => (
                                <WorldCard
                                    key={`world-${index}`}
                                    image_url={world.image_url}
                                    title={world.title.slice(0, 20) + '....'}
                                    pubDate={world.pubDate}
                                />
                            ))
                        ) : (
                            <p>world is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}