var Twit = require('twit')

var T = new Twit({
	consumer_key:  'W7FQwquL7iEMD33DHc7iDFoEB',
	consumer_secret: 'lwnfru6WtfMJcFECFtIxs47sCGeemRD1JM3w9hTPhTEBj4IN3o',
	access_token: '564269211-6ctwQqXdfObCrzZIzCusd5nHKyXwvGbWdy6uT7vH',
	access_token_secret: 'ux1khAuJmvetaB47p46tpdqe7M9SXOw7vSzAhGZEXX2ur',
});

//affichage dans la console d'un message
console.log('Hello');

//poster un tweet
T.post('statuses/update', { status: 'Test tweet!' }, function(err, data, response) {
  console.log(data)
})