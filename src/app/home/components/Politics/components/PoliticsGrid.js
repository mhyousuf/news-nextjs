import PoliticsCard from "@/components/Ui/politicsCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=politics&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=politics&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function PoliticsGrid() {
    let politicsRes = await getData();
    // console.log(politics);
    let politicss = politicsRes.results;

    return (
        <>
            <section className="politics-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {politics.map((politics, index)=> (
                                <politicsCard
                                key={`politics=${index}`}
                                image_url={politics.image_url}
                                title={politics.title}
                                published_at={politics.published_at}
                                />
                            ))} */}

                        {Array.isArray(politicss) ? (
                            politicss.map((politics, index) => (
                                <PoliticsCard
                                    key={`politics-${index}`}
                                    image_url={politics.image_url}
                                    title={politics.title.slice(0, 20) + '....'}
                                    pubDate={politics.pubDate}
                                />
                            ))
                        ) : (
                            <p>politics is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}