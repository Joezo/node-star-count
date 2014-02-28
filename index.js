var request = require('request');
var org = process.argv[2];
if(!org) {
  console.log('No organization passed in, format:\n$ node <this-file> <org>');
  process.exit(1);
}
request.get({
  url: 'https://api.github.com/orgs/' + org + '/repos',
  headers: {
      'User-Agent': 'Star counter'
    }
  },function(req,res,body){
    var repos = JSON.parse(res.body);
    var starCount = 0;
    repos.forEach(function(repo){
      starCount += repo.stargazers_count;
    });
    console.log(org + ' has ' + starCount + ' stars across ' + repos.length + ' repos');
});
