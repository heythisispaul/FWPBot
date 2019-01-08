import * as config from '../config.json';
import { Twitter } from 'twitter-node-client';
import redditFetch from './reddit-fetch';
import getTweets from './get-tweets';

export const twitter = new Twitter({
    "consumerKey": process.env.API_KEY || config.APIKey,
    "consumerSecret": process.env.API_SECRET || config.APISecret,
    "accessToken": process.env.TOKEN || config.token,
    "accessTokenSecret": process.env.TOKEN_SECRET || config.tokenSecret,
    "callBackUrl": ""
});

export const error = (err) => console.log('ERROR [%s]', JSON.stringify(err));

export const success = (data) => console.log('Data [%s]', data);

export default () => {
    getTweets()
        .then((tweets) => redditFetch(tweets)
        .then((status) => twitter.postTweet({ status }, error, success)))
        .catch((err) => console.log(err));
};