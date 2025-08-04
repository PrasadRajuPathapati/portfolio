import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [showBeam, setShowBeam] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let t1 = setTimeout(() => typeLine('> Initializing portfolio...', setLine1), 500);
    let t2 = setTimeout(() => typeLine('> Welcome to my portfolio_', setLine2), 3000);
    let t3 = setTimeout(() => setShowBeam(true), 5000);
    let t4 = setTimeout(() => setHide(true), 6500);


    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  function typeLine(text, setter) {
    let i = 0;
    const interval = setInterval(() => {
      setter((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
  }

  return (
    <div className={`fixed inset-0 bg-black text-green-400 font-mono text-lg flex flex-col items-start justify-center px-10 transition-opacity duration-700 ${hide ? 'opacity-0' : ''}`}>
      <MatrixBackground />
      <div className="z-20">
        <p className="mb-2">{line1}</p>
        <p>{line2}</p>
      </div>
      {showBeam && (
        <div className="absolute top-1/2 left-0 w-full h-1 bg-green-500 animate-beam z-30"></div>
      )}
    </div>
  );
};

const MatrixBackground = () => {
  const matrixChars = '01';
  const lines = Array.from({ length: 60 }, () =>
    Array.from({ length: 80 }, () => matrixChars[Math.floor(Math.random() * matrixChars.length)])
  );

  return (
    <div className="absolute inset-0 z-10 opacity-10 text-green-500 font-mono text-[10px] leading-[10px] pointer-events-none">
      {lines.map((line, i) => (
        <div key={i}>{line.join('')}</div>
      ))}
    </div>
  );
};

export default SplashScreen;
