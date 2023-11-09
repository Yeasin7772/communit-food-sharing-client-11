import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AvailableFoods = () => {



    useEffect(() => {
        document.title = 'Charity Organizations Available-Foods';
    }, []);


    const [availableFoods, setAvailableFoods] = useState([]);

    const [sortItemOrder, setSortItemOrder] = useState("asc");

    const [search, setSearch] = useState("");

    //const [showSortOptions, setShowSortOptions] = useState(false);

    const handleSortChange = (e) => {
        setSortItemOrder(e.target.value);
    };

    // const toggleSortOptions = () => {
    //     setShowSortOptions(!showSortOptions);
    // };

    useEffect(() => {
        axios
            .get(`https://communit-food-sharing-server.vercel.app/api/v1/foods?sortField=expired_date&sortOrder=${sortItemOrder}`)
            .then(res => {
                setAvailableFoods(res.data);
            })


            .catch((error) => {
                console.error(error);
            });
    }, [sortItemOrder]);




    const filteredFoods = availableFoods.filter(food =>

        food.food_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-10">
            <div className="flex bg-base-200  flex-col sm:flex-row items-center justify-between gap-5 mb-10 border-2 p-5 sm:p-8 md:p-10 lg:p-12 xl:p-16">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Search here</span>
                    </label>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search Food…"
                            className="input input-bordered"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="btn btn-square">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="form-control mt-4 sm:mt-0">
                    <label className="label">
                        <span className="label-text">Check Expire date</span>
                    </label>
                    <select
                        value={sortItemOrder}
                        onChange={handleSortChange}
                        className="rounded-lg input input-bordered"
                    >
                        <option value="asc">Expiry Date: Soon to Later</option>
                        <option value="desc">Expiry Date: Later to Soon</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredFoods.length === 0 ? (
                    <p className="text-center text-2xl">No data available.</p>
                ) : (
                    filteredFoods.map((food) => (
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" key={food._id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure>
                                    <img className="h-64 w-full" src={food.food_image} alt="Food" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Food Name: {food.food_name}</h2>
                                    <h2 className="card-title">Food Quantity: {food.food_quantity}</h2>
                                    <p>
                                        <span className="text-xl">Location:</span> {food.pickup_location}
                                    </p>
                                    <p>Expired Date: {food.expired_date}</p>
                                    <div className="flex gap-5 justify-center items-center">
                                        <div className="avatar">
                                            <div className="w-14 rounded-full">
                                                <img src={food.donator_image} alt="Donator" />
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
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AvailableFoods;
