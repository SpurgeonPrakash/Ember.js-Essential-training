import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongTo, hasMany } from 'ember-data/relationships';




export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr(),
  string: DS.attr(),
  isAdmin: DS.attr('boolean', {
  	defaultValue: false
  }),
  created: DS.attr('date', {
  	defaultValue(){
  		return new Date();
  	}
  }),
  bookmarks: hasMany('bookmark')
});
