const url = 'https://twitter.com/explore/tabs/trending';
const getTrends = require('./scraper')
const fs = require('fs/promises')
const cron = require('node-cron')

async function storeTrends() {
  const cur_trends = await getTrends(url);
  const all_trends_json = await fs.readFile('./db.json');
  let all_trends = JSON.parse(all_trends_json);

  if(all_trends.length >= 12)
    all_trends = []

  all_trends.push(cur_trends);

  await fs.writeFile('./db.json', JSON.stringify(all_trends, null, 2));
}

//scrape recent top trending each hour
module.exports = async () => {
  cron.schedule('0 * * * *', async () => {
    console.log('Running...');
    try {
      await storeTrends();
    } catch (err) {
      console.log(err);
    }
  });
}