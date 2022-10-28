import React, { useEffect, useState } from 'react'
import { API_BASE, API_BLOGS } from '../App/AppServices/API_URL';
import { AboutBloggerStyle } from './AboutBlogger.Styled';
import { AboutSlidesStyle } from './AboutSlides.Styled';

export const AboutSlides = () => {
    const [data, setData] = useState([]);
// useEffect hook sørger for, at der rerenders, når data er fetchet fra API, og gemmer i data
    useEffect(() => {
        // fetcher api og hvis ingen fejl, sætter state til resultatet
        fetch(API_BASE + API_BLOGS)
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data.data);
                // console.log(data)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                }
            })
    }, [API_BASE])

    /* loop over billederne i mappen 'cover' og genererer hhv links og src til img */
    return (
        <AboutSlidesStyle>
            <h3>I'm a CSS slider of all the blogpost images</h3>
            <p>Click a link to slide</p>
            {data ?
                data.map((link) => {
                    return (
                        link && link.attributes.cover.data.sort((a, b) => a.id > b.id ? +1 : -1).map((thelink, ind) => {
                            return (
                               <a key={ind} href={"#slide-" + thelink.id} > <button>{thelink.id}</button></a>
                            )
                        })
                    )
                }) :
                <>...Loading</>
            }
            <div>

                {data &&
                    data.map((blog) => {
                        return (
                            blog && blog.attributes.cover.data.sort((a, b) => a.id > b.id ? +1 : -1).map((imgs, inx) => {
                                return (
                                    <img key={inx} id={"slide-" + imgs.id} src={API_BASE + imgs.attributes.url} className="snap-start shrink-0 mr-[50px] rounded-[10px] bg-[#eee] origin-center scale-1 transition-transform-[0.5s] relative text-[100px]  w-[100%] h-[100%]" />
                                )
                            })
                        )
                    })
                }
            </div>



        </AboutSlidesStyle>
    )
}

    // https://css-tricks.com/css-only-carousel/
