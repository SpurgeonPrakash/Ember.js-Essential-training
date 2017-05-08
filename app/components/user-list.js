import Ember from 'ember';

export default Ember.Component.extend({
	imgClass: "avatar",
	click() {
		Ember.Logger.info("users-list was clicked")
	}
});
// const UsersListComponent =  Ember.Component.extend({
// 	imgClass: "avatar"
// });
// UsersListComponent.reopenClass({
// 	positionalParams: ['avatarUrl', 'email']
// });
