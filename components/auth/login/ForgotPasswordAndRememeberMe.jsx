import React from 'react'

export default function ForgotPasswordAndRememeberMe() {
    return (
        <div className="field-outer">
            <div className="input-group checkboxes square">
                <input type="checkbox" name="remember-me" id="remember" />
                <label htmlFor="remember" className="remember">
                    <span className="custom-checkbox"></span> Remember me
                </label>
            </div>
            <a href="#" className="pwd">
                Forgot password?
            </a>
        </div>
    )
}
