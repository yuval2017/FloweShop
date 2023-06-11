import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Links from "../components/Links";
import './layoutstyles.css'
import SearchProvider from "../context/SearchProvider";

export default function Layout() {
  return (
    <SearchProvider>
      <div className="main-container d-flex">
        <Header />
        <main className="main-layout-container">
          <Outlet /> 
          <Links/>   
        </main>
      </div>
    </SearchProvider>
    
  );
}
