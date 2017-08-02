import Base from './Base';
import About from './About';
import NotFound from './NotFound';

export default [
  { component: Base,
    routes: [
      {
        path: '/',
        component: About,
      },
      {
        component: NotFound,
      }
    ]
  },
]
