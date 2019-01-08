import { twitter, error } from './twitter-post';

export default () => {
    return new Promise((resolve) => {
        twitter.getHomeTimeline({ count: 10 }, error, (data) => {
            const tweets = JSON.parse(data);
            const tweetTexts = [];
            tweets.forEach((tweet) => tweetTexts.push(tweet.text));
            resolve(tweetTexts);
        });
    });
}