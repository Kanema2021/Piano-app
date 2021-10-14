
import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#Signup">password?</a>
                </p>
            </form>
        );
    }
}








// import React from "react";
// import loginImg from "../../musical-notes-png"

// export class Login extends React.Component {
//     consturctor(props) {
//         super(props)
//     }
//     render() {
//         return <div className="base-container">

//             <div className="header">Login</div>
//             <div className="content">
//                 <div classname="image">
//                     <img src={loginImg} alt="musical notes" />
//                 </div>
//                 <div className="form">
//                     <div class-Name="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input type="text" name="username" placeholder="username" />
//                     </div>
//                     <div class-Name="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" name="password" placeholder="password" />
//                     </div>
//                 </div>
//             </div>
//             <div className="footer">
//                 <button type="button" className="btn">
//                     Login
//                     </button>

//             </div>
//         </div>

//     }
// }