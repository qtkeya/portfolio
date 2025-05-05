import React from 'react';
import './Blog.css'; 
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: "day1",
    title: "Day 1: Arrival",
    summary: "Manila here we come! Much excited to see you.",
    image: "/d1.jpg"
  },
  {
    id: "day2",
    title: "Day 2: Subic Tour",
    summary: "Welcomed by calm and peaceful bay of Subic and introduced to their advance facilities.",
    image: "/d2.jpg"
  },
  {
    id: "day3",
    title: "Day 3: Museum Tour",
    summary: "On the third day of our tour, we explored the rich cultural and historical heritage of the Philippines by visiting the Philippine National Museum and the Manuel Quezon Museum.",
    image: "/d3.jpg"
  },
  {
    id: "day4",
    title: "Day 4: BSP & HI-TECH",
    summary: "We visited the Bangko Sentral ng Pilipinas, where we had the rare opportunity to witness the intricate process of how money and gold are made and secured.",
    image: "/d4.jpg"
  },
  {
    id: "day5",
    title: "Day 5: LRT Tour",
    summary: "We explored the operations behind the Light Rail Transit (LRT) system with a visit to the LRT station and its depot near Santolan.",
    image: "/d5.jpg"
  },
  {
    id: "day6",
    title: "Day 6: Hello Baguio City",
    summary: "On the sixth day of our tour, we began an unforgettable journey as we traveled to Baguio City around midnight. we arrived in the cool mountain city, with our first stop at the beautiful Strawberry Farm",
    image: "/d6.jpg"
  },
  {
    id: "day7",
    title: "Day 7: Baguio You Will Be Missed!",
    summary: "Around 10 AM, we had our breakfast and began preparing for our journey back to Manila. There was a quiet sadness in the air as we packed our things—Baguio had captured our hearts with its cool weather, scenic views, and unforgettable memories.",
    image: "/d7.jpg"
  },
  
  {
    id: "day8",
    title: "Day 8: Departure",
    summary: "Welcomed by calm and peaceful bay of Subic and introduced to their advance facilities.",
    image: "/d8.jpg"
  },
];

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
        <h2 className="blog-heading">Educational Tour</h2>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div className="blog-links">
                <Link to={`/blog/${post.id}`} className="read-more-link">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


