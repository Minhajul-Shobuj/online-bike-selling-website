import { Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import img from '../../image/register-img.svg'

const Register = () => {
    const { registerUser, isLoading, loginWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        reset();
        if (data.password !== data.password2) {
            const alert = document.getElementById("alert")
            alert.classList.remove("d-none")
            return
        };
        registerUser(data.email, data.password, data.name, history);
    };
    const handleGoogleSignIn = () => {
        loginWithGoogle(history, location)
    }

    return (
        <div>
            {isLoading ?
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                <div className="login">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="login_img">
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="form_container">
                                    <h2 className="text-center mb-4">Register</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input type="text" {...register("name")} placeholder="Name" />
                                        <input type="email" {...register("email")} placeholder="Email" />
                                        <input type="password" {...register("password")} placeholder="Password" />
                                        <input type="password" {...register("password2")} placeholder="Retype-Password" />
                                        <input className="btn btn-primary w-25" type="submit" value="Register" />
                                        <div id="alert" className='text-danger d-none'><h5>Password did't match</h5></div>
                                        <div><button onClick={handleGoogleSignIn} className="btn btn-success mt-2 rounded">Register with Google</button></div>
                                        <p className="text-center">Already Register ? <Link to="/login">Please Login</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Register;