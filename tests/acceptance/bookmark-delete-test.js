import { test } from 'qunit';
import moduleForAcceptance from 'emberbook/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bookmark delete');

test('visiting /bookmark-delete', function(assert) {
  let user = server.create('user', {});
  let bookmark = server.create('bookmark', {
  	title: 'Test Bookmark',
  	userId: user.id
  });
  visit(`/emberbook/edit/${bookmark.id}`);
  click('button#delete');
  andThen(function(){
  	assert.equal(currentURL(), '/bookmarks')
  })
});
