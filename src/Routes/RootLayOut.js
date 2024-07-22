import MainHeader from "../Components/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout=()=>{
return(
    <>
    <MainHeader/>
    <Outlet/>
    </>
)
}
export default RootLayout;