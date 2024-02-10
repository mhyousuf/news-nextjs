import SportsCard from "@/components/Ui/sportsCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=sports&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=sports&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function SportsGrid() {
    let sportsRes = await getData();
    // console.log(sports);
    let sportses = sportsRes.results;

    return (
        <>
            <section className="sports-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {sports.map((sports, index)=> (
                                <sportsCard
                                key={`sports=${index}`}
                                image_url={sports.image_url}
                                title={sports.title}
                                published_at={sports.published_at}
                                />
                            ))} */}

                        {Array.isArray(sportses) ? (
                            sportses.map((sports, index) => (
                                <SportsCard
                                    key={`sports-${index}`}
                                    image_url={sports.image_url}
                                    title={sports.title.slice(0, 20) + '....'}
                                    pubDate={sports.pubDate}
                                />
                            ))
                        ) : (
                            <p>sports is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}