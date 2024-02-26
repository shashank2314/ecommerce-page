import { useState } from "react";
import { GiFairyWings } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// Import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules"
import { products } from "../data.js"
export default function Hero() {
    const [product, setProduct] = useState(products[0]);
    const [viewImage, setViewImage] = useState(product?.image?.[0]);
    const [color,setColor] = useState(product?.color?.[0].substring(3,))

    return (
        <div className="flex flex-col w-[98vw] pl-20 gap-6 pt-10">
            {/* navbar */}
            <div className="flex items-start font-bold text-lg">Home/<span>{product.category}</span></div>
            {/* main */}
            <div className="flex w-full">
                {/* images data */}
                <div className="w-[70%] flex flex-col gap-10">
                    {/* view images */}
                    <div className="w-full flex gap-10">
                        {/* side images */}
                        <div className="flex flex-col gap-10">
                            {
                                product.image.map((one_image, index) => {
                                    return (
                                        <div key={index} className={`w-[70px] h-[60px] object-fill cursor-pointer`}>
                                            <img src={one_image} alt="one image" width="70px" height="60px" onClick={() => setViewImage(one_image)} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {/* one image */}
                        <div className="w-[500px] h-[500px] shadow-[0px_0px_40px_-10px_black] aspect-square">

                            <img src={viewImage} alt="image of product" width="100%" className="aspect-square" />
                        </div>
                    </div>
                    {/* reccomendation */}
                    <div className="w-full relative">
                        <div className="flex justify-start items-start font-bold text-lg px-10">Recomended for you</div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },

                                1000: {
                                    slidesPerView: 2
                                }
                            }}
                            freeMode={true}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                            autoplay={{
                                delay: 2500,
                            }}
                            modules={[FreeMode, Autoplay, Navigation]}
                            className="w-10/12 flex justify-center items-center ml-10"
                        >
                            {products.map((product) => {
                                return (
                                    <SwiperSlide key={product.id} className="pt-7 pb-20 px-10">
                                        <div className="w-[230px] shadow-[0px_0px_40px_-10px_black] flex flex-col justify-center items-center object-fill p-3 gap-2">
                                            <img src={product?.image?.[0]} alt="other product" width="200px" className="aspect-square" />
                                            <button className="w-full  border-black border-[1px]" onClick={() => { setProduct(product); setViewImage(product?.image?.[0]) }}>Shop now</button>
                                        </div>

                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <button className="arrow-left absolute left-6 top-[40%] text-3xl cursor-pointer">&lt;</button>
                        <button className="arrow-right absolute right-10 top-[40%] text-3xl cursor-pointer">&gt;</button>
                    </div>
                </div>

                {/* description */}
                <div className="text-left w-[70%] flex flex-col gap-3">
                    <div className="font-semibold text-lg">New</div>
                    <div>
                        <div className="font-bold text-2xl">{product?.title}</div>
                        <div className="text-sm text-gray-700">{product?.id}</div>
                    </div>
                    <div className="font-bold text-xl">${product?.price}</div>
                    <div className="font-semibold text-red-500 ">{product?.discount}</div>
                    <div className="font-md text-gray-600">Color:<span className="text-black"> {color}</span> </div>
                    <div className="flex flex-wrap gap-2">{product?.color?.map((one_color, index) => (<div key={index} className={`${one_color} w-10 h-10 border-[2px] rounded-full ${color === one_color.substring(3,) && "border-black"}`} onClick={()=>setColor(one_color.substring(3,))}></div>))}</div>
                    <div className="flex flex-col gap-2 mb-3">
                        <div className="flex justify-between items-center pr-10">
                            <div><span className="text-gray-600 ">Size:</span> Select a size</div>
                            <div className="text-gray-600">Size Chart</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {
                                product?.Sizes?.map((size, index) => (<div key={index} className="w-[80px] py-2 border-[1px] border-black flex justify-center items-center">{size}</div>))
                            }
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label for="quantity" className="text-gray-600 ">Qunatity: </label>
                        <select name="quantity" id="quantity" className="border-[1px] border-black rounded-md">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="flex flex-col items-center pr-10 gap-2">
                        <button className=" rounded-sm w-full py-2 px-4 bg-black text-white">Add to Cart</button>
                        <button className=" rounded-sm w-full py-2 px-4 bg-gray-400 text-gray-900">Buy Now</button>
                    </div>
                    <div className="pl-5 items-center flex text-[12px] font-bold gap-2"><FaEye  className="text-xl"/>49 people looked at this item in this last hour.</div>
                    <div className="flex flex-col pl-3">
                        <div className="text-xl font-bold ">Product Details</div>
                        <div>{product?.description?.substring(0,90)}...</div>
                    </div>
                    <div className="font-bold text-xl">
                        Our Fabrics, Re-imagined
                    </div>
                    <div className="font bold text-xl flex items-center gap-2">
                        <GiFairyWings />Fair Trade Certified <sup>TM</sup>
                    </div>
                    <div className="text-gray-600 pl-5">This item was crafted in a fair Trade Certified<sup>TM</sup> facility.</div>
                    <div className="flex justify-between p-2">
                        <button className="underline underline-offset-1">Learn More</button>
                        <button className="underline underline-offset-1">Show All Reimagined</button>
                    </div>
                </div>
            </div>

        </div>
    );

}