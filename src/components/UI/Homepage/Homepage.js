"use client"

import { useGetAllAnimalCollectionQuery } from "@/redux/api";
import Image from "next/image";


const Homepage = () => {
    const { data } = useGetAllAnimalCollectionQuery('', { refetchOnMountOrArgChange: true, pollingInterval: 30000 })
    console.log(data);
    return (
        <div className="grid grid-cols-6 gap-4">
            {data?.map(animal =>
                <div key={animal._id}>
                    
                    <div>
                        <figure className="px-10 pt-10">
                            <Image src={animal.img} alt='animal image' width={100} height={100} />
                        </figure>
                        <div className="text-center">
                            <h2 className="card-title">{animal.name}</h2>

                        </div>
                    </div>


                </div>
            )}
        </div>
    );
};
export default Homepage;