import BusinessCard from "@/components/Ui/businessCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch('https://dev.to/api/articles?per_page=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function BusinessGrid() {
    let businessgrids = await getData();
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

                        {Array.isArray(businessgrids) ? (
                            businessgrids.map((business, index) => (
                                <BusinessCard
                                    key={`business-${index}`}
                                    cover_image={business.social_image}
                                    title={business.title.slice(0, 20) + '....'}
                                    published_at={business.published_at}
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