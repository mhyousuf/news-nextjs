export default function Domestic() {
    return (
        <>
            <section className="domestic-section">
                <div className="container mx-auto">
                    <div className="text-3xl breadcrumbs">
                        <ul className="mt-8 ml-10 text-red-600">
                            <li>Domestic</li>
                        </ul>
                    </div>
                    <div className="hero min-h-80">
                        <div className="hero-content w-full sm:flex block">
                            <div className="text-center sm:10/12 p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://cdn.pixabay.com/photo/2022/12/18/08/10/domestic-violence-7662939_1280.png"
                                    alt="Domestic"
                                    width={550}
                                    height={450}
                                />
                            </div>

                            <div className="mx-auto sm:6/12">
                                <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                    পলাশবাড়ীতে আওয়ামী লীগের পদধারীর জামায়াত সংশ্লিষ্টতার অভিযোগে তদন্ত
                                </h1>
                                <div className="flex m-3 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <span className="text-sm">২৪ এপ্রিল, ২০২২</span>
                                </div>

                                <p className="py-6 text-sm text-lg">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old....
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}