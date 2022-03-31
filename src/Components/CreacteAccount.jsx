import { Link } from 'react-router-dom';
const CreateAccount = () => {
    return ( <>
                <div className='ad-about'>
                    <h1>CREATE ACCOUNT</h1>
                <h2>HOME / SIGNIN</h2>
            </div>
            <div className="login">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <div>
                  <div>
              <input type="checkbox" />
              <span> I've read and accept the Privacy Policy</span>
                  </div>
               <p>By  signin up,ypu agree to our <span>Term of service.</span>
               Learn how we collect and use your data in our <span>Privacy Policy</span></p>
              </div>
              <button>SIGNUP</button>
              <button>
                  <Link to='/account' className='btn'>
                   ALREADY HAVE ACCOUNT?
                  </Link>
                 </button>
            </div>
    </> );
}
 
export default CreateAccount;