import EducationCard from "@/components/Ui/educationCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=education&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function EducationGrid() {
    let educationsRes = await getData();
    // console.log(educations);
    let educations = educationsRes.results;

    return (
        <>
            <section className="education-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* {educations.map((education, index)=> (
                                <educationCard
                                key={`education=${index}`}
                                image_url={education.image_url}
                                title={education.title}
                                pubDate={education.pubDate}
                                />
                            ))} */}

                        {Array.isArray(educations) ? (
                            educations.map((education, index) => (
                                <EducationCard
                                    key={`education-${index}`}
                                    image_url={education.image_url}
                                    title={education.title.slice(0, 20) + '....'}
                                    pubDate={education.pubDate}
                                />
                            ))
                        ) : (
                            <p>educations is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}