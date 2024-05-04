"use client"
import { useAnimalCategoryAddMutation } from "@/redux/api";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const AddCategory = () => {
    const [animalCategoryAdd] = useAnimalCategoryAddMutation()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleCreate = data => {
        // console.log(data);
 
        const newanimalCategory = {
            category: data.name,
            
        }

        // console.log(newanimalCategory);


        animalCategoryAdd({ newanimalCategory });
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "New animal category has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        reset();

    }
    return (
        <div>
            <div className="min-h-screen lg:w-1/2 mx-auto">

                <div className="lg:w-3/4 mx-auto bg-white my-24 rounded-lg">


                    <form onSubmit={handleSubmit(handleCreate)} className="card-body text-black">

                        <div className="lg:w-1/2 mx-auto">

                            <p className="text-black font-bold text-[18px]">
                                Add Category
                            </p>


                            <div className="form-control my-5">
                                
                                <input placeholder="name" className="bg-gray-300 input input-bordered" {...register("name", { required: true, maxLength: 20 })} />

                            </div>

                        </div>

                        <div className="form-control mt-6 lg:w-1/4 mx-auto">
                            <input type="submit" value="Save" className="btn btn-outline bg-black text-white font-bold" />
                        </div>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default AddCategory;