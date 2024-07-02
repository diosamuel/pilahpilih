import { useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import forest from '../assets/Forest-amico.jpg';
import bottle from '../assets/bottle.png';
import tong from '../assets/tong.png';
import bottle_char from '../assets/bottle-char.png';
import { IconRecycle, IconInfoSquareRounded } from '@tabler/icons-react';
import 'animate.css';

function App() {
  const [count, setCount] = useState(true);

  return (
    <>
      <img src={forest} className="w-full" />
      <div className="h-screen bg-gradient-to-b from-[#0AC23D] to-green-800">
        <img
          src={bottle_char}
          className="w-32 absolute right-[150px] top-[10em]"
        />
        <div className="p-5 text-white space-y-3">
          <div className="p-5 bg-orange-100 rounded-lg border-3 border-orange-400 flex items-end justify-between">
            <div>
              <p className="text-gray-800 font-medium text-xs">Nama Karakter</p>
              <h1 className="text-orange-600 text-lg font-semibold">
                Botol Cantika
              </h1>
            </div>
            <p className="text-gray-800">Level 3</p>
          </div>
          <h2 className="text-md font-semibold">
            Koleksi barang yang kamu dapat
          </h2>
          <div className="overflow-x-scroll">
            <div className="flex gap-3 w-[90em]">
              {[1, 2, 3, 4].map((x) => (
                <div className="w-fit flex flex-col justify-center border shadow items-center bg-white p-3 rounded hover:bg-green-100 hover:text-white my-4">
                  <img src={tong} className="w-24" />
                  <h1 className="text-black text-sm font-semibold">
                    Tutup Panci
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <button className="font-semibold px-3 py-4 bg-orange-400 rounded-lg w-full border-b-5 border-orange-600 active:border-b-3 active:translate-y-[0.5px]">
            Cari Koleksi
          </button>

          <div>
            <h3>Yuk Kita mengenal jenis jenis sampah</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
