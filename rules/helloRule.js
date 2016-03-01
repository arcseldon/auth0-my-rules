// author arcseldon@icloud.com

function helloRule(user, context, callback) {
  user.hello = 'worldFromWH';
  console.log('===> set "helloFromWH" for ' + user.name);
  callback(null, user, context);
}