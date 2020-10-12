import React from 'react';
import '../assets/styles/components/MenuOptions.scss'

function MenuOptions({children}) {
    return (
      <div className='options'>
          {children}
      </div>
    )
}

export default MenuOptions;