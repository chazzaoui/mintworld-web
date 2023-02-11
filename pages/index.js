import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import PokemonCard from '@/components/card';
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [index, setIndex] = useState(false);

  const handleClose = useCallback(() => {
    setIndex(false);
  }, []);
  const [nfts, setNfts] = useState([
    'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31',
    'https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200',
    'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960'
  ]);
  const [selectedId, setSelectedId] = useState(null);

  const variants = {
    visible: {
      scale: 1.1,
      boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
      y: -50,
      x: -100,
      cursor: 'pointer',
      transition: { duration: 1, type: 'spring' }
    },
    hidden: { scale: 1, opacity: 0 }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={styles.main}
        onClick={selectedId ? () => setSelectedId('') : null}
      >
        {nfts.length > 0
          ? nfts.map(item => (
              <AnimateSharedLayout type='crossfade'>
                <AnimatePresence exitBeforeEnter>
                  {item !== selectedId ? (
                    <PokemonCard
                      key={`${item}`}
                      cardId={item}
                      shouldHover={!selectedId ? true : false}
                      url={item}
                    />
                  ) : null}
                </AnimatePresence>
              </AnimateSharedLayout>
            ))
          : null}
        <AnimatePresence>
          {selectedId ? (
            <>
              <motion.div
                className='card '
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  bottom: '50%',
                  right: '50%'
                }}
                onClick={() => {
                  setSelectedId('');
                }}
                variants={variants}
                animate={selectedId ? 'visible' : 'hidden'}
                exit={{ scale: 1, opacity: 0 }}
              >
                <PokemonCard shouldHover={true} url={selectedId} />
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>
      </main>
    </>
  );
}