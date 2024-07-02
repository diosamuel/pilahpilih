import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Karakter from './components/Karakter';
import { IconScan } from '@tabler/icons-react';
import forest from './assets/forest.png';
export default function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full md:w-5/12 shadow-lg">
          <div className="m-5">
            <h1 className="text-2xl font-semibold">Selamat Datang 🙌🏻</h1>
            <p>Kebersihan dimulai dari yang kecil</p>
          </div>
          <img src={forest} className="w-full h-40 md:h-52 object-cover object-top" />

          <div className="bg-white border p-5 rounded-t-2xl shadow-lg">
            <div className="bg-orange-200 p-5 mb-5 rounded-lg">
              <h4 className="text-gray-700 font-medium text-sm">
                Karakter Kamu
              </h4>
              <h1 className="text-xl font-bold">Mimiko</h1>
            </div>
            <h1 className="font-semibold">Apa aja Jenis Jenis Sampah?</h1>
            <div className="flex gap-6 w-full mt-5">
              <div className="flex flex-col justify-center items-center text-center p-3 border bg-orange-100 border-orange-200 rounded-lg space-y-4 border-b-4">
                <img
                  src="https://placehold.co/600x600"
                  className="rounded-full w-20"
                />
                <p className="text-sm">Sampah Organik</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-3 border bg-white rounded-lg space-y-4">
                <img
                  src="https://placehold.co/600x600"
                  className="rounded-full w-20"
                />
                <p className="text-sm">Sampah Anorganik</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-3 border bg-white rounded-lg space-y-4">
                <img
                  src="https://placehold.co/600x600"
                  className="rounded-full w-20"
                />
                <p className="text-sm">Sampah Beracun</p>
              </div>
            </div>

            <div className="my-10 space-y-5">
              <h1 className="font-semibold">Belajar Mengelola Sampah</h1>
              <div className="w-full p-5 border rounded">
                <p>Bagaimana cara membuang sampah yang benar?</p>
              </div>
              <div className="w-full p-5 border rounded">
                <p>Bagaimana cara membuang sampah yang benar?</p>
              </div>
            </div>
          </div>

          <a className="fixed left-[50%] bottom-0 transform -translate-x-1/2 mb-5 rounded-full p-5 border border-b-4 border-green-600 bg-green-400 text-white active:translate-y-[0.5px] active:border-b-2" href="/deteksi">
            <IconScan />
          </a>
        </div>
      </div>
    </>
  );
}
