import React, { useState, useRef } from 'react';

export default function SectionSkyline() {
    const [hoveredPin, setHoveredPin] = useState(null);
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Option 2: Interactive HTML Pins (Positions are estimated for typical skyline)
    const pins = [
        { id: 'seoul-station', title: 'Seoul Station', left: '16.5%', top: '30%', desc: 'The starting point of the new metropolitan network.' },
        { id: 'iota-two', title: 'IOTA Two', left: '60.5%', top: '28%', desc: 'Korea\'s Next-Generation Business Hub.' },
        { id: 'iota-one', title: 'IOTA One', left: '78.5%', top: '15%', desc: 'The new iconic center of gravity for Seoul.' }
    ];

    // Mouse drag handlers for Desktop (Option 3 extension)
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="section content-section w-full h-auto bg-white text-black py-[100px] md:py-[150px]" id="section-skyline">

            {/* Text Description Box */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-0 flex flex-col mb-12 bs-fade-up">
                <h2 className="text-[35px] md:text-[50px] lg:text-[60px] font-extrabold leading-[1.05] tracking-[-0.02em] font-inter mb-6">
                    <span className="kr-target-text transition-all duration-300"
                        data-en="2032 Projected Skyline"
                        data-kr="2032년, 새로운 스카이라인">
                        2032년, 새로운 스카이라인
                    </span>
                </h2>
                <div className="text-[15px] md:text-[17px] font-medium text-gray-700 leading-[1.7] tracking-[-0.02em] space-y-4 max-w-5xl">
                    <p className="kr-target-text transition-all duration-300 break-keep"
                        data-kr="2032년, 서울역을 중심으로 형성되는 새로운 도심 스카이라인은 'IOTA ONE'과 'IOTA TWO'를 핵심 축으로 새로운 비즈니스 클러스터로 완성됩니다.<br/>IOTA 서울은 서울역을 기점으로 CBD, YBD, GBD를 연결하는 3대 업무 축의 중심에 위치하며, 서울 도심의 새로운 스카이라인과 경제 흐름을 선도하는 핵심 앵커 자산으로 자리 잡을 것입니다."
                        data-en="By 2032, the Seoul Station district will redefine the city's skyline — anchored by IOTA One and IOTA Two, forming the core of a next-generation business cluster.<br/>Situated at the intersection of Seoul's three major business axes — CBD, YBD, and GBD — IOTA Seoul stands at the heart of the capital's new economic network.">
                        2032년, 서울역을 중심으로 형성되는 새로운 도심 스카이라인은 'IOTA ONE'과 'IOTA TWO'를 핵심 축으로 새로운 비즈니스 클러스터로 완성됩니다.<br />
                        IOTA 서울은 서울역을 기점으로 CBD, YBD, GBD를 연결하는 3대 업무 축의 중심에 위치하며, 서울 도심의 새로운 스카이라인과 경제 흐름을 선도하는 핵심 앵커 자산으로 자리 잡을 것입니다.
                    </p>
                </div>
            </div>

            {/* 3 Options Combined: Full Bleed (w-full) + Horizon Scroll / Drag (overflow-x-auto) + Interactive Pins */}
            <div
                ref={scrollRef}
                className={`w-full relative overflow-x-auto overflow-y-hidden scrollbar-hide bs-fade-up delay-200 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {/* 
                    Notice the min-w-[1500px]: 
                    This guarantees the image never shrinks too small on mobile. 
                    User can swipe left/right to view the whole skyline!
                */}
                <div className="relative w-max lg:w-full min-w-[1500px] mx-auto select-none">
                    <img
                        src="./img/2032_seoulstation.jpg"
                        alt="2032 Seoul Station Skyline Projected View"
                        className="w-full h-auto object-contain pointer-events-none display-block"
                        draggable="false"
                    />

                    {/* Option 2: Interactive Pins Overlays */}
                    {pins.map((pin) => (
                        <div
                            key={pin.id}
                            className="absolute z-10 flex flex-col items-center justify-end transform -translate-x-1/2 -translate-y-full hover:z-20 group"
                            style={{ left: pin.left, top: pin.top }}
                            onMouseEnter={() => setHoveredPin(pin.id)}
                            onMouseLeave={() => setHoveredPin(null)}
                            onTouchStart={() => setHoveredPin(hoveredPin === pin.id ? null : pin.id)}
                        >
                            {/* Tooltip Content */}
                            <div className={`absolute bottom-full mb-3 px-5 py-3 bg-black/90 backdrop-blur-sm text-white rounded-md shadow-2xl transition-all duration-300 ease-out origin-bottom transform ${hoveredPin === pin.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-3 pointer-events-none'}`}>
                                <div className="font-bold text-[14px] md:text-[16px] whitespace-nowrap mb-1 text-[#5FD0A8]">{pin.title}</div>
                                <div className="text-[12px] md:text-[13px] text-gray-300 whitespace-nowrap font-light">{pin.desc}</div>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/90 rotate-45"></div>
                            </div>

                            {/* Render actual pulsing pin */}
                            <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 cursor-pointer">
                                <div className={`absolute w-full h-full bg-white opacity-40 rounded-full ${hoveredPin === pin.id ? 'animate-none' : 'animate-ping'}`}></div>
                                <div className={`relative w-3 h-3 md:w-4 md:h-4 bg-white border-2 border-black rounded-full shadow-md transition-transform duration-300 ${hoveredPin === pin.id ? 'scale-150 bg-[#5FD0A8] border-white' : ''}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile/Tablet Tip for Option 3 */}
            <div className="w-full text-center mt-6 text-[13px] text-gray-500 lg:hidden px-6 animate-pulse select-none font-inter tracking-tight">
                ← Swipe to explore the skyline →
            </div>

        </section>
    );
}
