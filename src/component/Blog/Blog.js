import React from "react";
import "./Blog.css"
import { blog } from "../data";
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className='blog'>
      <div className='container grid3'>
        {blog.map((item) => (
       <div className='box boxItems' key={item.id}>
            <div className='img'>
            <img src={item.cover} alt={item.title} />
        
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                <Link to={`/category/${item.category}`}>#{item.category}</Link>
              </div>
              <Link to={`/details/${item.id}`} className='link'>
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' />
                <span>{item.date}</span>
                <AiOutlineComment className='icon' />
                <span>27</span>
                <AiOutlineShareAlt className='icon' />
                <span>SHARE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
