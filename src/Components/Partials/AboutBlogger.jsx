import React from 'react'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import { API_BASE } from '../App/AppServices/API_URL';
import { AboutBloggerStyle } from './AboutBlogger.Styled';
import { FooterStyle } from './Footer.Styled';

export const Aboutman = () => {
    const [data, setData] = useState([]);
    const AboutManEndpoint = "/api/aboutman?populate=*"

    useEffect(() => {
        fetch(API_BASE + AboutManEndpoint)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })
    }, [API_BASE + AboutManEndpoint])


    return (
        <AboutBloggerStyle >
            {data && Object.values(data).map((about, ind) => {
                return (
                    <AboutBloggerStyle key={ind}>
                        <ReactMarkdown children={about.description}/>
{/*                         {about && about.picture.map((img, inx) => {
                            return (
                                <img src={API_BASE + img.url} />
                            )
                        })} */}
                    </AboutBloggerStyle>
                )
            })}
        </AboutBloggerStyle>
    )
}