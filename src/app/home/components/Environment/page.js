import Link from "next/link";

export default function Environment() {
    return (
        <>
            <section className="environment-section">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="text-3xl breadcrumbs">
                            <ul className="mt-8 ml-10 text-red-600">
                                <li>Environments</li>
                                {/* <li>environment</li> */}
                            </ul>
                            <div className="mt-12 flex mr-10 absolute top-0 right-0 text-blue-500 text-lg font-bold">
                                <Link href="/category-list/environment" className="">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero min-h-80">
                        <div className="hero-content w-full sm:flex block">
                            {/* <div className="grid grid-cols-2"> */}
                            <div className="text-center md:w-6/12 p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                                    alt="environment"
                                    width={450}
                                    height={250}
                                />
                            </div>

                            <div className="mx-auto p-6 md:w-6/12">
                                <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                    What is Environment?
                                    {/* শিক্ষা ছাড়া আমরা যা চাই তা করতে পারি না বা আমরা আমাদের গন্তব্যে পৌঁছাতে পারি না।
                                    শিক্ষা আমাদের জীবনের প্রতিটি ক্ষেত্রে সাহায্য করে। */}
                                </h1>
                                <div className="flex m-3 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <span className="text-sm">২৪ এপ্রিল, ২০২২</span>
                                </div>

                                <p className="py-6 text-sm text-lg">
                                    আমরা সবাই জানি, শিক্ষা আমাদের জীবনে গুরুত্বপূর্ণ।
                                    শিক্ষাই একমাত্র জিনিস যা আমাদের কোনটি ভুল এবং কোনটি সঠিক তা পার্থক্য করতে সাহায্য করে।
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    );
}