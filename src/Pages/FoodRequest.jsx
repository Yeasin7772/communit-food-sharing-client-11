import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import FoodRequestTable from '../components/ui/FoodRequestTable';

const FoodRequest = () => {
    const { user } = useAuth()
    const [foodRequest, setFoodRequest] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/user/request')
            .then(res => res.json())
            .then(data => {
                const filterItems = data.filter(item => item.donator_email === user?.email);
                setFoodRequest(filterItems);
            });
    }, [user?.email, setFoodRequest]);
    console.log(foodRequest);
    return (
        <div>
            
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Donator Name</th>
                            <th>Expired Date</th>
                            <th>request_date</th>
                            <th>Your Donation Amount</th>
                            <th>Pickup Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foodRequest?.map(item => <FoodRequestTable
                                key={item._id}
                                item={item}
                               
                            ></FoodRequestTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default FoodRequest;
