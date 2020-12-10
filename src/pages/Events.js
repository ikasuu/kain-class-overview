import React from 'react'
import HeaderImageUrl from '../special/Values';
import HeaderImage from '../components/HeaderImage'
import '../css/page.css';
import { Helmet } from 'react-helmet';

function Events() {
    return (
        <div>
            <Helmet>
                <title>Events | Grandis Library</title>
            </Helmet>
            <HeaderImage imageUrl={`${HeaderImageUrl.fox}.jpg`}/>
            <h1 className="page-title">Events</h1>
        </div>
    )
}

export default Events
