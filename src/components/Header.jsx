
const Header = () => {
    return (
        <div className="hero min-h-full lg:h-[80vh]" style={{ backgroundImage: 'url(http://unlockdesizn.com/html/non-profit/be-ahand/demo/images/about/1.jpg)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" px-12">
                    <h1 className="mb-5 text-3xl font-bold">JOIN WITH US, <br /> YOUR ATTENTION IS CHANGED THE PART OF WORLD.</h1>
                    <p className="mb-5"><small>Cupiditate qui molestias fugit voluptatibus laudantium maxime <br />voluptate corrupti ab repudiandae dolor repellendus? laudantium maxime voluptate corrupti ab repudiandae dolor repellendus?</small></p>
                    <div className="flex justify-center gap-6 text-white">
                        <button className="btn btn-outline btn-primary">Donation Now</button>

                        <button className="btn btn-outline btn-warning">Join With us</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;