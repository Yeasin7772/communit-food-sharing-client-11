import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const FoodDeatils = () => {
    const foodDetails = useLoaderData()
    const { user } = useAuth()
    //console.log(foodDetails);
    console.log(Object.keys(foodDetails).join(','));
    const { _id, food_image, food_name,
        donator_image, donator_name,
        food_quantity, pickup_location,
        expired_date, additional_notes } = foodDetails || {}


    return (
        <div>
            {/* <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="h-64 w-full" src={food_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Food Name : {food_name}</h2>
                    <h2 className="card-title"> Food Quantity : {food_quantity}</h2>
                    <p> <span className="text-xl">Location:</span> {pickup_location}</p>
                    <p> expired_date: {expired_date}</p>
                    <div className="flex gap-5 justify-center items-center">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src={donator_image} />
                            </div>
                        </div>

                        <p className="card-title">{donator_name}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <Link
                         to={`/foodDetails/${_id}`}>
                            <button className="btn btn-outline btn-primary">View Detail</button>
                        </Link>
                    </div>
                </div>
            </div> */}

            <div className="text-center space-y-5 mt-5 mb-5 ">

                <h1 className="text-4xl font-semibold">Donator name : <span className="text-primary">{donator_name}</span></h1>
                <h1 className="text-2xl font-semibold">Pickup Location  : <span className="text-primary">{pickup_location}</span></h1>

            </div>

            <div className="card lg:card-side ">
                <figure><img className="w-96 md:w-full lg:w-96 h-96" src={food_image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{food_name}</h2>
                    <h2 className="card-title">Quantity : {food_quantity}</h2>
                    <p>Location :{pickup_location}</p>
                    <p>Additional Notes: {additional_notes}</p>
                    <div className="card-actions justify-end">
                        <Link to={{ _id }}>
                            <button
                                onClick={() => document.getElementById('my_modal_1').showModal()}
                                className="btn btn-outline btn-primary">Add Request</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
                <dialog id="my_modal_1" className="modal">

                    <div className="modal-box">

                        <div className="text-center space-y-5 mt-5 mb-5 ">
                            <h1 className="text-4xl font-semibold">{food_name}</h1>
                           
                        </div>
                        <form className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input type="text" name="food_name" className="input input-bordered" placeholder="Food Name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Image</span>
                                    </label>
                                    <input type="text" name="food_image" placeholder="Food PhotoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input type="Number" name="food_quantity" placeholder="Food Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expired Date</span>
                                    </label>
                                    <input type="date" name="expired_date" placeholder="Expired Date" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PickUp Location</span>
                                    </label>
                                    <input type="text" name="pickup_location" placeholder="Location" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input readOnly type="donator_email" defaultValue={user?.email} name="donator_email" placeholder="Enter Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Your name</span>
                                    </label>
                                    <input readOnly type="text" defaultValue={user?.displayName} name="donator_name" placeholder="Enter Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL Your name</span>
                                    </label>
                                    <input readOnly type="photo" name="donator_image" defaultValue={user?.photoURL} placeholder="Enter PhotoURL" className="input input-bordered" required />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Additional Notes
                                        </span>
                                    </label>
                                    <input name="additional_notes" type="text" placeholder="Additional Notes" className="input input-bordered " required />

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Food Status
                                        </span>
                                    </label>
                                    <input name="Food_status" readOnly type="text" defaultValue='Available' placeholder="Food Status" className="input input-bordered " required />

                                </div>
                            </div>
                            <div className="form-control mt-6 modal-action">

                                <input className="btn btn-primary btn-block" type="submit" value=" Send request" />
                            </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Cancel</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default FoodDeatils;
