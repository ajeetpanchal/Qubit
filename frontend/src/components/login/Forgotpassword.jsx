import React from 'react'
import './login.css';
export default function Forgotpassword() {
    return (
        <div>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Change Password</h2>
                            <form method="POST">
                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="password"
                                        placeholder="Current Password"
                                        name="nurrent-password"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        className="input--style-3"
                                        type="password"
                                        placeholder="New Password"
                                        name="new-password"
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        className="input--style-3 js-datepicker"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirm-password"
                                    />
                                </div>
                                <div className="p-t-10">
                                    <button className="btn btn--pill btn--green" type="submit">
                                        Submit
                                    </button>
                                </div>
                                <div className="forgot-password">
                                   
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
