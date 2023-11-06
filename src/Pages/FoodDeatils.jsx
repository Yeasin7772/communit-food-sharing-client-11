import { Link, useLoaderData } from "react-router-dom";

const FoodDeatils = () => {
    const foodDetails = useLoaderData()
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
                    <h2 className="card-title">Quantity:  {food_quantity}</h2>
                    <p>Location :{pickup_location}</p>
                    <p>Note{additional_notes}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/addRequest/${_id}`}>
                            <button className="btn btn-outline btn-primary">Add Request</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDeatils;
