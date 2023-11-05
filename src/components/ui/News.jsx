
const News = () => {
    return (
        <div className="flex justify-center items-center bg-primary h-96 rounded ">
            <div className="">
                <div className="text-center space-y-4 mb-10 ">
                <h1 className="text-4xl font-bold text-white">Don’t miss out on the Latest News</h1>
                <p className="text-2xl font-medium">We won’t spam you and we respect your privacy.</p>
                </div>
                <div className="flex justify-center  ">
                <input type="text" placeholder="Enter Your Email" className="input input-bordered input-accent w-full max-w-xs" />
                    <button className="btn btn-outline ">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default News;