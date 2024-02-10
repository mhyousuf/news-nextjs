import EntertainmentCard from "@/components/Ui/entertainmentCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=entertainment&size=8');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=entertainment&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function EntertainmentGrid() {
    let entertainmentsRes = await getData();
    // console.log(entertainments);
    let entertainments = entertainmentsRes.results;

    return (
        <>
            <section className="entertainment-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {entertainments.map((entertainment, index)=> (
                                <entertainmentCard
                                key={`entertainment=${index}`}
                                image_url={entertainment.image_url}
                                title={entertainment.title}
                                pubDate={entertainment.pubDate}
                                />
                            ))} */}

                        {Array.isArray(entertainments) ? (
                            entertainments.map((entertainment, index) => (
                                <EntertainmentCard
                                    key={`entertainment-${index}`}
                                    image_url={entertainment.image_url}
                                    title={entertainment.title.slice(0, 20) + '....'}
                                    pubDate={entertainment.pubDate}
                                />
                            ))
                        ) : (
                            <p>entertainments is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}