import { Link } from "react-router-dom";
import "../Signin/Signin.css";
import {CiLock, CiMail, CiUnread} from "react-icons/ci";

const Signin = () =>{
    return(
     <>
     <div className="signup-wrapper">

        <div className="form-container">
         <div className="form-box">
            <div className="form-inner">
                 <p>Katsina <span>Hub</span></p>
                 <h2>Sign in</h2>
                 <div className="input-box">
                 <label for="email">Email</label>
                 <input type="email" name="email" placeholder="Enter your email" required className="move"/>
                 <div className="mail-icon"><CiMail/></div>
                </div>
             <div className="input-box">
                 <label for="password">Password</label>
              <input type="password" name="password" placeholder="Enter your password" required />
                 <div className="mail-icon"><CiLock/></div>
                 </div> 
                 <button type="submit" className="submitBtn"><Link to="Dashboard">Submit</Link></button>
                 <div className="create"><Link to="Signup" >Register A New Account....</Link></div>
                 <div className="last-text">
                    Hey ! Apply Before It's Too Late.......
                 </div>
             </div>
            </div>


             <div className="form-text">
                <div className="circle"></div>
                <div className="text-center">
                    <h2>Katsina<span>Hub</span></h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At explicabo illo repellat exercitationem iste amet. Veritatis ratione non, voluptates aliquid, reprehenderit quasi consequatur reiciendis repellat porro fuga dolore voluptatem! Deleniti ut reprehenderit ea,Voluptatem, fugiat. Cupiditate!
                    </p>
                </div>
               
            </div>

        </div>
     </div>
     </>
    )
};

export default Signin;