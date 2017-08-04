import React from 'react';
import { object } from 'prop-types';
//import moment from 'moment';

const Footer = ( props, { router } ) => {
  const today = new Date();
  //const dd = today.getDate();
  //const mm = today.getMonth()+1; //January is 0!
  const yyyy = today.getFullYear();

  const navTo = (event) => {
    router.history.push("/about")
  };

  const goBack = (event) => {
    router.history.goBack()
  };

  return (
    <div>
      <button onClick={navTo}>Change route to About</button>
      <button onClick={goBack}>Go Back</button>
      Copyright {yyyy} Company Name
    </div>
  );
};

Footer.contextTypes = {
  router: object,
}

export default Footer;

// {moment(article.createdAt).fromNow()}
