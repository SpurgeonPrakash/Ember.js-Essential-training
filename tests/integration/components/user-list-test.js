import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('user-list', 'Integration | Component | user list', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-list fake-url sample-email}}`);

  assert.equal(this.$('img').attr('class'), 'avatar');

  // Template block usage:
  this.render(hbs`
    {{#user-list fake-url sample-emai}}
      template block text
    {{/user-list}}
  `);

  assert.equal(this.$('img').attr('class'), 'avatar);
});
