import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Karakter from './components/Karakter';

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full md:w-5/12 shadow-lg">
          <Karakter />
        </div>
      </div>
    </>
  );
}
