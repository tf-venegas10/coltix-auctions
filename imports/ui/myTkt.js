import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import { EventsDB, BidsDB } from "../api/events";
import Navbar from "./Navbar";
import Events from "./events/Events";
import { Accounts } from 'meteor/accounts-base';

// import Tickets from './tickets/Tickets';

class myTkt extends Component {

  render() {
    console.log(this.props.list);    
    return (
      <div>
        <div>
          <Navbar events={[]} ></Navbar>
        </div>
      </div>
    );
  }
};

export default withTracker(() => {
  Meteor.subscribe('myTickets');
  return {
    list: EventsDB.find().fetch(),
    currentUser: Meteor.user(),
  };
})(myTkt);