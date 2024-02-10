import DomesticCard from "@/components/Ui/domesticCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=domestic&limit=3');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=domestic&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function DomesticGrid() {
    let domesticRes = await getData();
    let domestics = domesticRes.results;
    // console.log(domesticgrids);

    return (
        <>
            <section className="domestic-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* {domesticgrids.map((domestic, index)=> (
                                <domesticCard
                                key={`domestic=${index}`}
                                image_url={domestic.image_url}
                                title={domestic.title}
                                published_at={domestic.published_at}
                                />
                            ))} */}

                        {Array.isArray(domestics) ? (
                            domestics.map((domestic, index) => (
                                <DomesticCard
                                    key={`domestic-${index}`}
                                    image_url={domestic.image_url}
                                    title={domestic.title.slice(0, 20) + '....'}
                                    pubDate={domestic.pubDate}
                                />
                            ))
                        ) : (
                            <p>domesticgrids is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}