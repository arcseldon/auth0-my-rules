function goodbyeRule(user, context, callback) {
  user.goodbye = 'world';
  console.log('===> set "goodbye" for ' + user.name);
  callback(null, user, context);
}