import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((data)=>setSingleProduct(data))
            .catch((err)=>console.log("somthing went wrong",err)
            )
    },[]);
    if (!singleProduct) {
        return <>
         <div className="w-full h-[100vh] flex justify-center items-center">
         <div className="rounded-md h-12 w-12 border-4 border-t-4 border-slate-800 animate-spin absolute"></div>
         </div>
        </>;
    }
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={singleProduct.thumbnail} alt={singleProduct.title} />
                            </div>
                            
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{singleProduct.title}</h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                    <span className="text-gray-600 dark:text-gray-300">${singleProduct.price}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                                    <span className="text-gray-600 dark:text-gray-300">{singleProduct.stock}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {singleProduct.description}
                                </p>
                            </div>
                            <div className="flex -mx-2 mt-10 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ProductDetails;