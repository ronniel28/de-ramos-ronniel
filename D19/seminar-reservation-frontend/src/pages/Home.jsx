import { Link } from "react-router-dom";
// console.log(localStorage.getItem("token"), localStorage.getItem("role"))
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            Discover and book seminars effortlessly. Start exploring now!
          </p>
          <Link to="/seminars" className="btn btn-primary">
            Browse Seminars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
