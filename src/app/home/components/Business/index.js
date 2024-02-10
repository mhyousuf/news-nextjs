import Link from "next/link";

export default function Business() {
    return (
        <>
            <section className="business-section">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="text-3xl breadcrumbs">
                            <ul className="mt-8 ml-10 text-red-600">
                                <li>Business</li>
                            </ul>

                            <div className="mt-12 flex mr-10 absolute top-0 right-0 text-blue-500 text-lg font-bold">
                                <Link href="/category-list/business" className="">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero min-h-80">
                        <div className="hero-content w-full sm:flex block">
                            <div className="text-center md:w-6/12 p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://c8.alamy.com/comp/H1EE3N/news-concept-business-news-on-digital-background-H1EE3N.jpg"
                                    alt="Business"
                                    width={450}
                                    height={250}
                                />
                            </div>

                            <div className="mx-auto md:w-6/12">
                                <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                    পলাশবাড়ীতে আওয়ামী লীগের পদধারীর জামায়াত সংশ্লিষ্টতার অভিযোগে তদন্ত
                                </h1>
                                <div className="flex m-3 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <span className="text-sm">২৪ এপ্রিল, ২০২২</span>
                                </div>

                                <p className="py-6 text-lg">
                                    গাইবান্ধার পলাশবাড়ীতে নবগঠিত উপজেলা আওয়ামী লীগের সাংগঠনিক সম্পাদক মহিবুল হাসান মুকিতের বিরুদ্ধে সামাজিক যোগাযোগ মাধ্যমে আপত্তিকর বক্তব্য ও জামায়াতে ইস...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}