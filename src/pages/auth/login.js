import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return (<div class="hold-transition login-page">
        <div className="login-box">
            <div className="login-logo">
                <Link to={"#"}><b>inicio de session</b></Link> 
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">bienvenido, porfavor ponga sus datos aqui </p>
                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" 
                            placeholder="correo electronico"
                            id="email"
                            name="email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" 
                            placeholder="contraseña"
                            id="password"
                            name="password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>

                        

                    <div className="social-auth-links text-center mb-3">
                        <button type="submit" to={"#"} className="btn btn-block btn-primary">
                        inicia session
                        </button>
                        <Link to={"/crearcuenta"} className="btn btn-block btn-danger">
                            crear cuenta
                        </Link>
                    </div>

                    </form>
                </div>
                
            </div>
            
        </div>

    </div>);
}
export default Login;
