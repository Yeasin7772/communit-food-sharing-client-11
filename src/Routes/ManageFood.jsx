/* eslint-disable react/jsx-key */
import { useMemo, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useTable } from 'react-table';
import { Link } from "react-router-dom";

const ManageFood = () => {
    const { user } = useAuth();
    const [manageRequest, setManageRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/foods')
            .then(res => res.json())
            .then(data => {
                const filterItems = data.filter(item => item.donator_email === user?.email);
                setManageRequest(filterItems);
            });
    }, [user?.email]);

    // const handelUpdate = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const food_name = form.food_name.value;
    //     const food_image = form.food_image.value;
    //     const food_quantity = form.food_quantity.value;
    //     const expired_date = form.expired_date.value;
    //     const donator_name = form.donator_name.value
    //     const donator_image = form.donator_image.value
    //     const pickup_location = form.pickup_location.value
    //     const donator_email = form.donator_email.value
    //     const additional_notes = form.pickup_location.value
    //     const donation_money = form.donation_money.value
    //     const updateFood = {
    //         food_image, food_name,
    //         donator_image, donator_name,
    //         food_quantity, pickup_location,
    //         expired_date, additional_notes,
    //         donator_email, donation_money,
    //     }
    //     console.log(updateFood);
    //     form.reset()
    //     fetch(`http://localhost:5000/api/v1/foods/${_id}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updateFood)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     title: 'success!',
    //                     text: 'Update successfully',
    //                     icon: 'success',
    //                     confirmButtonText: 'Cool'
    //                 })
    //             }
    //         });

    // }



    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/api/v1/foods/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Food has been deleted.',
                            'success'
                        )
                    }
                });
            }
        });
    }

    const data = useMemo(() => manageRequest, [manageRequest]);

    const columns = useMemo(() => [
        {
            Header: 'Serial',
            accessor: "_id"
        },
        {
            Header: 'Donator Name',
            accessor: "donator_name"
        },
        {
            Header: 'Food Name',
            accessor: "food_name"
        },
        {
            Header: 'Donator Email',
            accessor: "donator_email"
        },
        {
            Header: 'Expired Date',
            accessor: "expired_date"
        },
        {
            Header: 'Food Quantity',
            accessor: "food_quantity"
        },
        {
            Header: 'Food Quantity',
            accessor: "pickup_location"
        },
        {
            Header: 'food_image',
            accessor: "food_image",
            Cell: ({ row }) => (
                <img src={row.values.food_image} alt="donator_image" className="w-12 h-12" />
            ),
        },
        {
            Header: 'Actions',
            accessor: "actions",
            Cell: ({ row }) => (
                <div className="grid grid-cols-1 gap-2">
                    <Link to={`/update/${row.values._id}`}>
                    <button  className="bg-blue-500 text-white px-2 py-1 rounded">Update</button>
                    </Link>
                    {/* <button onClick={() => document.getElementById('my_modal_1').showModal()} className="bg-blue-500 text-white px-2 py-1 rounded">Update</button> */}
                    <button onClick={() => handleDelete(row.values._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                   <Link to={`/foodDetails/${row.values._id}`}>
                   <button  className="bg-red-500 text-white px-2 py-1 rounded">Manage</button>
                   </Link>
                
                </div>
            ),
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="container mx-auto p-5">
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="table-auto border-collapse w-full">
                    <thead>

                        {headerGroups.map(headerGroup => (

                            <tr  {...headerGroup.getHeaderGroupProps()} >
                                {headerGroup.headers.map(column => (

                                    <th key={column._id} {...column.getHeaderProps()} className="p-2 border font-semibold">
                                        {column.render("Header")} 
                                        
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>



                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="p-2 border">
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}


                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageFood;
