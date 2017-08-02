import React from 'react';
import { renderRoutes } from 'react-router-config';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import AnimatedSwitch from './AnimatedSwitch';
import { func, shape, arrayOf, string } from 'prop-types';
import Header from './Header';
import './assets/scss/styles.css';

const Base = ({ route, location }) => (
  <div className="App">
    <Header />
    <TransitionGroup component="main">
      <AnimatedSwitch key={location.key} location={location}>
        {renderRoutes(route.routes)}
      </AnimatedSwitch>
    </TransitionGroup>
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
  location: shape({}),
};

export default Base;
