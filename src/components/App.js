import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = () => {
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;


// import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import routes from './routes';
// import posts from './data/posts.json';
//
// class App extends Component {
//   state = {
//     projects: posts.slice(0, 12),
//   };
//
//   render() {
//     return (
//       <Router>
//         {renderRoutes(routes)}
//       </Router>
//     );
//   }
// }
//
// export default App;
