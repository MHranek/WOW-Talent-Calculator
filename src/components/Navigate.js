import React from "react";


function Navigate({ currentPage, handlePageChange }) {
  return (
    <nav className="pt-5 border-bottom border-5 border-info fs-4">
      <button 
      href="#Home"
      onClick={() => handlePageChange('Home')}
      className="btn-">Home</button>
      <button 
      href="#Dragonflight"
      onClick={() => handlePageChange('Dragonflight')}
      className="btn-">Dragonflight</button>
    </nav>
  )
}

export default Navigate;