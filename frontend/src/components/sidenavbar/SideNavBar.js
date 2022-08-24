import Logout from "../Logout/Logout"
import "./SideNavBar.css"
 


const SideNavBar = () => {

  
    return (
        <>
            <div className='sidebarconatiner'>

                <div className="logooption">
                    <h1>To Do List</h1>
                </div>

                <div className='sidesubcontainer' >
                    <div className="sideoption property">
                        <div className='navvalue'>History</div>
                    </div>

                   

                    
                        
                    <div className="sidelogout">
                        
                        <Logout/>
                   
                </div>

                    
                </div>

            </div>

        </>
    )
}
export default SideNavBar