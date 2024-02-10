import Link from "next/link";

export default function World() {
    return (
        <>
            <section className="world-section">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="text-3xl breadcrumbs">
                            <ul className="mt-8 ml-10 text-red-600">
                                <li>World</li>
                                {/* <li>world</li> */}
                            </ul>
                            <div className="mt-12 flex mr-10 absolute top-0 right-0 text-blue-500 text-lg font-bold">
                                <Link href="/category-list/world" className="">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero min-h-80">
                        <div className="hero-content w-full sm:flex block">
                            {/* <div className="grid grid-cols-2"> */}
                            <div className="text-center md:w-6/12 p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://img.freepik.com/free-photo/group-people-are-having-meeting_53876-14039.jpg"
                                    alt="world"
                                    width={450}
                                    height={250}
                                />
                            </div>

                            <div className="mx-auto p-6 md:w-6/12">
                                <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                    What is world?
                                    {/* শিক্ষা ছাড়া আমরা যা চাই তা করতে পারি না বা আমরা আমাদের গন্তব্যে পৌঁছাতে পারি না।
                                    শিক্ষা আমাদের জীবনের প্রতিটি ক্ষেত্রে সাহায্য করে। */}
                                </h1>
                                <div className="flex m-3 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <span className="text-sm">২৪ এপ্রিল, ২০২৪</span>
                                </div>

                                <p className="py-6 text-lg">
                                    The world is the totality of entities, the whole of reality,
                                    or everything that is.[1] The nature of the world has been conceptualized differently in different fields.
                                    Some conceptions see the world as unique while others talk of a "plurality of worlds".
                                    Some treat the world as one simple object while others analyze the world as a complex made up of parts. In scientific cosmology,
                                    the world or universe is commonly defined as "[t]he totality of all space and time; all that is, has been, and will be".
                                    Theories of modality talk of possible worlds as complete and consistent ways how things could have been. Phenomenology,
                                    starting from the horizon of co-given objects present in the periphery of every experience, defines the world as the biggest horizon or the "horizon of all horizons".


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