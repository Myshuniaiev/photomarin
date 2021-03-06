/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../../components/Header';

const Olga: NextPage = () => {
  return (
    <div className='works-page'>
      <Head>
        <title>Photomarin | Family | Olga</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        text={{
          subtitle: `This is the "Olga"`,
          description: 'Get in touch and contact me',
        }}
        background='/assets/images/Family/Olga/wrapper.jpg'
      />
      <div className='main'>
        <div className='main-content'>
          <div className='main-wrapper'>
            <h2>Olga</h2>
            <div className='main-wrapper-pictures'>
              <img
                src='/assets/images/Family/Olga/wrapper.jpg'
                alt=''
              />
              <img src='/assets/images/Family/Olga/cover.jpg' alt='' />
              <img
                src='/assets/images/Family/Olga/photo-1.jpg'
                alt=''
              />
              <img
                src='/assets/images/Family/Olga/photo-2.jpg'
                alt=''
              />
              <img
                src='/assets/images/Family/Olga/photo-3.jpg'
                alt=''
              />
              <img
                src='/assets/images/Family/Olga/photo-4.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Olga;
