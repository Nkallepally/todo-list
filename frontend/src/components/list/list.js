//import { useState } from "react"
import "./list.css"

const PropertyList = ( {propertydetails} )=>{
    // const[add,Setadd]=useState([])
    // const handleadd=(e)=>{
    //     Setadd(e.target.value)


    // }

    return(
        <>
            <div className='propertycontainer'>
                <div className="add">
                    <button  >Add</button>
                </div>
          
              <table>
                  <thead>     
                    <tr className='tablehead' >
                                      
                                       
                        <th className="thtext">Activity</th>                                     
                        <th className="thtext">Status</th>                 
                        <th className="thtext thdayleft">TimeTaken(Hrs:Min:Sec)</th> 
                        <th className="thtext">Action</th>                  
                        
                    </tr>
                  </thead>
                      {propertydetails.map((propertydata) => (
                  <tbody>
                      <tr className='tabledata'>
                          {/* <td className="tdtext">{propertydata._id.substr(propertydata._id.length - 7)}</td> */}
                          
                          <td className="tdtext">{propertydata.Activity}</td>
                          <td className="tdtext tdstatus" >{propertydata.Status}</td>
                          <td className="tdtext tddays">{propertydata.TimeTaken}</td>
                          <td className="tdtext">

                            <div className="action">
                            
                            </div> 

                            </td>
                        </tr>
                  </tbody>
              ))}      
                           
                
              </table>
          </div>
       
        </>
    )
}
export default PropertyList




