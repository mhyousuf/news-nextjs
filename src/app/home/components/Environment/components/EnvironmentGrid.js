import EnvironmentCard from "@/components/Ui/environmentCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=environment&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function EnvironmentGrid() {
    let environmentRes = await getData();
    // console.log(environment);
    let environments = environmentRes.results;

    return (
        <>
            <section className="environment-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {environment.map((environment, index)=> (
                                <environmentCard
                                key={`environment=${index}`}
                                image_url={environment.image_url}
                                title={environment.title}
                                published_at={environment.published_at}
                                />
                            ))} */}

                        {Array.isArray(environments) ? (
                            environments.map((environment, index) => (
                                <EnvironmentCard
                                    key={`environment-${index}`}
                                    image_url={environment.image_url}
                                    title={environment.title.slice(0, 20) + '....'}
                                    pubDate={environment.pubDate}
                                />
                            ))
                        ) : (
                            <p>environment is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}