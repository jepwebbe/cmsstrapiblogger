import React from 'react'
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import LightBox from '../App/Lightbox/Lightbox';
import { BlogdetailsStyle } from './Blogdetails.Styled';

export const Blogdetails = () => {
    const [apiData, setApiData] = useState("");
    const { id } = useParams();

    const getData = () => {
        fetch(API_BASE + "/api/blogposts/" + id + "?populate=*")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setApiData(data.data)
            })
    }
    useEffect(() => {
        getData();
        console.log(apiData)
    }, [id])

    return (
        <BlogdetailsStyle key={apiData.id}>
            <h2>{apiData && apiData.attributes.title}</h2>
            <p>By {apiData && apiData.attributes.authors.data[0].attributes.author}</p>
            <div className="blog-images">

                {apiData && apiData.attributes.cover.data.map((imgs, idx) => {
                    console.log(API_BASE + imgs.attributes.url)
                    return (
                        <LightBox key={idx} src={API_BASE + imgs.attributes.url}>
                            <img src={API_BASE + imgs.attributes.url} alt={imgs.attributes.alternativeText} />
                        </LightBox>
                    )
                })}
            </div>

            <article><ReactMarkdown children={apiData && apiData.attributes.body} /></article>
        </BlogdetailsStyle>
    )
}