
import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#Login">log in?</a>
                </p>
            </form>
        );
    }
}










// import React from "react";
// import loginImg from "../../musical-notes-png"

// export class login extends React.Component {
//     consturctor(props) {
//         super(props)
//     }
//     render() {
//         return <div className="base-container">

//             <div className="header">Register</div>
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
//                         <label htmlFor="email">Email</label>
//                         <input type="email" name="email" placeholder="email" />
//                     </div>
//                     <div class-Name="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" name="password" placeholder="password" />
//                     </div>
//                 </div>
//             </div>
//             <div className="footer">
//                 <button type="button" className="btn">
//                     Register
//                 </button>
//             </div>
//         </div>

//     }
// }