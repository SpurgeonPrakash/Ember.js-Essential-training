import Ember from 'ember';
import ENV from 'emberbook/config/environment';

export default Ember.Route.extend({
	model(){
		//alert(ENV.APP.title);
		return this.get('store').findAll('user');
	}
});
