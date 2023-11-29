import "../Signup/Signup.css";
import { Link } from "react-router-dom";
import { CiMail, CiLock} from "react-icons/ci";

const Signup = () =>{
    return(
     <>  
     <div className="signup-wrapper">

<div className="form-container">
 <div className="form-box">
    <div className="r-inner">
         <p>Katsina <span>Hub</span></p>
         <h2>Register Your Account</h2>
        <div className="input-box">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <div className="mail-icon"><CiMail/></div>
        </div>
         
        <div className="input-box">
              <label for="password">Password</label>
              <input type="password" name="password" placeholder="Enter your password" required className="input-2"/>
              <div className="mail-icon"><CiLock/></div>
         </div> 
         <label for="password" className="cpassword">Confirm Password</label>
         <div className="input-box1">
          <input type="password" name="password" placeholder="Confirm your password" required className="input-l" />
         <div className="mail-icon"><CiLock/></div>
         </div> 
          <div className="terms"><input type="checkbox" checked className="checkbox"/>
          <h1>I agree to <span>terms and service</span> and <span>privacy policy</span></h1></div>
         <button type="submit" className="submitBtn">Submit</button>
         <div className="created"><Link to="Signin" >Already registered?</Link></div>
         
         <div className="l-text">
            Please ! Do Your Registration Before It's Late.......
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

export default Signup;