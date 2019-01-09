export const tweetMatch = (tweets, value) => {
    return value.length > 100 ? 
    tweets.filter((tweet) => tweet.includes(value.substring(0, 99))).length < 1 : 
    !tweets.includes(value);
}

export default (posts, tweets) => {
    const tweetLength = 240;
    let post = null;
    for (let i = 0; i < posts.length; i++) {
        let tweetText = posts[i].data.title;
        if (tweetText.length <= tweetLength && tweetMatch(tweets, tweetText)) {
            post = posts[i].data.title;
            break;
        }
    }
    return post;
};
