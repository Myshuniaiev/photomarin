import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feat from '../../components/Feat';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const Themes: NextPage = () => {
  return (
    <div className='themes-page'>
      <Head>
        <title>Photomarin | Themes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        text={{
          subtitle: 'This is my themes',
          description: 'Get in touch and contact me',
        }}
        background='/assets/images/Themes/Family/family-wrapper.jpg'
      />
      <div className='main'>
        <div className='main-content'>
          <div className='main-wrapper'>
            <h2>Themes</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              esse deserunt enim, rem id ut expedita saepe minima perspiciatis
              nihil!
            </p>
            <div className='main-wrapper'>
              <h3>Popular</h3>
              <div className='feat'>
                <Feat
                  img='/assets/images/Themes/Family/family-cover.jpg'
                  title='Family'
                  url='/themes/family'
                />
              </div>
            </div>
            <div className='main-wrapper'>
              <h3>Recent work</h3>
              <div className='feat'>
                <Feat
                  img='/assets/images/Themes/Family/family-cover.jpg'
                  title={`Rita's family`}
                  url='/works/rita-family'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
