export class TweetService {
    getTweets() {
        return this.tweets;
    }
    
    tweets = [
        { 
            name : 'Windward',
            user: '@windwardstudios',
            comment: 'Looking for a better company reporting or docgen app?',
            likes: 0,
            myVote: 0,
            image: 'http://lorempixel.com/100/100/people/10'
        },{ 
            name : 'AngularJS News',
            user: '@angularjs_news',
            comment: 'Right Relevance: Influencers, Articles and Conversations',
            likes: 5,
            myVote: 1,
            image: 'http://lorempixel.com/100/100/people/7'
        },{ 
            name : 'UX & Bootstrap',
            user: '@3rdwave',
            comment: '10 Reasons Why Web Projects Fail',
            likes: 1,
            myVote: 1,
            image: 'http://lorempixel.com/100/100/people/9'
        }
    ];
}