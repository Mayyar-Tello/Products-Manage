import { RxPlus } from "react-icons/rx"
import "./Products.css"
import axios from "axios"
import { useState , useEffect } from 'react'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa"

const Products = () => {
    const [products , setProducts] = useState([])
    useEffect(() => {
        axios.get('https://vica.website/api/items' , {
            headers : {
                "Accept" : "application/json",
                "Authorization" : localStorage.getItem("token")
            },
        })
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className="products">
            <div className="head">
                <h1>Manage Products</h1>
                <button className="addBtn">
                    <RxPlus /> Add Product
                </button>
            </div>
            <table className="productsTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product , index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <img src={product.image_url} alt={product.name} />
                            </td>
                            <td>
                                <button className="editBtn">
                                    <FaEdit className="editIcon" />
                                </button>
                                <button className="deleteBtn">
                                    <FaRegTrashAlt className="deleteIcon" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products