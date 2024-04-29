import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 rounded-2xl mb-6">
        <h1 className="text-3xl">Login With</h1>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle> Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub> Github
        </button>
      </div>
      <div className="p-4 space-y- rounded-2xl mb-6">
        <h1 className="text-3xl">Find Us</h1>
        <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
       <FaFacebook className="mr-3"></FaFacebook>
       Facebook
        </a>
        <a className="p-4 flex text-lg items-center border " href="">
       <FaTwitter className="mr-3"></FaTwitter>
       Twitter
        </a>
        <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
       <FaInstagram className="mr-3"></FaInstagram>
       Instagram
        </a>
  
      </div>
      <div className="p-4 space-y-2 rounded-2xl mb-6">
        <h1 className="text-3xl">Q Zone</h1>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
