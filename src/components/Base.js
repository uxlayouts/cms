// import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
// import AnimatedSwitch from './AnimatedSwitch';
// import { shape } from 'prop-types';
// import Header from './Header';
//
// const Base = ({route, location}, {router}) => (
//   <div className="App">
//     <Header />
//     <TransitionGroup component="main">
//       <AnimatedSwitch key={location.key} location={location}>
//         {renderRoutes(route.routes)}
//       </AnimatedSwitch>
//     </TransitionGroup>
//   </div>
// );
//
// Base.propTypes = {
//   location: shape({}),
// };
//
// export default Base;


import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';

const Base = ({ route }) => (
  <div>
    {renderRoutes(route.routes)}
  </div>
);

Base.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
};

export default Base;

// import React, { Component } from 'react';
// import { renderRoutes } from 'react-router-config';
// import { func, shape, arrayOf, string } from 'prop-types';
//
// class Base extends Component {
//   state = {
//     carrot: 'false',
//   };
//   render() {
//     return (
//       <div>
//         {renderRoutes(this.props.route.routes)}
//       </div>
//     );
//   }
// }
//
// Base.propTypes = {
//   route: shape({
//     routes: arrayOf(
//       shape({
//         path: string,
//         component: func,
//       }),
//     ),
//   }).isRequired,
// };
//
// export default Base;
