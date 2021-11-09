/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
interface IProps {
  title: string;
  img: string;
  url: string;
}

const Feat = ({ title, img, url }: IProps) => {
  return (
    <a href={url} className='feat-item'>
      <style jsx>
        {`
          .feat-item {
            background: url(${img}) no-repeat;
          }
        `}
      </style>
      <span className='feat-content'>
        <h4>{title}</h4>
      </span>
    </a>
  );
};

export default Feat;
