import Base from './Base';
import LayoutCreator from './LayoutCreator';
import LayoutUser from './LayoutUser';
import Home from './Home';
import About from './About';
import AddContent from './AddContent';
import NotFound from './NotFound';
// import FeathersService from './FeathersService';
import Articles from './Articles';
import Posts from './Posts';
import Post from './Post';

export default [
  { component: Base,
    routes: [
      {
        path: '/create',
        component: LayoutCreator,
        routes: [
          { path: '/create/',
            exact: true,
            component: Home,
          },
          { path: '/create/add-content',
            exact: true,
            component: AddContent,
          },
          {
            component: NotFound,
          },
        ]
      },
      {
        component: LayoutUser,
        routes: [
          { path: '/',
            exact: true,
            component: Home,
          },
          {
            path: '/about',
            component: About,
            name: 'About',
          },
          {
            path: '/articles',
            exact: true,
            component: Articles,
            name: 'Articles',
          },
          // {
          //   path: '/feathers-service',
          //   component: FeathersService,
          //   name: 'Feathers Service',
          // },
          {
            path: '/posts',
            exact: true,
            component: Posts,
            name: 'Posts',
          },
          {
            path: '/posts/:id',
            component: Post
          },
          {
            component: NotFound,
          },
        ]
      },
    ]
  },
]
