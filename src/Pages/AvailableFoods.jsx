import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = () => {

    const [availableFoods, setAvailableFoods] = useState()

    useEffect(() => {
        axios('http://localhost:5000/api/v1/foods')
            .then(res => {
                setAvailableFoods(res.data)
                console.log(res.data);
            })
    }, [])


    return (
        <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    availableFoods?.map(food => <div key={food._id}>

                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className="h-64 w-full" src={food.food_image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> Food Name : {food.food_name}</h2>
                                <h2 className="card-title"> Food Quantity : {food.food_quantity}</h2>
                                <p> <span className="text-xl">Location:</span> {food.pickup_location}</p>
                                <p> expired_date: {food.expired_date}</p>
                                <div className="flex gap-5 justify-center items-center">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={food.donator_image} />
                                        </div>
                                    </div>

                                    <p className="card-title">{food.donator_name}</p>

                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/foodDetails/${food._id}`}>
                                        <button className="btn btn-outline btn-primary">View Detail</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;