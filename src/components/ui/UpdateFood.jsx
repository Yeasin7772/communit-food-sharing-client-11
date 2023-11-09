import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const UpdateFood = () => {
    const updateData = useLoaderData()
    const { user } = useAuth()
    const { _id,
        food_image, food_name, donator_image, donator_name, food_quantity, pickup_location,
        expired_date, additional_notes,
        donator_email, donation_money,
    } = updateData || {}


    const handelUpdate = e => {
        e.preventDefault()
        const form = e.target
        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const food_quantity = form.food_quantity.value;
        const expired_date = form.expired_date.value;
        const donator_name = form.donator_name.value
        const donator_image = form.donator_image.value
        const pickup_location = form.pickup_location.value
        const donator_email = form.donator_email.value
        const additional_notes = form.pickup_location.value
        const donation_money = form.donation_money.value
        const updateFood = {
            food_image, food_name,
            donator_image, donator_name,
            food_quantity, pickup_location,
            expired_date, additional_notes,
            donator_email, donation_money,
        }
        console.log(updateFood);
        //form.reset()
        fetch(`https://communit-food-sharing-server.vercel.app/api/v1/foods/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });

    }
    return (
        <div >
            <div className="modal-box " style={{ width: "100%", margin: "0 auto" }}>

                <div className="text-center space-y-5 mt-5 mb-5 ">
                    <h1 className="text-4xl font-semibold">{food_name}</h1>

                </div>
                <form onSubmit={handelUpdate} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" name="food_name" defaultValue={food_name} className="input input-bordered" placeholder="Food Name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input  type="text" name="food_image" defaultValue={food_image} placeholder="Food PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Quantity</span>
                            </label>
                            <input  type="Number" defaultValue={food_quantity} name="food_quantity" placeholder="Food Quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Expired Date</span>
                            </label>
                            <input  type="date" name="expired_date" defaultValue={expired_date} placeholder="Expired Date" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PickUp Location</span>
                            </label>
                            <input  type="text" name="pickup_location" defaultValue={pickup_location} placeholder="Location" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input readOnly type="email" defaultValue={user?.email} name="donator_email" placeholder="Enter Your email" className="input input-bordered" required />
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

                        <input className="btn btn-primary btn-block" type="submit" value="Update" />
                    </div>
                </form>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateFood;