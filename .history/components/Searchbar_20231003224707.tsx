"use client"
import React, { FormEvent, useState } from 'react'
const isValidAmazonProductURL = (url: string) => {
    try {
        const parseURL = new URL(url);
        const hostname = parseURL.hostname;

        //check is hostname contains amazon.com
        if (hostname.includes('amazon.com') ||
            hostname.includes('amazon.') ||
            hostname.endsWith('amazon')) {
            return true
        }
    } catch (error) {
        return false
    }
    return false
}
const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);

        alert(isValidLink ? 'Valid link' : 'Invalid link')
    }
    return (
        <form className='flex flex-wrap gap-4 mt-12'
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder='Enter product link'
                className='searchbar-input'
            />
            <button type="submit" className='searchbar-btn'>
                Search
            </button>
        </form>
    )
}

export default Searchbar