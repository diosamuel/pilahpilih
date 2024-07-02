import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { IconArrowLeft } from '@tabler/icons-react';

export default function Navbar({name,className}) {
  return (
    <div className={`fixed top-0 flex gap-5 p-3 justify-between ${className}`}>
      <button className="flex gap-3 rounded-full p-3 border bg-white">
        <IconArrowLeft/>
      </button>
      <button className="font-bold">
        {name}
      </button>
    </div>
  );
}
