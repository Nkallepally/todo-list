import "./SearchRes.css"
import List from "../list/list";
import { BsSearch ,BsPlus} from "react-icons/bs";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import AddProperty from "../AddProperty/addProperty";


const SearchRes = ({property})=>{
  // const navigate = useNavigate()
  const [addinput, setAddInput] = useState();
  const isEnabled = (addinput !== undefined)

  const handleInputChange = (e) => {
    setAddInput(e.target.value )
       //console.log(e.target.value)
  }

  const [submitted,setSubmitted]=useState(false)
  const issubmitted= isEnabled && submitted
  
  const handleDown=()=>{
    setSubmitted(false)
  }
 // console.log(updatedproperty)

  const [updatedproperty, setProperty] = useState([...property]);
 // console.log({property})
  
  const handleSearch = () => {
        // likecount=likecount+1
        // setLikeCount(likecount)
        // fetch(`http://localhost:3010/list/search/${addinput}`, {
          fetch(`https://realestate-b.herokuapp.com/list/search/${addinput}`, {
          method: "GET",
          headers: {
            "content-type": "application/json"
          },
        }).then(res =>
          res.json()).then(result =>{
            // console.log(result[0])
            setSubmitted(true)
            setProperty(result)
          }).catch(err => console.log(err))
            
  }
 
    return(
        <>
          <div className='seracharea'>
                    
            <div class="searchbtn">
              <input type="text" placeholder="Search ppd id" className="isearch" name='id' id='id' onKeyDown={handleDown} onChange={(e) => { handleInputChange(e) }}/>
              <button type="submit" className="isearchbtn" disabled={!isEnabled} onClick={() => handleSearch()} ><BsSearch className="btncolor"/></button>
            </div>
            <Link to='/addproperty'>
              <button type='sumbit' className='addbtn'  onClick={AddProperty}>                  
                <BsPlus /> Add Property
              </button></Link>
          </div>
                    
          <div className="propertylstpart"> <List propertydetails= {issubmitted ?  updatedproperty : property} /></div>
                    {/* <div className="propertylstpart"> <PropertyList propertydetails= {updatedproperty} /></div> */}
                    
        </>
    )
}
export default SearchRes