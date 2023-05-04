import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <header className='flex justify-between items-center mb-5'>
      <h1>{title}</h1>
      <button
        onClick={handleClick}
        className='bg-green-700 text-white py-2 px-4 rounded-md cursor-pointer'
      >
        Add
      </button>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
