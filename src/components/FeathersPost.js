import React, { Component } from 'react';
//import axios from 'axios';
//import PostsDisplay from './PostsDisplay';

import NavLink from './NavLink';
import moment from 'moment';
//import ArticleCard from './ArticleCard';
//import axios from 'axios';

const socket = io('http://localhost:3030/');
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.socketio(socket));
const feathersService = app.service('articles');

class Posts extends Component {
  //state = { postList: [] };
  constructor(props) {
    super(props);
    this.state = {
     articles: []
    };
   }

  //  getInitialState: function() {
  //    return {
  //      articles: []
  //    }
  //  },

   sendMessage(e) {

     var firstName = document.getElementById("firstName").value;
     var lastName = document.getElementById("lastName").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var address = document.getElementById("address").value;
     var city = document.getElementById("city").value;
     var state = document.getElementById("state").value;
     var zip = document.getElementById("zip").value;

     feathersService.create({
       first_name: firstName,
       last_name: lastName,
       email: email,
       phone: phone,
       address: address,
       city: city,
       state: state,
       zip: zip,
       createdAt: Date.now()
     }).then(() => this.setState({
       first_name: '',
       last_name: '',
       email: '',
       phone: '',
       address: '',
       city: '',
       state: '',
       zip: '',
     }));

     e.preventDefault();
   },

  // componentDidMount () {
  //     const dataAPI = 'https://jsonplaceholder.typicode.com';
  //     axios.get(dataAPI + '/posts')
  //       .then((response) => {
  //         const postList = response.data.slice(0, 12);
  //         this.setState({
  //           postList: postList
  //         });
  //         localStorage.setItem('postList', JSON.stringify(postList));
  //         console.log(postList);
  //       })
  //       .catch( (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

  componentDidMount: function() {

    // Find the last 10 messages
    feathersService.find({
      query: {
        $sort: { createdAt: -1 },
        $limit: this.props.limit || 8
      }
    }).then(page => this.setState({ articles: page.data }))

    // Listen to newly created messages
    feathersService.on('created', article => this.setState({
      articles: this.state.articles.concat(article)
    }))


  },

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <h2>Add Article</h2>
          <form onSubmit={this.sendMessage}>
            <div className="row">
              <div className="col-md-6">
                <label>First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="col-md-6">
                <label>Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label>Email</label>
                <input type="text" id="email" />
              </div>
              <div className="col-md-6">
                <label>Phone</label>
                <input type="text" id="phone" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label>Address</label>
                <input type="text" id="address" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <label>City</label>
                <input type="text" id="city" />
              </div>
              <div className="col-md-4">
                <label>State</label>
                <input type="text" id="state" />
              </div>
              <div className="col-md-4">
                <label>Zip</label>
                <input type="text" id="zip" />
              </div>
            </div>
            <br />
            <button type="submit">Add Article</button>
          </form>
          <br />
          <br />


          <h1>Archives</h1>

          <hr />
          <br />

          <div className="row">
            {/* Don't have an ID to use for the key, URL work ok? */}
              {this.state.articles.map(function(article) {
                return (

                  <div key={article._id} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card rounded-md">
                      <div className="card-header">
                        <span className="card-title">{article.first_name} {article.last_name}</span>
                      </div>
                      <div className="card-block">
                        {article.email}<br />
                        {article.phone}<br />
                        {article.address}<br />{article.city}, {article.state} {article.zip}


                      </div>
                      <div className="card-footer">
                        {moment(article.createdAt).fromNow()}
                      </div>
                    </div>
                  </div>
                );
              })}

          </div>

        </div>
      </div>
    );
  }
}

export default Posts;
