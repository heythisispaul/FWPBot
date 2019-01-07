export default (posts) => {
    const tweetLength = 240;
    let post = null;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].data.title.length <= tweetLength) {
            post = posts[i].data.title;
            break;
        }
    }
    return post;
};
