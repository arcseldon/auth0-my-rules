function helloRule(user, context, callback) {
  user.hello = 'worldFromWH';
  console.log('===> set "helloFromWH" forr ' + user.name);
  callback(null, user, context);
}