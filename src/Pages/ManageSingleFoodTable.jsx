

const ManageSingleFoodTable = ({ HandelAccept, HandelReject, food }) => {
    const { _id, food_image, food_name, donator_image,
        donator_name, food_quantity, pickup_location, expired_date, additional_notes,
        donator_email, donation_money, request, request_date,status } = food || {}
    return (
        
            <tr >


                <td>
                    {food_name}
                </td>
                <td>{donator_email}</td>
                <td>{expired_date}</td>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Delivered</span> :
                        <button onClick={() => HandelAccept(_id)} className="btn btn-ghost text-blue-500 btn-xs">Pending</button>}
                {/* <td><button className="font-bold text-green-600" onClick={() => HandelAccept(_id)}>Accept</button></td> */}
                <td>{
                    status === 'Reject' ? <span className="font-bold text-red-500">Rejected</span> :
                        <button onClick={() => HandelReject(_id)} className="btn btn-ghost text-emerald-500-500 btn-xs">Reject</button>}
                         </td>
                {/* {
                    status === 'Reject' ? <span className="font-bold text-primary">Rejected</span> :
                        <button onClick={() => HandelReject(_id)} className="btn btn-ghost text-red-500 btn-xs">cancel</button>} */}

                <th>

                </th>
            </tr>
       
    );
};

export default ManageSingleFoodTable;