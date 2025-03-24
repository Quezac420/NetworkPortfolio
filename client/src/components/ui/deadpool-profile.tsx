import React from "react";

export function DeadpoolProfile() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      style={{ width: "100%", height: "100%" }}
    >
      {/* Background circle */}
      <circle cx="400" cy="400" r="400" fill="#FFF" />
      
      {/* Deadpool mask - Red base */}
      <path 
        d="M400 100C230 100 150 270 150 400s80 300 250 300 250-170 250-300S570 100 400 100z" 
        fill="#E11B22" 
      />
      
      {/* Black eye patches */}
      <path 
        d="M250 300c-10 30-10 60 0 90 20 60 70 80 100 80s80-20 100-80c10-30 10-60 0-90-20-60-70-80-100-80s-80 20-100 80zm300 0c-10 30-10 60 0 90 20 60 70 80 100 80s80-20 100-80c10-30 10-60 0-90-20-60-70-80-100-80s-80 20-100 80z" 
        fill="#000" 
      />
      
      {/* White eye areas */}
      <path 
        d="M280 340c-5 20-5 40 0 60 10 35 40 50 70 50s60-15 70-50c5-20 5-40 0-60-10-35-40-50-70-50s-60 15-70 50zm180 0c-5 20-5 40 0 60 10 35 40 50 70 50s60-15 70-50c5-20 5-40 0-60-10-35-40-50-70-50s-60 15-70 50z" 
        fill="#FFF" 
      />
      
      {/* Red face details */}
      <path 
        d="M400 500c-20 0-40 5-40 30 0 15 10 25 40 25s40-10 40-25c0-25-20-30-40-30z" 
        fill="#E11B22" 
      />
      
      {/* Black stitching lines */}
      <path 
        d="M400 100c-30 0-50 5-80 15m80 585c-30 0-50-5-80-15m-90-485c-20 10-30 20-50 40m50 400c-20-10-30-20-50-40m380-360c20 10 30 20 50 40m-50 400c20-10 30-20 50-40m-320-300c0 30 40 30 40 0m200 0c0 30 40 30 40 0" 
        fill="none" 
        stroke="#000" 
        strokeWidth="5" 
        strokeLinecap="round" 
      />
      
      {/* Black mask details */}
      <path 
        d="M250 300c30-80 80-100 150-100s120 20 150 100M250 500c30 80 80 100 150 100s120-20 150-100" 
        fill="none" 
        stroke="#000" 
        strokeWidth="8" 
        strokeLinecap="round" 
      />
    </svg>
  );
}