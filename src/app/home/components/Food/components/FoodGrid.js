import FoodCard from "@/components/Ui/foodCrud";

async function getData() {

    // let res = await fetch('https://api.thenewsapi.com/v1/news/top?api_token=aPWhRs6ZE0ZwJiVZkpQ0cRSL62RYWZiV4hxoVGeN&locale=us&categories=business&limit=3');
    let res = await fetch('https://newsdata.io/api/1/news?apikey=pub_37259a50dd3f00fec30ca5593f675634892aa&language=en&category=food&size=8');

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function FoodGrid() {
    let foodRes = await getData();
    // console.log(food);
    let foods = foodRes.results;

    return (
        <>
            <section className="food-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {/* {food.map((food, index)=> (
                                <foodCard
                                key={`food=${index}`}
                                image_url={food.image_url}
                                title={food.title}
                                published_at={food.published_at}
                                />
                            ))} */}

                        {Array.isArray(foods) ? (
                            foods.map((food, index) => (
                                <FoodCard
                                    key={`food-${index}`}
                                    image_url={food.image_url}
                                    title={food.title.slice(0, 20) + '....'}
                                    pubDate={food.pubDate}
                                />
                            ))
                        ) : (
                            <p>food is not an array</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}