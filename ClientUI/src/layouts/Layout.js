import React from "react"
import { Outlet, Link } from "react-router-dom"
import Header from "../components/Header";
import Links from "../components/Links";

export default function Layout() {
  return (
    <>
    
    <main>
      <Header />
      <Outlet /> 
      <Links/>   
    </main>
    </>
  );
}
