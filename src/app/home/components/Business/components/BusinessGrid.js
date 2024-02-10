import BusinessCard from "@/components/Ui/NewsCard";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=business&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function BusinessGrid() {
    let businessRes = await getData();
    let businesses = businessRes.results;
    // console.log(businessgrids);

    return (
        <>
            <section className="business-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* {businessgrids.map((business, index)=> (
                                <BusinessCard
                                key={`business=${index}`}
                                image_url={business.image_url}
                                title={business.title}
                                published_at={business.published_at}
                                />
                            ))} */}

                        {Array.isArray(businesses) ? (
                            businesses.map((business, index) => (
                                <BusinessCard
                                    key={`business-${index}`}
                                    article_id={business.article_id}
                                    image_url={business.image_url}
                                    title={business.title.slice(0, 20) + '....'}
                                    pubDate={business.pubDate}
                                />

                            ))
                        ) : (
                            <p>businessgrids is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}