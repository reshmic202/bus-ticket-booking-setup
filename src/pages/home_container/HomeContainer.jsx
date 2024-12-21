import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './hero/Hero'
import Search from '../search/Search'
import Category from './category/Category'
import Offer from './offer/Offer'
import Bus from '../bus/Bus'


const HomeContainer = () => {
  return (
    <>
       <div>
         {/* Hero section and other home related content*/}
         <Hero />
        <Search />
        <Category />
        <Offer />
        
       </div>
    </>
  )
}

export default HomeContainer
