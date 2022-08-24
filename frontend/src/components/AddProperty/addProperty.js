import Header from "../headerpage/Header";
import SideNavBar from "../sidenavbar/SideNavBar";
// import List from "../list/list";
// import { Link } from "react-router-dom";

const AddProperty = () => {
    return (
        <>
            <div  className="maincontainer">
                <div  className="sidenav">
                    <SideNavBar />
                </div>

                <div  className="subpart">
                    <div className="headerpart">
                        <Header />
                    </div>
                </div>
                
                {/* <div className="propertylstpart"> <List /></div> */}
          

            </div>
        </>
    )
}

export default AddProperty;