import { Meteor } from 'meteor/meteor';

import { Dbusuarios } from './dbusuarios.js';

/*if(Meteor.isServer){
	Meteor.publish("allResolutions", function(){
		return Resolutions.find();
	});

	Meteor.publish("userResolutions", function(){
		return Resolutions.find({user: this.userId});
	});
}*/

Meteor.methods({
  	addUser(data) {
  		check(data, Object);
  		Dbusuarios.insert({
      		nick: resolution,
      		password: false,
      		'createdAt': new Date(),
      		'user': Meteor.userId()
    	});
  	}
});
