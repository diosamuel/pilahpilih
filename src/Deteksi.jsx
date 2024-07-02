import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import Camera from './components/Camera';

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full md:w-5/12 shadow-lg">
          <Camera />
        </div>
      </div>
    </>
  );
}
