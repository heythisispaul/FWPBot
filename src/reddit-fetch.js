import axios from 'axios';
import findValidPost from './find-valid-post';

const reddit = 'https://www.reddit.com/r/firstworldproblems.json';

export default (tweets) => {
    return axios.get(reddit).then((res) => {
        const posts = res.data.data.children;
        return findValidPost(posts, tweets);
    })
    .catch((err) => {
        console.log(err);
        return false;
    });
};
