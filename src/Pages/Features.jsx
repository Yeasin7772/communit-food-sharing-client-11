//  import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Features = () => {
    const [foods, setFoods] = useState()

    useEffect(() => {
        fetch('https://communit-food-sharing-server.vercel.app/api/v1/foods')
            .then(res => res.json())
            .then(data => {

                const filterItems = data.filter(item => item.food_quantity > 6);
                setFoods(filterItems);
            })

    }, [])
    //  console.log(foods);





    return (
        <div>
            <div className="mt-12">
                <div className="text-center space-y-5 mt-5 mb-5 ">
                    <h1 className="text-4xl font-semibold">FEATURED  <span className="text-primary">FOODS</span></h1>
                    <p className="text-xl font-semibold ">We Build a Fundraising For Help Less People</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {
                        foods?.map(food => <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" key={food._id}>
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


                <div className="mt-5">
                    <div className="flex justify-center items-center">
                        <Link to='/availableFoods'>
                            <button className="btn btn-outline">
                                <span className="loading loading-spinner"></span>
                                see all</button>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Features;