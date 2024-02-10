import TourismCard from "@/components/Ui/tourismCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/tourism?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=science&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=tourism&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function TourismGrid() {
    let tourismRes = await getData();
    // console.log(tourism);
    let tourisms = tourismRes.results;

    return (
        <>
            <section className="tourism-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {tourism.map((tourism, index)=> (
                                <tourismCard
                                key={`tourism=${index}`}
                                image_url={tourism.image_url}
                                title={tourism.title}
                                published_at={tourism.published_at}
                                />
                            ))} */}

                        {Array.isArray(tourisms) ? (
                            tourisms.map((tourism, index) => (
                                <TourismCard
                                    key={`tourism-${index}`}
                                    image_url={tourism.image_url}
                                    title={tourism.title.slice(0, 20) + '....'}
                                    pubDate={tourism.pubDate}
                                />
                            ))
                        ) : (
                            <p>tourism is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}