// import React from 'react';
// import logo from './logo.svg';
// import logo2 from './logo2.svg';
// import set from './set.svg';
// import bell from './bell.svg';
// import login from './login.png';
// import search from './search.svg';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar" style={{ backgroundColor: '#D54029', alignContent: "space-between" }}>

//       <div style={{ backgroundColor: 'transparent' }}>
//         <img src={logo} alt="Logo 1" />
//       </div>


//       <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: 'space-between' }}>
//         <div className="navbar-brand" style={{ marginLeft: '45px' }}>
//           <img src={logo2} alt="Logo 2" />
//           <div className='search-bar'><img src={search} alt="search" /></div>
//         </div>


//         <ul className="navbar-menu">
//           <div className="navbar-brand">
//             <img src={set} alt="set" />
//             <img src={bell} alt="bell" />
//             <img src={login} alt="login" />
//           </div>
//         </ul>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import set from './set.svg';
import bell from './bell.svg';
import login from './login.png';
import search from './search.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: '#D54029', alignContent: "space-between", position: 'absolute' }}>

      <div style={{ backgroundColor: 'transparent' }}>
        <img src={logo} alt="Logo 1" />
      </div>


      <div style={{ display: "flex", flexDirection: "row", width: '100%', justifyContent: 'space-between' }}>
        <div className="navbar-brand" style={{ marginLeft: '45px' }}>
          <img src={logo2} alt="Logo 2" />
          <div className='search-bar'>
            <img src={search} alt="search" />
            <input className="input-text" type="text" placeholder="Search" style={{ color: 'FFFFFF', border: 'none', backgroundColor: 'transparent', marginLeft: '5px' }} />
          </div>
        </div>


        <ul className="navbar-menu">
          <div className="navbar-brand">
            <img src={set} alt="set" />
            <img src={bell} alt="bell" />
            <img src={login} alt="login" />
          </div>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
