import React, {useState, useEffect} from 'react';
import TopStories from '../components/TopStories';
import FilterByStory from '../components/FilterByStory';

const HackerNews = () => {
    
    const [topStories, setTopStories] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        
        getTopStories();

        console.log(topStories)
        
    }, [])

    const getTopStories = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then((data) => {
            const newData = data.slice(0,20);
            const promises = newData.map((id)=> {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then(response => response.json());        
        })
        
        Promise.all(promises)
        .then((results) => {
            setTopStories(results);
        })
        
        })



    // const getStoryIds = () => {
        
    //     fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    //     .then(response => response.json())
    //     .then(data => setStoryIds(data))
        
    // }

    // const fetchUrls = () => {
    //     storyIds.map((id)=>{
    //         return (fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))
    //     })
    // }

    // const getTopStories = () => {
    // Promise.all([storyIds])
    //     .then(response => setTopStories(response) 
    // )
    
    // }
    }
    return (
        
        <div>
            <h1>HackerNews for Now</h1>
            <FilterByStory setSearch={setSearch} />
            <TopStories topStories={topStories}/>
        </div>
        
    );
    
}

export default HackerNews;