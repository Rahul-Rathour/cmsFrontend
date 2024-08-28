import React, { useEffect, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Card from './card';
import Navbar from '../assets/navbar';

const Landingpage = () => {
    const cardRef = useRef(null); // Create a reference

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const scrollToCard = () => {
        if (cardRef.current) {
            cardRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex bg-blue-100 mt-16'>
                <div data-aos='fade-right' data-aos-duration='1000'>
                    <img src='/images/man.png' alt="Man" />
                </div>
                <div data-aos='fade-left' data-aos-duration='1000' className='w-1/2 m-auto'>
                    <h1 className='text-6xl text-center text-blue-900 font-bold'>
                        College Management<br />
                        <div className='text-center'>System</div>
                    </h1>
                    <p className='text-center text-2xl pt-3'>Where efficiency meets education</p>
                    <div className='text-center'>
                        <button onClick={scrollToCard} className='bg-blue-900 text-white p-3 m-5 border rounded-lg hover:bg-blue-800'>
                            GET STARTED
                        </button>
                    </div>
                </div>
            </div>
            <div ref={cardRef}> {/* Attach the reference to this div */}
                <Card />
            </div>
        </>
    );
}

export default Landingpage;
