export default (posts, tweets) => {
    const tweetLength = 240;
    let post = null;
    for (let i = 0; i < posts.length; i++) {
        let tweetText = posts[i].data.title;
        if (tweetText.length <= tweetLength && tweets.indexOf(tweetText) < 0) {
            post = posts[i].data.title;
            break;
        }
    }
    return post;
};
