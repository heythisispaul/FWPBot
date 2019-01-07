import { Twitter } from 'twitter-node-client';
import redditFetch from './reddit-fetch';

//these need to change to env vars for heroku
export const twitter = new Twitter({
    "consumerKey": process.env.API_KEY,
    "consumerSecret": process.env.API_SECRET,
    "accessToken": process.env.TOKEN,
    "accessTokenSecret": process.env.TOKEN_SECRET,
    "callBackUrl": ""
});

export const error = (err) => console.log('ERROR [%s]', JSON.stringify(err));

export const success = (data) => console.log('Data [%s]', data);

export default () => {
    redditFetch().then((status) => {
        if (status) {
            twitter.postTweet({ status }, error, success);
        }
    });
};
