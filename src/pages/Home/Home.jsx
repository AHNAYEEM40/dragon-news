import BreakingNews from "../../Shared/BreakingNews";
import Header from "../../Shared/Header";
import Navber from "../../Shared/Navber/Navber";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import LeftSide from "../../Shared/leftSide/LeftSide";

const Home = () => {
    return (
        <div>
       
           
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <h1 className="text-3xl  font-poppins">This is home section</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-2xl">News Coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;