import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './AnimatedSwitch';
import Header from './Header';
import Footer from './Footer';
import './assets/scss/styles.css';

const LayoutUser = ({ route, location }) => (
  <div className="pageWrapper">
    <Header />
    <div className="pageBody">
      <TransitionGroup component="main">
        <AnimatedSwitch key={location.key} location={location}>
          {renderRoutes(route.routes)}
        </AnimatedSwitch>
      </TransitionGroup>
    </div>
    <Footer />
  </div>
);

LayoutUser.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
  location: shape({}),
};

export default LayoutUser;

// import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import { func, shape, arrayOf, string } from 'prop-types';
// import Header from './Header';
// import './assets/scss/styles.css';
//
// const LayoutUser = ({ route, location }) => (
//   <div className="pageWrapper">
//     <Header />
//     <div className="pageBody">
//       {renderRoutes(route.routes)}
//     </div>
//   </div>
// );
//
// LayoutUser.propTypes = {
//   route: shape({
//     routes: arrayOf(
//       shape({
//         path: string,
//         component: func,
//       }),
//     ),
//   }).isRequired,
//   location: shape({}),
// };
//
// export default LayoutUser;

// import React, { Component } from 'react';
// import { renderRoutes } from 'react-router-config';
// import { func, shape, arrayOf, string } from 'prop-types';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// import AnimatedSwitch from './AnimatedSwitch';
// import Header from './Header';
// import './assets/scss/styles.css';
//
// class LayoutUser extends Component {
//   static propTypes = {
//     route: shape({
//       routes: arrayOf(
//         shape({
//           path: string,
//           component: func,
//         }),
//       ),
//     }).isRequired,
//     location: shape({
//       pathname: string.isRequired,
//     }).isRequired,
//   };
//
//   render() {
//     const { route, location } = this.props;
//
//     return (
//       <div className="pageWrapper">
//         <Header />
//         <div className="pageBody">
//           <TransitionGroup component="main">
//             <AnimatedSwitch key={location.key} location={location}>
//               {renderRoutes(route.routes)}
//             </AnimatedSwitch>
//           </TransitionGroup>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default LayoutUser;
