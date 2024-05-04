"use client"

import { useGetAllAnimalCollectionQuery, useGetAllCategoryQuery } from "@/redux/api";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const Homepage = () => {

    const [category, setCategory] = useState('')
    const { data } = useGetAllAnimalCollectionQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 });

    const { data: datas } = useGetAllCategoryQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 })

    // filter data based on button selection
    const value = category ? data.filter(item => item.category === category) : data;

    return (
        <div className="">


            {/* button section */}

            <section>
                <div className="lg:flex lg:items-center lg:justify-between">

                    {/* category load as a button */}
                    <div className="lg:flex lg:gap-4">
                        {datas?.map(categorys =>
                            <div key={categorys._id} className={`btn btn-outline rounded-full px-10 uppercase m-2 lg:my-0 ${category === categorys.category ? "btn-success" : "btn-error "}`} onClick={() => setCategory(categorys.category)}>
                                {categorys.category}
                            </div>)}
                    </div>



                    {/* add category and add animal button */}
                    <div className="flex m-2 lg:m-0 gap-4">
                        <Link href='/addcategory'>
                            <button className="btn btn-outline rounded-full px-5 uppercase">
                                Add Category
                            </button>
                        </Link>
                        <Link href='/addanimal'>
                            <button className="btn btn-outline rounded-full px-5 uppercase">
                                Add Animal
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            {/* animal data display section */}

            <section>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
                    {value?.map(animal =>
                        <div key={animal._id} className="w-[160px] h-[191px] my-10">

                            <div>
                                <figure className="flex items-center justify-center w-[160px] h-[191px] bg-slate-950 border border-gray-900 rounded-lg">
                                    <Image src={animal.img} alt='animal image' width={103} height={104} />
                                </figure>
                                <div className="text-center mt-2 uppercase">
                                    <h2 className="">{animal.name}</h2>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </section>
        </div>

    );
};
export default Homepage;