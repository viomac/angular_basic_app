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
            iLike: 0,
            image: 'http://lorempixel.com/100/100/people?1'
        },{ 
            name : 'AngularJS News',
            user: '@angularjs_news',
            comment: 'Right Relevance: Influencers, Articles and Conversations',
            likes: 5,
            iLike: 1,
            image: 'http://lorempixel.com/100/100/people?2'
        },{ 
            name : 'UX & Bootstrap',
            user: '@3rdwave',
            comment: '10 Reasons Why Web Projects Fail',
            likes: 1,
            iLike: 1,
            image: 'http://lorempixel.com/100/100/people?3'
        }
    ];
}