import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const ChartHeader = ({ category, title }: {category: string, title: string}) => (
  <div className=" mb-10">
    <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">{category}</p>
    </div>
    <p className="text-center text-xl mb-2 mt-3">{title}</p>
  </div>
);

export default ChartHeader;