'use client';
import React from 'react'
import Image from 'next/image';
import kunal1 from "../../../public/Assets/images/Kunal1.jpg"
import Slider from "../Home/slider";


const teams = () => {
    return (
        <div>
            <section className="bg-[#002855] py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Card 1 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 1"
                                  
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 2 */}
                      <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 2"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 3"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 4"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 5"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 6 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 6"
                                  
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 7 */}
                        <div className="text-white">
                            <div className="overflow-hidde">
                                <Image
                                    src={kunal1}
                                    alt="Team member 7"
                            
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                        {/* Card 8 */}
                        <div className="text-white">
                            <div className="overflow-hidden">
                                <Image
                                    src={kunal1}
                                    alt="Team member 8"
                 
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold">Kunal Vora</h3>
                            <p className="italic text-sm opacity-80">Co–founder</p>
                            <p className="mt-3 text-sm opacity-80">We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.</p>
                        </div>

                    </div>
                </div>
            </section>
   <Slider/>
        </div>
     
    )
}

export default teams
