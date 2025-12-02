import React from 'react'
import Image from 'next/image';
import Contactbanner from "../../../public/Assets/images/contactBanner.webp"

const Contact = () => {
    return (
        <>
            <section className="relative h-[70vh] w-full">
                {/* Background Image */}
                <Image
                    src={Contactbanner}
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </section>

            <section className="w-full bg-black text-white contact-us-form-container">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 ">

                    {/* LEFT — FORM */}
                    <div className="p-10 lg:p-20 flex cust-left-padding">
                        <div className="w-full max-w-xl">

                            <h2 className="text-4xl font-semibold">
                                We’d love to<br />hear from you!
                            </h2>

                            <form className="mt-10 space-y-1">

                                <div>
                                    <label className="text-sm">Name</label>
                                    <input
                                        type="text"
                                        className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">Email</label>
                                    <input
                                        type="email"
                                        className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">Phone</label>
                                    <input
                                        type="text"
                                        className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white resize-none"
                                    ></textarea>
                                </div>

                                <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide mt-4">
                                    SEND MESSAGE
                                </button>
                            </form>

                        </div>
                    </div>

                    {/* RIGHT — MAP */}
                    <div className="h-[350px] lg:h-auto">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.234511535598!2d72.8569272!3d19.1160496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62291442fb9%3A0x821a17fcf7de925f!2sABND%20-%20Branding%20Agency!5e0!3m2!1sen!2sin!4v1691127616974!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ minHeight: "40rem" }}
                        ></iframe>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Contact
