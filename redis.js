const redis = require('redis')

const client = redis.createClient({ password: 'secret'});

client.hset('german', 'red', 'rot')

client.hget('german', 'red', console.log)