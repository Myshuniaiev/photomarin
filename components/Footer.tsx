import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='contact-us'>
        <h3>Contact us</h3>
        <form className='form'>
          <input type='text' placeholder='Name' className='field' />
          <input type='phone' placeholder='Phone' className='field' />
          <input type='email' placeholder='Email' className='field' />
          <textarea name='' id='' placeholder='Message'></textarea>
          <button className='button-default contacts'>
            <Link href='/works'>More works</Link>
          </button>
        </form>
      </div>
      <div className='social'></div>
      <div className='phone-number'>
        <a type='tel' href='tel:+38(068)-729-15-97'>
          +38(068)-729-15-97
        </a>
      </div>
      <div className='creation'>Copyright © 2021 Myshuniaiev Oleksii</div>
    </div>
  );
};

export default Footer;
