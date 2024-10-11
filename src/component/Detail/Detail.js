import React, { useState, useEffect } from "react";
import "./Detail.css";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { blog } from "../data";

export const Detail = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    const selectedBlog = blog.find((item) => item.id === parseInt(id));
    if (selectedBlog) {
      setBlogDetail(selectedBlog);
    }
  }, [id]);

  return (
    <>
      {blogDetail ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogDetail.cover} alt={blogDetail.title} />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogDetail.title}</h1>
              <p>{blogDetail.desc}</p>
              <p>Author: {blogDetail.author}</p>
              <p>Date: {blogDetail.date}</p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p> 
      )}
    </>
  );
};
