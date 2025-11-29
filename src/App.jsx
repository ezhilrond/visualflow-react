import React, { useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
    let heroData = [
        { text1: "Let’s go places and explore the open road.", text2: "Let's Go!!" },
        { text1: "Experience the thrill of driving like never before.", text2: "The Ultimate Driving Machine." },
        { text1: "Innovation meets style to redefine every single drive.", text2: "The Best or Nothing." }
    ]
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false)



    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Navbar/>
            <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />
        </div>

    )
}

export default App