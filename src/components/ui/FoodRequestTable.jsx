

const FoodRequestTable = ({ item, handelCancel,handelStatusChange }) => {
    console.log(item);

    // console.log(Object.keys(item).join(','));
    const { _id, food_image, food_name, donator_image,
        donator_name, food_quantity, pickup_location, expired_date, additional_notes,
        donator_email, donation_money, request, request_date,status } = item || {}



    return (
      

          

            <tr>
                <th>
                    <button onClick={() => handelCancel(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {food_image && <img src={food_image} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                </td>
                <td>
                    {donator_name}
                </td>
                <td>{expired_date}</td>
                <td>{request_date}</td>
                <td>${donation_money}</td>
                <td>{pickup_location}</td>

                <th>
                {
                    status === 'approve' ? <span className="font-bold text-primary">approved</span> :
                        <button onClick={() => handelStatusChange(_id)} className="btn btn-ghost text-red-500 btn-xs">Pending</button>}
            </th>
            </tr>
       
    );
};

export default FoodRequestTable;