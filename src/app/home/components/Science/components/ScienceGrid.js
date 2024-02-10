import ScienceCard from "@/components/Ui/scienceCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=science&limit=4');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=science&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function ScienceGrid() {
    let scienceRes = await getData();
    // console.log(science);
    let sciences = scienceRes.results;

    return (
        <>
            <section className="science-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {science.map((science, index)=> (
                                <scienceCard
                                key={`science=${index}`}
                                image_url={science.image_url}
                                title={science.title}
                                published_at={science.published_at}
                                />
                            ))} */}

                        {Array.isArray(sciences) ? (
                            sciences.map((science, index) => (
                                <ScienceCard
                                    key={`science-${index}`}
                                    image_url={science.image_url}
                                    title={science.title.slice(0, 20) + '....'}
                                    pubDate={science.pubDate}
                                />
                            ))
                        ) : (
                            <p>science is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}