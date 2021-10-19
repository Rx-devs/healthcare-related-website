import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Blog from "../Blog/Blog";
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./fakeBlogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    },[])
    return (
        <div>
            <h3>Our Blogs</h3>
            <Row xs={1} md={2} className="g-4">
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.key}
                    ></Blog>)
                }
            </Row>
        </div>
    );
}

export default Blogs;