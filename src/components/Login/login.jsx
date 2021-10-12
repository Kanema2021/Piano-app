import React from "react";
import loginImg from "../../musical-notes-png"

export class login extends React.Component {
    consturctor(props) {
        super(props)
    }
    render() {
        return <div className="base-container">

            <div className="header">Login</div>
            <div className="content">
                <div classname="image">
                    <img src={loginImg} alt="musical notes" />
                </div>
                <div className="form">
                    <div class-Name="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div class-Name="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                    </button>

            </div>
        </div>

    }
}