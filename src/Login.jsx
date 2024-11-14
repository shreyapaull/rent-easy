import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login=()=> {
    return (
        <div className="col-lg-6 mb-5 mb-lg-0">
            <div
                className="card cascading-right"
                style={{
                    backdropFilter: "blur(30px)"
                }}
            >
                <div className="card-body p-5 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <form>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        id="form3Example1"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        id="form3Example2"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                id="form3Example3"
                                className="form-control"
                            />
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                id="form3Example4"
                                className="form-control"
                            />
                        </div>

                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                id="form2Example33"
                                defaultChecked
                            />
                            <label className="form-check-label" htmlFor="form2Example33">
                                Subscribe to our newsletter
                            </label>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            Sign up
                        </button>

                        {/* Register buttons */}
                        <div className="text-center">
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github" style={{ color: "white" }}></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


