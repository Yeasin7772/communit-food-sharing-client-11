

const Volunteer = () => {
    return (
        <div>
            <div className="mt-12">
                <div className="text-center space-y-5 mt-5 mb-5 ">
                    <h1 className="text-4xl font-semibold">OUR  <span className="text-primary">VOLUNTEERS</span></h1>
                    <p className="text-xl font-semibold ">Your Attention Is Changed The Part Of World.Give a helping hand to those who need it!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* 01 */}
                    <div className="card ">
                        <figure><img src="http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/team/1.jpg" alt="Shoes" className="rounded-xl" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                John Smith
                                <div className="badge badge-secondary">- Volunteer</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, esse consectetur adipisicing elit.</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline btn-primary">read more</button>
                            </div>
                        </div>
                    </div>
                    {/* 02 */}

                    <div className="card ">
                        <figure><img src="http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/team/2.jpg" alt="Shoes" className="rounded-xl" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Ana Smith
                                <div className="badge badge-secondary">- Volunteer</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, esse consectetur adipisicing elit.</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline btn-primary">read more</button>
                            </div>
                        </div>
                    </div>
                    {/* 03 */}

                    <div className="card ">
                        <figure><img src="http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/team/3.jpg" alt="Shoes" className="rounded-xl" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Jhon Smith
                                <div className="badge badge-secondary">- Volunteer</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, esse consectetur adipisicing elit.</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline btn-primary">read more</button>
                            </div>
                        </div>
                    </div>
                    {/* 04 */}

                    <div className="card ">
                        <figure><img src="http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/team/6.jpg" alt="Shoes" className="rounded-xl" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                John Smith
                                <div className="badge badge-secondary">- Volunteer</div>
                            </h2>
                            <p>Lorem ipsum dolor sit amet, esse consectetur adipisicing elit.</p>
                            <div className="card-actions ">
                                <button className="btn btn-outline btn-primary">read more</button>
                            </div>
                        </div>
                    </div>
                

                </div>

            </div>
        </div>
    );
};

export default Volunteer;