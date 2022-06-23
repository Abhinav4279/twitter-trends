const url = 'https://twitter.com/explore/tabs/trending';
const getTrends = require('./lib/scraper')
const fs = require('fs/promises')

async function storeTrends() {
  const cur_trends = await getTrends(url);
  const all_trends_json = await fs.readFile('./db.json');
  const all_trends = JSON.parse(all_trends_json);
  all_trends.push(cur_trends);

  await fs.writeFile('./db.json', JSON.stringify(all_trends, null, 2));
}

storeTrends();