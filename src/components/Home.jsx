import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Home = () => {

    const [productos, setProductos] = useState(null)

    useEffect(() => {
        axios.get('./database/productos.json')
            .then(datos => {
                let datosModificados = datos.data.map((productoArray, indice) => productoArray =
                    <div className="card" key={indice} style={{ width: '18rem' }}>
                        <img src={process.env.PUBLIC_URL + '/img/' + productoArray.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{productoArray.nombre}</h5>
                            <p className="card-text">{productoArray.marca}</p>
                            <p className="card-text">$ {productoArray.precio}</p>
                            <p className="card-text">Stock:{productoArray.stock}</p>
                            <button 
                            className="btn btn-dark"
                            onClick={() => {
                                if (productoArray.stock > 0) {
                                    productoArray.stock--
                                    setProductos(productos)
                                }
                                
                            }}
                            ><AiOutlineShoppingCart /></button>

                        </div>
                    </div>
                )
                setProductos(datosModificados)
            })
    })

    return (
        <div className="row">
            {productos}
        </div>
    )
}

export default Home
