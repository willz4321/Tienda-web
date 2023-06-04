import React from 'react'

export const RegisterPage = () => {
  return (
    <div className="container login-container">
        <div className="row">

            <div className="col-md-6 login-form-2">
                <h3>Registro</h3>
                <form>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña" 
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repita la contraseña" 
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Direccion" 
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input 
                            type="submit" 
                            className="btnSubmit" 
                            value="Crear cuenta" />
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}
