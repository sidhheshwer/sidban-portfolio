import React from 'react';
import '../stylesheets/loader.css';
import { MdAdminPanelSettings } from 'react-icons/md';

export default function Loader() {
  return (
    <>
    <div className='loader-container'>
      <h1 ><span className='white-text2 shimmer2'>Sid</span><span className='red-text2 shimmer2'>ban</span> <MdAdminPanelSettings className='sidban-icon2 shimmer2'/></h1>
      <div className='load-content'>
        <div className="load-degree shimmer"></div>
        <div className="load-title shimmer"></div>
         <div className="load-title shimmer"></div>
        <div className="load-description shimmer"></div>
        <div className="load-description shimmer"></div>
        <div className="load-description shimmer"></div>
      </div>
    </div>
    </>
  );
}
