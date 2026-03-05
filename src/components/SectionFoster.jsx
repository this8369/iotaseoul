import React, { useState } from 'react';

export default function SectionFoster() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="section w-full h-auto bg-black text-white py-[100px] md:py-[150px]" id="section-foster">
            <div className="w-full max-w-[1700px] mx-auto px-6 md:px-0 flex flex-col">

                {/* Titles */}
                <div className="flex flex-col mb-12 bs-fade-up">
                    <h2 className="text-[35px] md:text-[60px] lg:text-[75px] font-bold leading-[1.1] font-inter tracking-tight">
                        Build with
                    </h2>
                    <h2 className="text-[35px] md:text-[60px] lg:text-[75px] font-bold leading-[1.1] font-inter tracking-tight ml-4 md:ml-24">
                        Foster + Partners
                    </h2>
                </div>

                {/* Video Container */}
                <div className="w-full aspect-video relative bg-gray-900 group cursor-pointer overflow-hidden bs-fade-up delay-200" onClick={() => setIsPlaying(true)}>
                    {!isPlaying ? (
                        <>
                            {/* We use the max resolution thumbnail from YouTube */}
                            <img
                                src="https://img.youtube.com/vi/vuxdaHaYbtY/maxresdefault.jpg"
                                alt="Foster + Partners Video"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            {/* Overlay play button */}
                            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-14 h-14 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                                <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[14px] md:border-t-[14px] md:border-b-[14px] md:border-l-[22px] border-t-transparent border-b-transparent border-l-black ml-1 md:ml-2"></div>
                            </div>
                        </>
                    ) : (
                        <iframe
                            className="w-full h-full absolute top-0 left-0"
                            src="https://www.youtube.com/embed/vuxdaHaYbtY?autoplay=1"
                            title="Foster + Partners YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    )}
                </div>

                {/* Description Texts */}
                <div className="mt-8 md:mt-12 text-[13px] md:text-[15px] font-light text-gray-300 leading-[1.6] space-y-2 bs-fade-up delay-400 max-w-5xl">
                    <p>Designs have been revealed for IOTA Seoul I, a mixed-use development on a landmark site between Seoul Station and Namsan, a 270-metre-high peak in Jung-Gu.</p>
                    <p>Historically, the site acted as an important gateway to Seoul when arriving by train.</p>
                    <p>The project creates a green oasis in the heart of the city – and restores the area's historic connection with Namsan and its surrounding public park.</p>
                </div>

            </div>
        </section>
    );
}
