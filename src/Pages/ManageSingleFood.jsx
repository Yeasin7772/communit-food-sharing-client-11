import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import ManageSingleFoodTable from "./ManageSingleFoodTable";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
    const [foodRequest, setFoodRequest] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        // Fetch bid requests data from the backend API
        fetch(`https://communit-food-sharing-server.vercel.app/api/v1/user/request`)
            .then((response) => response.json())
            .then((data) => setFoodRequest(data));
    }, [user]);
    // console.log(foodRequest);

    const HandelAccept = (id) => {
        const data = { status: 'confirm' }
        axios.put(`https://communit-food-sharing-server.vercel.app/api/v1/user/request/${id}`, data)
            .then(res => console.log(res.data))
        if (data.status === 'confirm') {
            Swal.fire(
                'confirm!',
                'Your Food has been deleted.',
                'success'
            )
        }

    }
    const HandelReject = (id) => {
        const data = { status: 'Reject' }
        axios.put(`https://communit-food-sharing-server.vercel.app/api/v1/user/request/${id}`, data)
            .then(res => console.log(res.data))
        if (data.status === 'Reject') {
            Swal.fire(
                'Rejected!',
                'Your Food has been deleted.',
                'success'
            )
        }
    }
    return (

        <div className="overflow-x-auto w-full">
            <table className="table container mx-auto my-12">
                {/* head */}
                <thead className='text-xl font-semibold text-primary'>
                    <tr>

                        <th>Food Name</th>
                        <th> Requester Email</th>

                        <th>Request Time and Date</th>

                        <th>Accept</th>
                        <th>Reject</th>

                    </tr>
                </thead>
                <tbody >
                    {
                        foodRequest?.map(food => <ManageSingleFoodTable key={food._id} food={food}
                            HandelAccept={HandelAccept} HandelReject={HandelReject}

                        ></ManageSingleFoodTable>)
                    }
                </tbody>

            </table>
        </div>

    );
};

export default ManageSingleFood;