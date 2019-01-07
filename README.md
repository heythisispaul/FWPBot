# The First World Problems Subreddit Bot

I really enjoy [r/firstworldproblems](https://www.reddit.com/r/firstworldproblems) on Reddit, so I thought it'd be fun to make a bot that shares some of the joy on [Twitter.](https://twitter.com/1stWorldProbBot) I'm sure it's not a particularly original idea, but if you'd like to see what people on Reddit view as first world problems, feel free to subscribe or contribute. 

## What does it Do?

- It runs at 18:00 and 2:00 UTC.
- It checks the top post on r/firstworldproblems and posts it as a tweet unless:
    - It has already posted that post before
    - The post is over the 240 character limit for Twitter
- If either condition above is met, it will move on to the next post and so on.

## Details:

This is a Node application and is hosted on [Heroku](https://www.heroku.com/) and uses their [scheduler](https://devcenter.heroku.com/articles/scheduler) add-on to run. It gets data from Reddit using Reddit's thoughtful `.json` [feature](https://www.reddit.com/r/javascript/comments/8yg6ig/adding_json_onto_the_end_of_most_reddit_urls/) and posts to Twitter using the Standard [Twitter API.](https://developer.twitter.com/en/docs.html) 

I have no control over what the bot says, so please just roll with it. 