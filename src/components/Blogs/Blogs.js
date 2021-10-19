import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
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
            <Container className="py-4">
            <h2 className="text-center mb-3">Our Blogs</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.key}
                    ></Blog>)
                }
            </Row>
            </Container>
        </div>
    );
}

export default Blogs;