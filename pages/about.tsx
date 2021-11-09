import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <div className='about-page'>
      <Head>
        <title>Photomarin | About</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header
        text={{
          subtitle: 'Marina Myshuniaieva',
          description:
            'Creative creator / Family  photographer/ Couples photographer',
        }}
        background='/assets/images/Themes/Family/family-wrapper.jpg'
      />
      <div className='main'>
        <div className='main-content'>
          <div className='main-wrapper'>
            <h2>About me</h2>
            <div className='post'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ipsum consequatur culpa ad atque explicabo, sint optio nam
                perferendis aperiam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vero laborum tenetur sapiente, consequuntur,
                eveniet assumenda consectetur veniam alias dolorem quia eius,
                dicta ut sint laboriosam. Enim impedit ipsa voluptatibus! Quidem
                deleniti dicta labore exercitationem recusandae harum
                repudiandae esse officia, sequi beatae ipsa itaque? Totam
                asperiores nostrum accusantium id deserunt minima.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et,
                nihil. Mollitia maiores omnis deleniti voluptatem!
                Exercitationem cupiditate eligendi nesciunt alias facilis optio?
                Fuga a eaque qui quasi corrupti itaque iste eum, vitae sunt
                aliquam quae. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Nemo aut laudantium consectetur deleniti
                tempora laborum facilis animi obcaecati exercitationem ut
                architecto provident saepe ipsam fuga ab dolores nulla eligendi
                asperiores, error consequatur omnis veritatis? Dolor a
                repudiandae repellat. Iusto doloremque explicabo nostrum veniam
                quas, aperiam unde fugit porro eveniet quam possimus, ipsum
                dolores quos voluptas aspernatur sunt molestiae assumenda
                doloribus? Perspiciatis, quae ad nulla explicabo earum et sunt!
                Aperiam, nostrum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
