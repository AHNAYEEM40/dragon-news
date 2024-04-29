import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex bg-gray-50 shadow rounded-xl text-black">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={150}>
        <Link to='/'>
          I can be a React component, multiple React components......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
