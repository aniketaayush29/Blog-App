"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ThemeProvider = ({children}) => {

    const {theme} = useContext(ThemeContext);
    const [mounted,setMounted] = useState(false);

    useEffect(() =>{
       setMounted(true);
    }, []);
    if(mounted) {
  return (
    <div className = {theme}>{children}</div>
  )}
}

export default ThemeProvider
