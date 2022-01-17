import React from 'react'
import './login.css';
export default function Userlogin() {
    return (
        <div>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Student <br />Login</h2>
                            <form method="POST" onSubmit={"/home"}>
                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="text"
                                        placeholder="College Name"
                                        name="College-name"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="text"
                                        placeholder="College ID"
                                        name="College-id"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        className="input--style-3 js-datepicker"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                    />
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit">
                                        Submit
                                    </button>
                                </div>
                                <div className="forgot-password">
                                    <a href="forgot">Forgot Password</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
