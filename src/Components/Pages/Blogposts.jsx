import React from 'react'
import { useState, useEffect } from 'react'

const Blogposts = () => {
    const [data, setData] = useState([]);
    const baseurl = 'http://localhost:1337'
    const endpoint = '/api/blogposts?populate=*'


    useEffect(() => {
        fetch(baseurl + endpoint, {
            headers: {
                Authorization:
                    "Bearer 019d2b15a4b2ecbfca7f77833d52aa4eaa77730fef641e6b5730056703a0fdd7e3189028c6e33c3fbd6d9d14cb1fbc2a5528e007eda6e02661807def3be9d7446dba4f5cc30b6515c80b3dc02bb027637bbb502c022fb9c19d9223bd909eed196a31ecb17ce017056f9676bd9edc38ae2f109d0ba592664cca57fc2d159ecbff"
            }
        })
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
                // console.log(data)
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted")
                }
            })
    }, [baseurl + endpoint])

    return (
        <div>
            {data && data.map(post => {
                return (
                    <article key={post.id}>
                        <h3>{post.attributes.title}</h3>
                        <p>By <span>{post.attributes.authors.data[0].attributes.author}</span></p>

                        {post.attributes.cover.data.map((imgs, idx) => {
                            console.log(baseurl + imgs.attributes.url)
                            return (
                                <div key={idx}>
                                    <img src={baseurl + imgs.attributes.url} alt="" />
                                </div>
                            )
                        })}
                    </article>
                )
            })}
        </div>
    )
}

export default Blogposts