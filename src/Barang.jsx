import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import InfoBarang from './components/InfoBarang';

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full md:w-5/12 shadow-lg">
          <InfoBarang />
        </div>
      </div>
    </>
  );
}
