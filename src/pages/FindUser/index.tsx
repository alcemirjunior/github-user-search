import React from 'react'
import SearchCard from './components/SearchCard'
import './styles.scss'

const FindUser = () => (
    <div className="search-page">
        <div className="searchcard">
        <SearchCard/>
        </div>
        <div>
            <h1>loader / resultado da busca</h1>
        </div>
    </div>
);

export default FindUser;