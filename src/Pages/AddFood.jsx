import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const AddFood = () => {
    const { user } = useAuth()

    const handelDonation = (e) => {

        e.preventDefault()
        const form = e.target
        const food_image = form.food_image.value;
        const food_name = form.food_name.value;
        const food_quantity = form.food_quantity.value;
        const expired_date = form.expired_date.value;
        const donator_name = form.donator_name.value
        const donator_image = form.donator_image.value
        const pickup_location = form.pickup_location.value
        const donator_email = form.donator_email.value
        const additional_notes = form.pickup_location.value
        const Food_status = form.Food_status.value

        const addFood = {
            food_image, food_name,
            donator_image, donator_name,
            food_quantity, pickup_location,
            expired_date, additional_notes,
            donator_email, Food_status
        }

       // console.log(addFood);
         form.reset()
        fetch('http://localhost:5000/api/v1/foods', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addFood),
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 if (data.insertedId) {
                    Swal.fire({
                        title: "Thank You!",
                        text: "For You Donation.",
                        imageUrl: "https://i.ibb.co/PcRJ9Kj/volunteer-holding-box-containing-donations-charity.jpg",
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: "Custom image"
                      });
                }
            });
    }
    return (
        <div>
            <div className="text-center space-y-5 mt-5 mb-5 ">
                <h1 className="text-4xl font-semibold"><span className="text-primary"> YOUR ATTENTION IS</span>  <br />CHANGED THE PART OF WORLD.</h1>
                <p className=" font-semibold "><small>We are Charity/ Non-profit/ Fundraising/ NGO organizations.Help a child Without Family.</small></p>
            </div>

            <form onSubmit={handelDonation} className="card-body">
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
                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value="Add Your Donation" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;