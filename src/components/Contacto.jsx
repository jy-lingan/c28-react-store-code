import React from 'react'

const Contacto = () => {
    return (
        <div className="container">
            <form>
                <h1>Formulario Contacto</h1>
                <div className="form-group">
                    <label for="nombre">Nombre Completo</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre Completo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onClick={console.log("Formulario envíado")}>Envíar</button>
            </form>

        </div>
    )
}

export default Contacto
