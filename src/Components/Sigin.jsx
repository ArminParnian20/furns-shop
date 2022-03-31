import { Link } from 'react-router-dom';
const Sigin = () => {
    return ( <>
                <div className='ad-about'>
                    <h1>Login</h1>
                <h2>HOME / SIGNIN</h2>
            </div>
            <div className="login">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>SIGIN</button>
              <button>
                  <Link to='/createAccount' className='btn'>
                   CREATE ACCOUNT
                  </Link>
                 </button>
              <button>FORGET PASSWORD</button>
            </div>
    </> );
}
 
export default Sigin;