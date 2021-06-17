import React from 'react';
import {Link} from "react-router-dom";
import {flatDeep, slugify, containsObject} from '../../utils';
import BlogClassicData from '../../data/blog/BlogClassic.json';

const SidebarTag = () => {
    const tags = BlogClassicData.map(item => {
        return item.tags;
    });
    let singleTagArray = flatDeep(tags);
    let allTags = [];
    singleTagArray.forEach(tag => {
        const obj = {
            title: tag.trim(),
            slug: slugify(tag)
        }
        const objIndex = containsObject(obj, allTags);
        if(objIndex !== -1){
            allTags[objIndex] = {
                title: tag.trim(),
                slug: slugify(tag)
            }
        } else {
            allTags.push(obj);
        }
    })
    return (
        <div className="sidebar-widget-content">
            <div className="tagcloud">
                {allTags.map((tag) => {
                    return(
                        <Link key={tag.slug} to={process.env.PUBLIC_URL + `/tag/${tag.slug}`}>{tag.title}</Link>
                    )
                })}
            </div>
        </div>
    )
}




export default SidebarTag;
