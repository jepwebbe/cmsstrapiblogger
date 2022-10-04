import React, { useEffect, useState }  from 'react'
import { Link, Outlet } from "react-router-dom"
import appService from '../App/AppServices/AppService';
import { Page } from '../App/Styles/Page';
import { BloglistStle } from './Bloglist.Styled';

export const Bloglist = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetDetails();
                console.log(result.data.data);
                setApiData(result.data.data);
            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [])

    return (
        <Page>
            <BloglistStle>
                {apiData ?
                    apiData.map((blog) => (
                        <li key={blog.id}>
                            <Link to={"/bloglist/" + blog.id}>{blog.attributes.title}</Link>
                            <p>{blog.attributes.date}</p>
                            {/* <p>Skrevet af {blog.attributes.authors.data[0].attributes.author}</p> */}
                        </li>
                    )) :
                    <>...Loading</>}
            </BloglistStle>
        </Page>
    )
}
