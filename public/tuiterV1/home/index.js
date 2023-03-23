import Layout from '../common-components/Layout.js';
import Tweet from './components/Tweets/Tweet.js';
import Tweets from './components/Tweets/Tweets.js';

function homePage() {
    console.log('home');
    $('#wd-home').append(`
       ${Layout('', Tweets(), '')}
    `);
}

$(homePage);
