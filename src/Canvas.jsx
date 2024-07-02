import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import html2canvas from 'html2canvas';

export default function Canvas(){
  const [visible, setVisible] = useState({ div1: true, div2: true, div3: true });
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const toggleVisibility = (divId) => {
    setVisible(prev => ({ ...prev, [divId]: !prev[divId] }));
  };

  const downloadCanvas = () => {
    html2canvas(canvasRef.current).then(canvas => {
      const link = document.createElement('a');
      link.download = 'canvas_image.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  useEffect(() => {
    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
      draggable.addEventListener('mousedown', onMouseDown);
      draggable.addEventListener('touchstart', onTouchStart);
    });

    function onMouseDown(e) {
      const draggable = e.target;
      let offsetX = e.clientX - draggable.offsetLeft;
      let offsetY = e.clientY - draggable.offsetTop;

      function onMouseMove(e) {
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function onTouchStart(e) {
      const draggable = e.target;
      const touch = e.touches[0];
      let offsetX = touch.clientX - draggable.offsetLeft;
      let offsetY = touch.clientY - draggable.offsetTop;

      function onTouchMove(e) {
        const touch = e.touches[0];
        draggable.style.left = `${touch.clientX - offsetX}px`;
        draggable.style.top = `${touch.clientY - offsetY}px`;
      }

      function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
      }

      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      draggables.forEach(draggable => {
        draggable.removeEventListener('mousedown', onMouseDown);
        draggable.removeEventListener('touchstart', onTouchStart);
      });
    };
  }, [visible]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-5">
        <button className="bg-blue-500 text-white px-4 py-2 m-1" onClick={() => toggleVisibility('div1')}>Toggle Div 1</button>
        <button className="bg-blue-500 text-white px-4 py-2 m-1" onClick={() => toggleVisibility('div2')}>Toggle Div 2</button>
        <button className="bg-blue-500 text-white px-4 py-2 m-1" onClick={() => toggleVisibility('div3')}>Toggle Div 3</button>
        <button className="bg-green-500 text-white px-4 py-2 m-1" onClick={downloadCanvas}>Download Canvas as Image</button>
      </div>
      <div ref={canvasRef} className="relative w-96 h-80 border border-black">
        {visible.div1 && <img id="div1" className="z-10 draggable absolute bg-blue-500 text-white w-24 h-24 flex items-center justify-center cursor-move" style={{ top: '10px', left: '10px' }} src="https://placehold.co/600x600"/>}
        {visible.div2 && <img id="div2" className="z-10 draggable absolute bg-blue-500 text-white w-24 h-24 flex items-center justify-center cursor-move" style={{ top: '10px', left: '150px' }} src="https://placehold.co/600x600"/>}
        {visible.div3 && <img id="div3" className="z-10 draggable absolute bg-blue-500 text-white w-24 h-24 flex items-center justify-center cursor-move" style={{ top: '10px', left: '290px' }} src="https://placehold.co/600x600"/>}
        <img ref={imgRef} className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src="https://via.placeholder.com/150" alt="Static" />
      </div>
    </div>
  );
};
