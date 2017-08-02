import React from 'react';
import logo from './assets/img/logo.svg';
import Nav from './Nav';

const Header = (props) => {
  return (
    <div>
      <div className="pageHeader">
        <img src={logo} className="logo" alt="logo" />
        <Nav />
      </div>
    </div>
  );
};
export default Header;

// import React, { Component } from 'react';
// //import {TimelineMax, Power3} from 'gsap';
// import logo from './assets/img/logo.svg';
// import Nav from './Nav';
//
// class Header extends Component {
//
//   // componentDidMount () {
//   //   // Animated element variables
//   //   const header = document.querySelector('.App-logo');
//   //   const navLinks = document.getElementsByClassName('App-nav-link');
//   //
//   //   // Cache GSAP timeline
//   //   const tl = new TimelineMax({paused: true});
//   //   tl.fromTo(
//   //     header, // Element to animate variable
//   //     3.0, // Length of animation
//   //     {
//   //       opacity:0,
//   //       x:0,
//   //       y:-10
//   //     },
//   //     {
//   //       opacity:1,
//   //       x:0,
//   //       y:0,
//   //       ease:Power3.easeOut, // Easing Function
//   //       delay: 0.3 // Delay of animation start
//   //     }
//   //   );
//   //   // speed, stagger, delay
//   //   tl.staggerFromTo(
//   //     navLinks, // Element to animate variable
//   //     0.6, // Length of animation
//   //     {
//   //       opacity:0,
//   //       x:0,
//   //       y:40
//   //     },
//   //     {
//   //       opacity:1,
//   //       x:0,
//   //       y:0,
//   //       ease:Power3.easeOut // Easing Function
//   //     },
//   //     0.1, // Delay between staggered animations
//   //     .15 // Delay of animation start
//   //   );
//   //
//   //   // Play cached GSAP timeline!
//   //   tl.restart();
//   //
//   // }
//
//   render() {
//     return (
//       <div>
//         <div className="pageHeader">
//           <img src={logo} className="logo" alt="logo" />
//           <Nav />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Header;
//
