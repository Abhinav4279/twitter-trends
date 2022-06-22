const url = 'https://twitter.com/explore/tabs/trending';
const getTrends = require('./lib/scraper')

async function storeTrends() {
  // console.log('hello')
  await getTrends(url);
}

storeTrends();