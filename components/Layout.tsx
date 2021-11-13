import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';

interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='page-container'>
      <Head>
        <link
          rel='preload'
          href='/fonts/TTNorms-Black.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-BlackItalic.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-Bold.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-BoldItalic.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-ExtraBold.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-ExtraBoldItalic.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-Light.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-ExtraLight.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-ExtraLightItalic.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-Heavy.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-HeavyItalic.ttf'
          as='font'
          crossOrigin=''
        />
        <link
          rel='preload'
          href='/fonts/TTNorms-Italic.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Navbar bg='light' variant='light' expand='lg' sticky='top'>
        <Container>
          <Navbar.Brand href='/home'>Photomarin</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/home'>
                <a className='nav-link active'>Home</a>
              </Link>
              <Link href='/about'>
                <a className='nav-link active'>About</a>
              </Link>
              <Link href='/themes'>
                <a className='nav-link active'>Themes</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='content'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
