import React, { Component } from 'react';
import axios from 'axios';
import PostsDisplay from './PostsDisplay';
//import feathersService from './FeathersService';

import hooks from 'feathers-hooks';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';
import authentication from 'feathers-authentication/client';

const socket = io('http://localhost:3030');
const app = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(authentication({ storage: window.localStorage }));


  const users = app.service('/users');

  Promise.all([
    users.create({ email: 'jane.doe@gmail.com', password: '11111', role: 'admin' }),
    users.create({ email: 'john.doe@gmail.com', password: '22222', role: 'user' }),
    users.create({ email: 'judy.doe@gmail.com', password: '33333', role: 'user' })
  ])


//export default feathersService;

class Posts extends Component {
  //state = { postList: [] };
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
  }

  componentDidMount () {

    // app.create({
    //   first_name: 'Johnny',
    //   last_name: 'Mac',
    //   email: 'hellojohnnymac@gmail.com',
    //   phone: '772-224-9252',
    //   address: '123 Bird Dog Lane',
    //   city: 'Tampa',
    //   state: 'FL',
    //   zip: '34857',
    //   createdAt: Date.now(),
    // })

    // const cachedHits = localStorage.getItem(value);
    // if (cachedHits) {
    //   this.setState({ hits: JSON.parse(cachedHits) });
    //   return;
    // }
    //
    // fetch('https://hn.algolia.com/api/v1/search?query=' + value)
    //   .then(response => response.json())
    //   .then(result => this.onSetResult(result, value));
    //
    // onSetResult = (result, key) => {
    //   localStorage.setItem(key, JSON.stringify(result.hits));
    //   this.setState({ hits: result.hits });
    // }


    const cachedHits = localStorage.getItem('postList');
    if (cachedHits) {
      this.setState({ postList: JSON.parse(cachedHits) });
      //return;
      //console.log(JSON.parse(cachedHits));
    } else {
      const dataAPI = 'https://jsonplaceholder.typicode.com';
      axios.get(dataAPI + '/posts')
        .then((response) => {
          const postList = response.data.slice(0, 12);
          this.setState({
            postList: postList
          });
          localStorage.setItem('postList', JSON.stringify(postList));
          console.log(postList);
        })
        .catch( (error) => {
          console.log(error);
        }
      );
    }
  }

  // onSetResult = (result, key) => {
  //   localStorage.setItem(key, JSON.stringify(result.hits));
  //   this.setState({ hits: result.hits });
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <PostsDisplay {...this.state} />
        </div>
      </div>
    );
  }
}

export default Posts;
