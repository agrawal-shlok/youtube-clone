import React, { useEffect, useState } from 'react'
import './Feed.css'

import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const Feed = ({ category }) => {

    const [data, setData] = useState([])
    const fetchdata = async () => {
        try {
            const videolist_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${category}&key=${API_KEY}&maxResults=50`;
            const response = await fetch(videolist_url); // Correctly await and assign response
            const d = await response.json(); // Correctly await and parse JSON
            setData(d.items); // Assuming setData is your state setter
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    useEffect(() => {
        fetchdata();
    }, [category])
    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`vedio/${item.snippet.categoryId}/${item.id}`} className='card ' key={`vedio/${item.snippet.categoryId}/${item.id}`}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p> {value_converter(item.statistics.viewCount)}&bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </Link>
                )
            })}


        </div>
    )
}

export default Feed