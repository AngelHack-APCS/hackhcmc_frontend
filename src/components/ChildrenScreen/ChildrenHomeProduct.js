import React from 'react';
import logo from '../../assets/42181copy01.png';
import coin from '../../assets/coin.png';

const ChildrenHomeProduct = ({ name, points }) => {
  return (
    <div className="flex flex-col pt-2 mt-1 max-w-xs bg-white rounded-xl border border-solid border-neutral-300 overflow-hidden">
      <img
        loading="lazy"
        srcSet={logo}
      />
      <div className="flex gap-3 px-2 py-2 mt-1 bg-mainColor rounded-none">
        <div className="flex flex-col text-black">
          <div className="text-base font-bold">{name}</div>
          <div className="flex gap-1 mt-2 text-sm font-semibold whitespace-nowrap">
            <img
              loading="lazy"
              srcSet={coin}
              className="shrink-0 rounded-full w-4 h-4 mt-0.5"
            />
            <div>{points}</div>
          </div>
        </div>
        <div className="flex-auto self-end mt-4 text-sm font-medium text-white">
          46%
        </div>
      </div>
    </div>
  );
};

export default ChildrenHomeProduct;
