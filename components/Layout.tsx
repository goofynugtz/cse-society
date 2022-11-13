import Header from './Header';
import React from 'react';
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(theme === 'dark' ? true : false)
  }, [theme])

  return (
    <>
      <Header  {...{mounted, setMounted, theme, setTheme, resolvedTheme}} />
      <Navbar />
      <main className='main'>{children}</main>
      <Footer />
    </>
  )
}