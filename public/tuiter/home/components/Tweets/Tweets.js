import tuits from './tuits.js';
import Tweet from './Tweet.js';

const Tweets = () => {
    return `
        ${tuits
            .map((tuit) => {
                return Tweet(tuit);
            })
            .join('')}
        `;
};

export default Tweets;
