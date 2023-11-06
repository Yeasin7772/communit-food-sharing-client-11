import { useLoaderData } from "react-router-dom";

const ManageFood = () => {
    const manageData = useLoaderData()
    console.log(manageData);
    return (
        <div>
            coming soon baby{manageData.length}
        </div>
    );
};

export default ManageFood;