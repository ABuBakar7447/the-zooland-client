"use client"
import { useAnimalDataAddMutation } from "@/redux/api";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const AddAnimal = () => {
    const [animalDataAdd] = useAnimalDataAddMutation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();



    const img_hosting_token = process.env.NEXT_PUBLIC_imgbb_secret;
    // console.log(img_hosting_token);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const handleCreate = data => {
        console.log(data);
        const formdata = new FormData();
        formdata.append('image', data.img[0])



        fetch(img_hosting_url, {
            method: 'POST',
            body: formdata
        })

            .then(res => res.json())
            .then(imgresponse => {


                if (imgresponse.success) {
                    const imgURL = imgresponse.data.display_url;


                    const newanimaldata = {
                        name: data.animalName,
                        category: data.category,
                        img: imgURL,
                    }

                    console.log(newanimaldata);


                    animalDataAdd({ newanimaldata });
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "New animal data has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });


                }
            })

    }

    return (
        <div className="min-h-screen lg:w-1/2 mx-auto">

            <div className="lg:w-3/4 mx-auto bg-white my-24 rounded-lg">


                <form onSubmit={handleSubmit(handleCreate)} className="card-body text-black">

                    <div className="lg:w-1/2 mx-auto">

                        <p className="text-black font-bold text-[18px]">
                            Add Animal
                        </p>


                        <div className="form-control my-5">

                            <input placeholder="Animal Name" className="bg-gray-300 input input-bordered" {...register("animalName", { required: true, maxLength: 20 })} />

                        </div>


                        <div className="form-control my-5">
                            <label className="form-control w-full max-w-xs">


                                <select placeholder="Choose Category" className="select select-bordered bg-gray-300 text-black" {...register("category")}>
                                    <option disabled selected>Pick one</option>
                                    <option value="land animal">land animal</option>
                                    <option value="bird">bird</option>
                                    <option value="fish">fish</option>
                                    <option value="insect">insect</option>
                                </select>


                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs mt-2">

                            <input type="file"
                                {...register("img", { required: true })}
                                className="file-input bg-gray-300 text-black file-input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="form-control mt-6 lg:w-1/4 mx-auto">
                        <input type="submit" value="Create Animal" className="btn btn-outline bg-black text-white font-bold" />
                    </div>
                </form>
            </div>



        </div>

    );
};

export default AddAnimal;