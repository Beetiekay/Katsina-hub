import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";

const Dashboard = () =>{
  const [name, setName] = useState("")
  const [username, setusername] = useState("")
  const [phonenumber, setphonenumber] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
    return(
     <>
     <div className="navbar">
             <input type="checkbox" id="check"></input>

    <span className="menu">
              <div className="logo"><Link to="" >Katsina<span>Hub</span></Link></div> 
              <Link to="">Dashboard</Link>
              <Link to="">Customers</Link>
              <Link to="">Invoice</Link>
              <Link To="">Payment</Link>
              <Link To="">Settings</Link>
              <label For="check" className="close-menu"><AiOutlineMenu/></label>
      </span>
           <label For="check" className="open-menu"><AiOutlineMenu/></label>
         
         <div className="hearder-container">
            <section className="header">
             <div className="form1">
               <input type="fullname" name="fullname" placeholder="Full name" required onChange={(e)=>setName(e.target.value)}/>
               <input type="username" name="username" placeholder="Write your username" required onChange={(e)=>setusername(e.target.value)}/>
               <input type="phonenumber" name="phonenumber" placeholder="Your phobe number"required onChange={(e)=>setphonenumber(e.target.value)}/>
               <input type="email" name="email" placeholder="Write your email" required onChange={(e)=>setemail(e.target.value)}/>
               <input type="password" name="password" placeholder="**********" required onChange={(e)=>setpassword(e.target.value)}/>
               <button className="btn">Update</button>
             </div>

            <div className="form2">

                <section className="profile-item">    
                <label>Full name</label>
                <p>{name?name:"Not set"}</p>
                <hr/>
                </section>

                <section className="profile-item">
                <label>Username</label>
                <p>{username?username:"Not set"}</p>
                <hr/>
                </section>
                 
                <section className="profile-item">
                <label>Phone number</label>
                <p>{phonenumber?phonenumber:"Not set"}</p>
                <hr/>
                </section>
             
               <section className="profile-item">
                <label>Email</label>
                <p>{email?email:"@bastukur1997gmail.com"}</p>
                <hr/>
               </section>

                <section className="profile-item">
                <label>Password</label>
                <p>{password?password:"********"}</p>
                <hr/>
               </section>
               </div>
           </section>
         </div>
          
     </div>
     </>
    )
};

export default Dashboard;