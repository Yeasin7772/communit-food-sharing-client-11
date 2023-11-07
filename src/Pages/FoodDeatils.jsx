import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const FoodDeatils = () => {
    const foodDetails = useLoaderData()
    const { user } = useAuth()
    //console.log(foodDetails);
    //console.log(Object.keys(foodDetails).join(','));
    const { _id, food_image, food_name,
        donator_name,
        food_quantity, pickup_location,
        expired_date, additional_notes } = foodDetails || {}

    const handelRequestFood = (e) => {
        e.preventDefault()
        const form = e.target
        const food_name = form.food_name.value;
        const food_quantity = form.food_quantity.value;
        const expired_date = form.expired_date.value;
        const donator_name = form.donator_name.value
        const donator_image = form.donator_image.value
        const pickup_location = form.pickup_location.value
        const donator_email = form.donator_email.value
        const additional_notes = form.pickup_location.value
        const donation_money = form.donation_money.value
        const request_date = form.request_date.value
        const user_name = form.user_name.value


        const requestFood = {
            food_image, food_name,
            donator_image, donator_name,
            food_quantity, pickup_location,
            expired_date, additional_notes,
            donator_email, donation_money,  request_date,
            user_name
        }
        // console.log(requestFood);

        fetch('http://localhost:5000/api/v1/user/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }

        })


    }


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
                        <form onSubmit={handelRequestFood} className="card-body">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input readOnly type="text" name="food_name" defaultValue={food_name} className="input input-bordered" placeholder="Food Name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Image</span>
                                    </label>
                                    <input readOnly type="text" name="food_image" defaultValue={food_image} placeholder="Food PhotoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input readOnly type="Number" defaultValue={food_quantity} name="food_quantity" placeholder="Food Quantity" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expired Date</span>
                                    </label>
                                    <input readOnly type="date" name="expired_date" defaultValue={expired_date} placeholder="Expired Date" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Current Date</span>
                                    </label>
                                    <input type="date" name="request_date" placeholder="Date" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PickUp Location</span>
                                    </label>
                                    <input readOnly type="text" name="pickup_location" defaultValue={pickup_location} placeholder="Location" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input readOnly type="email" defaultValue={user?.email} name="donator_email" placeholder="Enter Your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Donator Name </span>
                                    </label>
                                    <input readOnly type="text" defaultValue={donator_name} name="donator_name" placeholder="Enter Your name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Your name</span>
                                    </label>
                                    <input readOnly type="text" defaultValue={user?.displayName} name="user_name" placeholder="Enter Your name" className="input input-bordered" required />
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
                                    <input name="additional_notes" type="text" defaultValue={additional_notes} className="input input-bordered " required />

                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Donation Money
                                        </span>
                                    </label>
                                    <input name="donation_money" type="text" defaultValue='00' className="input input-bordered " required />

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
