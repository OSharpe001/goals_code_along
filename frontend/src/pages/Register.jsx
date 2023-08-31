import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const {name, email, password, password2} = formData;

    const onChange = ({ target }) => {
        switch (target.name) {
            case "name":
                setFormData({
                    ...formData,
                    name: target.value,
                });
                break;
            case "email":
                setFormData({
                    ...formData,
                    email: target.value,
                });
                break;
            case "password":
                setFormData({
                    ...formData,
                    password: target.value,
                });
                break;
            case "password2":
                setFormData({
                    ...formData,
                    password2: target.value,
                });
                break;
            default:
                break;
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return <>
        <section className="heading">
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Enter your name"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirm password"
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">
                        Submit
                    </button>
                </div>
            </form>
        </section>
        </>
};