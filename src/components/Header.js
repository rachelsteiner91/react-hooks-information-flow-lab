//##DELIVERABLE 1.
//1a: create a Header component
//1.b refactor the <header> element out of the App component
//1c. You need to pass a callback function as a prop called onDarkModeClick to the Header component in order for the test to pass.
import React from 'react';


function Header({isDarkMode, onDarkModeClick}) {

  return (
    <div>
        <header>
            <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
                </button>
        </header>
    </div>
  )
  }

export default Header

