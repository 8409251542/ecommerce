import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page,setPage]=useState(0);

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=12&skip=${page*12}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            }).catch((err) => {
                console.log("Something went wrong", err);

            });
    }, [page]);
    return (
        <>

            <Navbar />

            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
                >


                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <Link to={`/Product/${product.id}`}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-80 w-72 object-cover rounded-t-xl"
                            />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">
                                    {product.title}
                                </p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                                        ${product.price}
                                    </p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                                            ${product.price + product.discountPercentage}
                                        </p>
                                    </del>
                                    <div className="ml-auto">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-bag-plus"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <nav className="flex w-full justify-center" aria-label="Page navigation example">
                <ul className="list-style-none flex">
                    <li>
                        <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            onClick={() => page > 0 && setPage(page - 1)}
                        >Previous</a
                        >
                    </li>
                    <li>
                        <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            onClick={()=>setPage(page)}
                        >{page}</a
                        >
                    </li>
                    <li aria-current="page">
                        <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            onClick={()=>setPage(page+1)}
                        >{page+1}</a
                        >
                    </li>
                    <li>
                        <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            onClick={()=>setPage(page+2)}
                        >{page+2}</a
                        >
                    </li>
                    <li>
                        <a
                            className="relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                            onClick={()=>setPage(page+1)}
                        >Next</a
                        >
                    </li>
                </ul>
            </nav>


        </>
    )
}
export default ProductList;