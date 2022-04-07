import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';

const FilterByStory = ({setSearch}) =>{
    return (
        <form>
            <input type='text' placeholder='search' onChange={event => setSearch(event.target.value)}/>
            {/* <input type='submit'>Search</input> */}
        </form>
    )
}

export default FilterByStory;