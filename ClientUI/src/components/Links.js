import React from "react";
import whattsApp from '../assets/whatsapp-icon.svg'
import waze from '../assets/waze-icon.svg'
export default function Links(){
  return(
    <div className="contact-links">
      <a href="https://api.whatsapp.com/send?phone=+972524436774&text=New Order" target="_blank" rel="noreferrer">
      <img src={whattsApp} alt="WhattsApp-Link"/>
      </a>

      <a href="https://waze.com/ul?q=אס%20פרחי%20Avenue&ll=32.4384346,34.9242645&navigate=yes" target="_blank" rel="noreferrer">
      <img className="waze-icon" src={waze} alt="Waze-Link"/>
      </a>
    </div>
    
  );
}