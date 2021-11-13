import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feat from '../../../components/Feat';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';

const Portrait: NextPage = () => {
  return (
    <div className='portrait-page'>
      <Head>
        <title>Photomarin | Themes | Portrait</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        text={{
          subtitle: 'This is my theme about portrait',
          description: 'Get in touch and contact me',
        }}
        background='/assets/images/Portrait/wrapper.jpg'
      />
      <div className='main'>
        <div className='main-content'>
          <div className='main-wrapper'>
            <h2>My works about Portrait</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              esse deserunt enim, rem id ut expedita saepe minima perspiciatis
              nihil!
            </p>
            <div className='feat'>
              <Feat
                img='/assets/images/Portrait/Bavaria/cover.jpg'
                title={`Bavaria`}
                url='/themes/portrait/bavaria'
              />
              <Feat
                img='/assets/images/Portrait/Flowers/cover.jpg'
                title={`Flowers`}
                url='/themes/portrait/flowers'
              />
              <Feat
                img='/assets/images/Portrait/Julia/cover.jpg'
                title={`Julia`}
                url='/themes/portrait/julia'
              />
            </div>
            <div className='feat'>
              <Feat
                img='/assets/images/Portrait/Retro/cover.jpg'
                title={`Retro`}
                url='/themes/portrait/retro'
              />
              <Feat
                img='/assets/images/Portrait/Sakura/cover.jpg'
                title={`Sakura`}
                url='/themes/portrait/sakura'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portrait;
