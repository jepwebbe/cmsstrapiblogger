import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import appService from '../App/AppServices/AppService';

export const Blogdetails = () => {
    const [apiData, setApiData] = useState("");
    const { id } = useParams();

    const getData = () => {
        fetch("http://localhost:1337/api/blogposts/" + id)
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
            <div key={apiData.id}>
                <h2>{apiData && apiData?.attributes.title}</h2>
            </div>
    )
    }