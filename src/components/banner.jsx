import React, {useState, useEffect} from 'react';
import '../styles/banner.css';
import astro from '../assets/pixlr-bg-result.png';

function Banner() {

    return (
        <section className='banner'>
            <div className='welcome-text'>
                    <span>Bienvenido a mi Portfolio!</span>
                    <h3>Soy Ivo, desarrollador Full Stack</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, possimus fuga unde aut veritatis esse praesentium dolorem voluptatum facilis eum.</p>
            </div>
            <div>
                <img src={astro} alt="astronauta" />
            </div>
        </section>
    );
}

export default Banner;