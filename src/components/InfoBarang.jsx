import { useState } from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
import forest from '../assets/forest.png';
import bottle from '../assets/bottle.png';
import { IconRecycle, IconInfoSquareRounded } from '@tabler/icons-react';
function InfoBarang({ className,jenis }) {
  const [count, setCount] = useState(0);

  let barang = [{
    class:"PLASTIC"
  }]
  return (
    <div
      className={`flex flex-col justify-center items-center gap-5 rounded-t-2xl bg-white p-5 border ${className}`}
    >
      <hr className="w-10 rounded-full" />
      <img src={bottle} className="w-32" />
      <h1 className="text-lg -mb-4">Kamu Menemukan</h1>
      <h1 className="text-xl font-bold">Botol Plastik!</h1>
      <p>Botol plastik adalah wadah yang sangat umum digunakan untuk mengemas minuman seperti air minum, minuman ringan, jus, dan lainnya. Proses pembuatan botol plastik melibatkan penggunaan berbagai jenis bahan plastik, masing-masing dengan karakteristik, keamanan, dan dampak lingkungan yang berbeda. Artikel ini akan menjelaskan berbagai jenis bahan yang digunakan dalam pembuatan botol plastik untuk minuman, membahas keamanan penggunaannya, serta dampak lingkungan yang terkait.</p>

      <div className="text-center w-full space-y-5 z-10">
        <h3 className="text-lg font-semibold">Informasi</h3>
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col justify-center items-center p-5">
            <IconRecycle className="text-orange-400" />
            <h3>Dapat Didaur Ulang</h3>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <IconRecycle />
            <h3>Aman dalam jangka waktu tertentu</h3>
          </div>
        </div>
        <h1 className="p-3 flex items-center justify-center gap-3 bg-purple-200 rounded border-t-4 rounded border-t-purple-500 text-sm">
          <IconInfoSquareRounded />
          Sampahnya jangan lupa dibuang ya!
        </h1>
      </div>

      <div className="w-full z-10">
        <h3 className="text-left">
          Lihat Karya-karya dari <strong>Botol Plastik</strong>
        </h3>
      </div>

      {/*<div className="fixed -bottom-72 transform w-[40em]">
          <img src={forest}/>
        </div>*/}
    </div>
  );
}

export default InfoBarang;
