import React, { useState, useEffect, useRef } from 'react';
import detectImage from '../api/fetch.js';
import InfoBarang from './InfoBarang';
import 'animate.css';
const CameraApp = ({ className }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [shouldFaceUser, setShouldFaceUser] = useState(false);
  const [stream, setStream] = useState(null);
  const [result, setResult] = useState({});
  const [myLatestTap, setMyLatestTap] = useState(0);
  const [ableToCapture, setAbleToCapture] = useState(false);

  const constraints = {
    audio: false,
    video: {
      width: {
        min: 400,
        ideal: 400,
        max: 400,
      },
      height: {
        min: 400,
        ideal: 400,
        max: 400,
      },
      facingMode: shouldFaceUser ? 'user' : 'environment',
    },
  };

  const capture = async () => {
    try {
      const mediaStream =
        await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    capture();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [shouldFaceUser]);

  // check if blank
  useEffect(() => {
    let canvas = canvasRef.current;
    let isBlank = !canvas
      .getContext('2d')
      .getImageData(0, 0, canvas.width, canvas.height)
      .data.some((channel) => channel !== 0);
  }, [canvasRef]);

  const handleFlip = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setShouldFaceUser(!shouldFaceUser);
  };

  const handleCapture = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').drawImage(video, 0, 0);
    }
    setAbleToCapture(true);
  };

  const detectCapture = async () => {
    const canvas = canvasRef.current;
    let canvasB64 = canvas.toDataURL('image/png');
    let { status, data } = await detectImage(canvasB64);
    if (status == 200) {
      setResult(data);
    }
  };

  const resetCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (canvas && video) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }

    setAbleToCapture(false);
  };

  const handleDoubleTap = () => {
    const now = new Date().getTime();
    const timeSince = now - myLatestTap;
    if (timeSince < 600 && timeSince > 0) {
      handleFlip();
    }
    setMyLatestTap(now);
  };

  return (
    <>
      {result.image ? (
        <InfoBarang className="animate__animated animate__slideInUp"/>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="md:w-full md:h-full">
              <video
                ref={videoRef}
                className={`md:absolute md:top-0 md:h-full mt-40 md:m-0 ${!ableToCapture ? 'block' : 'hidden'}`}
              ></video>
              <canvas
                ref={canvasRef}
                className={`md:absolute md:top-0 md:h-full mt-40 md:m-0 ${ableToCapture ? 'block' : 'hidden'}`}
              ></canvas>
            </div>
            <div className="flex gap-3 absolute bottom-0 my-5">
              {!ableToCapture ? (
                <button
                  className="font-semibold px-3 py-4 bg-orange-400 rounded-lg w-full border-b-5 border-orange-600 active:border-b-3 active:translate-y-[0.5px]"
                  onClick={handleCapture}
                >
                  Foto
                </button>
              ) : (
                <>
                  <button
                    className="font-semibold px-3 py-4 bg-orange-400 rounded-lg w-full border-b-5 border-orange-600 active:border-b-3 active:translate-y-[0.5px]"
                    onClick={resetCapture}
                  >
                    Reset Foto
                  </button>
                  <button
                    className="font-semibold px-3 py-4 bg-orange-400 rounded-lg w-full border-b-5 border-orange-600 active:border-b-3 active:translate-y-[0.5px]"
                    onClick={detectCapture}
                  >
                    Deteksi
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CameraApp;
