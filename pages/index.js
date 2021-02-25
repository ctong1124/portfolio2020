import Head from 'next/head';
import { useState, useEffect, useRef } from "react";


const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  function toggleVideo(x) {
    if (x === 'play') {
      videoRef.current.play();
    }
    else {
      videoRef.current.pause();
    }
  }

  const { x, y } = useMousePosition();

  const degree = ((x + y)/8) % 360;
  const color1 = '#eaee44';
  const color2 = '#33d0ff';

  return (
    <div className="container">
      <Head>
        <title>Portfolio of Carisa Tong</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <video autoPlay muted loop ref={videoRef} className="backgroundVideo">
        <source src="/vid-small.mp4" type="video/mp4" media="all and (max-width: 600px)" /> 
        <source src="/vid.mp4" type="video/mp4" />
      </video>
      <div className="overlay" style={{"backgroundImage": `linear-gradient(${degree}deg, ${color1}, ${color2})`}}/>

      <div className="contentContainer">
        <div className="content">
          <h1 className="title">
            CARISA <br/> TONG
          </h1>
          <h2 className="description">
            is a Designer turned Developer.
          </h2>
          <h2 className="description">
            Let&#39;s connect on <a href="https://www.linkedin.com/in/carisatong" target="blank">LinkedIn</a> or <a href="https://github.com/ctong1124" target="blank">Github.</a>
          </h2>
        </div>
      </div>
      <div className="top">
        <h3>Video by <a href="http://www.mariobaltodano.com" target="blank">Mario Baltodano</a></h3>
        <div
          className="button"
          onClick={() => {toggleVideo(isPlaying ? 'pause' : 'play'); setIsPlaying(!isPlaying);}}
        >
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </div>
      </div>
    </div>
  )
}
