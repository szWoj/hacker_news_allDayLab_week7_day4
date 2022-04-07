import React, {useState, useEffect} from 'react';
import TopStories from '../components/TopStories';

const HackerNews = () => {

    const [topStories, setTopStories] = useState([]);

    useEffect(() => {
        getTopStories();
        
    }, [])

    const getTopStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then((data) => {data.map((storyId)=> {
            return (
                fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(response => response.json())
                
                // .then(data => console.log(data))
            )
        .then(stories => setTopStories(stories))
        .then(console.log(topStories))
            
        })});
    }
    // const getTopStoryIds = () => {
    //     fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    //     .then(response => response.json())
        
    //     .then(data => {return data})
        
    // }

    
    
    
    
    // const getTopStories = () => {
        
    //     const storyIds = getTopStoryIds();
    //     console.log(storyIds);

    // }


    return (
        
        <div>
            <h1>HackerNews for Now</h1>
            <TopStories />
        </div>
        
    )
}

export default HackerNews;