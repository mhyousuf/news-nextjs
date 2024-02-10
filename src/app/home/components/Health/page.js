import Link from "next/link";

export default function Health() {
    return (
        <>
            <section className="health-section">
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="text-3xl breadcrumbs">
                            <ul className="mt-8 ml-10 text-red-600">
                                <li>Healths</li>
                                {/* <li>health</li> */}
                            </ul>
                            <div className="mt-12 flex mr-10 absolute top-0 right-0 text-blue-500 text-lg font-bold">
                                <Link href="/category-list/health" className="">View All</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero min-h-80">
                        <div className="hero-content w-full sm:flex block">
                            {/* <div className="grid grid-cols-2"> */}
                            <div className="text-center md:w-6/12 p-6 rounded-xl">
                                <img
                                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor-pointer"
                                    src="https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?w=740&t=st=1707113304~exp=1707113904~hmac=e1f11500e562568f62f9370f3ec5f7269d0472ab9be0352f1eb18101ebb5c929"
                                    alt="health"
                                    width={450}
                                    height={250}
                                />
                            </div>

                            <div className="mx-auto p-6 md:w-6/12">
                                <h1 className="text-3xl font-bold flex flex-wrap gap-2">
                                    Concepts in mental health
                                    {/* শিক্ষা ছাড়া আমরা যা চাই তা করতে পারি না বা আমরা আমাদের গন্তব্যে পৌঁছাতে পারি না।
                                    শিক্ষা আমাদের জীবনের প্রতিটি ক্ষেত্রে সাহায্য করে। */}
                                </h1>
                                <div className="flex m-3 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    <span className="text-sm">২৪ এপ্রিল, ২০২২</span>
                                </div>

                                <p className="py-6 text-lg">
                                    Mental health is a state of mental well-being that enables people to cope with the stresses of life,
                                    realize their abilities, learn well and work well, and contribute to their community.
                                    It is an integral component of health and well-being that underpins our individual and collective abilities to make decisions,
                                    build relationships and shape the world we live in. Mental health is a basic human right.
                                    And it is crucial to personal, community and socio-economic development.
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