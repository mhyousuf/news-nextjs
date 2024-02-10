import TopCard from "@/components/Ui/topCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=science&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=top&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function TopGrid() {
    let topRes = await getData();
    // console.log(top);
    let tops = topRes.results;

    return (
        <>
            <section className="top-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {top.map((top, index)=> (
                                <topCard
                                key={`top=${index}`}
                                image_url={top.image_url}
                                title={top.title}
                                published_at={top.published_at}
                                />
                            ))} */}

                        {Array.isArray(tops) ? (
                            tops.map((top, index) => (
                                <TopCard
                                    key={`top-${index}`}
                                    image_url={top.image_url}
                                    title={top.title.slice(0, 20) + '....'}
                                    pubDate={top.pubDate}
                                />
                            ))
                        ) : (
                            <p>top is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}