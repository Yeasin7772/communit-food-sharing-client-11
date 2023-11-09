import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import FoodRequestTable from '../components/ui/FoodRequestTable';
import Swal from 'sweetalert2';

const FoodRequest = () => {
    const { user } = useAuth()
    const [foodRequest, setFoodRequest] = useState()

    useEffect(() => {
        document.title = 'Charity Organizations Food-Request'; 
    }, []);

    useEffect(() => {
        fetch('https://communit-food-sharing-server.vercel.app/api/v1/user/request',)
            .then(res => res.json())
            
            .then(data => {
                const filterItems = data.filter(item => item.donator_email === user?.email);
                setFoodRequest(filterItems);
            });
    }, [user?.email, setFoodRequest]);

    const handelCancel = (id) => {
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Cancel this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://communit-food-sharing-server.vercel.app/api/v1/user/request/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Cancel!',
                                    'Your Request has been cancel.',
                                    'success'
                                )
                                const remaining = foodRequest.filter(food => food._id !== id)
                                setFoodRequest(remaining)
                            }
                        })
                }
            })


    }

    const handelStatusChange =(id)=> {
        fetch(`https://communit-food-sharing-server.vercel.app/api/v1/user/request/${id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'approve'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'success!',
                    text: 'approved successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                const remaining = foodRequest.filter(food => food._id !== id)
                const updateItems = foodRequest.find(food => food._id === id)
                updateItems.status = 'approve'
                const newFoodRequest = [updateItems, ...remaining]
                setFoodRequest(newFoodRequest)
                
                
            }
        })
    }

    //  console.log(foodRequest);
    return (
        <div>


            <div className="hero min-h-full lg:h-[50vh] rounded mt-10 mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/BTL0J8L/20827730-Father-pointing-to-clock-to-schoolboy-with-backpack.jpg)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-primary">
                <h1 className="mb-5 text-4xl  font-bold ">Your Food Request List</h1>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='text-xl font-semibold text-primary'>
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
                                handelCancel={handelCancel}
                                handelStatusChange={handelStatusChange}

                            ></FoodRequestTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default FoodRequest;







