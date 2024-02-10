import HealthCard from "@/components/Ui/healthCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=health&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=health&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function HealthGrid() {
    let healthRes = await getData();
    // console.log(health);
    let healths = healthRes.results;

    return (
        <>
            <section className="health-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {health.map((health, index)=> (
                                <healthCard
                                key={`health=${index}`}
                                image_url={health.image_url}
                                title={health.title}
                                published_at={health.published_at}
                                />
                            ))} */}

                        {Array.isArray(healths) ? (
                            healths.map((health, index) => (
                                <HealthCard
                                    key={`health-${index}`}
                                    image_url={health.image_url}
                                    title={health.title.slice(0, 20) + '....'}
                                    pubDate={health.pubDate}
                                />
                            ))
                        ) : (
                            <p>health is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}