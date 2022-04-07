import React from 'react';
import StoryItem from './StoryItem';


const TopStories = ({topStories}) => {

    const storyNodes = topStories.map((story, index) => {
        return <li key={index}> title={story.title} url={story.url}</li>
    });
    
    return (
        <div>
            <h2>Top Stories</h2>
            <ul>
                {storyNodes}
            </ul>
            
        </div>
        
    )
}

export default TopStories;