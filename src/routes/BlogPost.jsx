import { useParams } from 'react-router-dom';
import './Blog.css';
import React, { useEffect, useRef } from "react";

const blogPosts = [
  {
    id: "day1",
    title: "Day 1: Arrival and Orientation",
    image: "/d1-1.jpg",
    content: `
      I arrived at NAIA airport around 2 PM, feeling a mix of excitement and regret. It was my first time on an airplane, and the experience was absolutely fantastic—seeing the clouds from above and feeling the thrill of takeoff made it truly unforgettable. However, I felt a bit disheartened knowing I had missed the earlier part of the tour to Intramuros and Rizal Park due to my late arrival. Despite that, the DJM Tour staff were incredibly thoughtful and considerate. They welcomed us warmly at the airport and even handed out snacks to those of us who arrived late. Although we missed some of the historical highlights the Intramuros and Rizal Park , we were grateful to still join the group for the MOA tour later in the day.
    `
  },
  {
    id: "day2",
    title: "Day 2: Subic Tour",
    image: "/d2.jpg",
    content: `
      We tour around Subic Bay and I'm so amazed how peaceful the surroundings is. The place is rich in history. We were told that Subic Bay adopted the U.S rules and practices around, just like the "First Stop, First Go".
      
      It wasn't also governed by the Philipine Goverment but instead by the SBMA. Only Well off reside there, and there is also no public transportation. Subic has low crime rate and well guarded place as it have its own swat, forest ranger, and own harbor patrol.
    `
  },
  {
    id: "day3",
    title: "Day 3: Museum Tour",
    image: "/d3.jpg",
    content: `On the third day of our tour, we explored the rich cultural and historical heritage of the Philippines by visiting the Philippine National Museum and the Manuel Quezon Museum. At the National Museum, we marveled at centuries-old artifacts, intricate artworks, and fascinating exhibits that told the story of the country's past—from pre-colonial times to the present. Walking through its grand halls gave us a deeper appreciation of Filipino identity and creativity. Later, at the Manuel Quezon Museum, we learned about the life and legacy of the first President of the Philippine Commonwealth. His contributions to Philippine independence and governance were highlighted through personal memorabilia, photographs, and historical documents. It was an enriching day that allowed us to connect with the nation's roots and the remarkable figures who shaped its history.
    `
  },

  {
    id: "day4",
    title: "Day 4: Bangko Sentral ng Pilipinas and Hi-Tech Tour",
    image: "/d4.jpg",
    content: `On the fourth day of our tour, we visited the Bangko Sentral ng Pilipinas, where we had the rare opportunity to witness the intricate process of how money and gold are made and secured. Although we weren’t allowed to take any photos inside due to strict security protocols, the experience was incredibly informative and eye-opening. We learned about the steps involved in currency production, the importance of maintaining economic stability, and the role of the central bank in the country’s financial system. Seeing the actual machinery and processes behind money-making gave us a whole new appreciation for how much effort goes into safeguarding the nation’s economy
    
    Visit to a High-Tech Engineering Company
    In the latter part of the day, we toured a high-tech engineering company filled with cutting-edge projects and advanced machinery. The facility showcased various innovations related to both electrical and mechanical engineering, from automated systems to robotics and power-related technologies. We were amazed by the precision and complexity of the equipment, and we got to see how engineers work on real-world solutions in fields like manufacturing, energy, and automation. The experience sparked curiosity and excitement, especially for those of us interested in pursuing careers in engineering and technology.
    `
  },
  
  {
    id: "day5",
    title: "Day 5: Museum Tour",
    image: "/d5.jpg",
    content: `On the fifth day of our tour, we explored the operations behind the Light Rail Transit (LRT) system with a visit to the LRT station and its depot near Santolan. It was a fascinating experience as we observed how the trains work, where they are stored, and how they undergo maintenance and repairs to ensure passenger safety and efficiency. We saw the control rooms, maintenance facilities, and the technical processes that keep the trains running smoothly every day. One of the highlights was getting the chance to ride the LRT ourselves, traveling around the Santolan station area, which gave us a real feel of the daily commute and the importance of reliable public transportation in Metro Manila. The tour gave us a better understanding of how much planning and engineering go into maintaining such a massive transport system.
    `
  },

  {
    id: "day6",
    title: "Day 6: Baguio Tour",
    image: "/d6.jpg",
    content: `On the sixth day of our tour, we began an unforgettable journey as we traveled to Baguio around midnight. The night ride was smooth, peaceful, and filled with excitement—probably the best ride I’ve ever had. As the sun began to rise, we arrived in the cool mountain city, with our first stop at the beautiful Strawberry Farm, where we saw rows of fresh strawberries and even got to pick some ourselves. Next, we visited the Chinese Gold Bell, a serene and culturally rich spot that added a spiritual touch to our morning. Afterward, we checked in at our hotel and enjoyed a hearty breakfast to recharge before continuing our exploration.

    Our afternoon tour took us to several of Baguio’s most iconic landmarks. We visited the Philippine Military Academy (PMA), where we saw disciplined cadets and impressive military displays. Then we headed to The Mansion, the official summer residence of the Philippine president, followed by a breathtaking stop at Mine’s View Park, where we took in the scenic mountain views and enjoyed the local crafts and snacks. As evening came, we had a satisfying dinner, then capped the day with a relaxing night stroll. We visited SM Baguio, wandered through Burnham Park, and experienced the vibrant energy of the famous Baguio Night Market. It was a perfect end to an amazing day filled with nature, history, and culture.
    `
  },
  
  {
    id: "day7",
    title: "Day 7: Baguio You Will Be Missed!",
    image: "/d7.jpg",
    content: `On the seventh and final day of our tour, my roommates Allana, Lyrra, and I decided to take it slow and just rest in our hotel room instead of strolling around the city. After days of traveling and exploring, it felt good to simply relax and reflect on the amazing experiences we had. Around 10 AM, we had our breakfast and began preparing for our journey back to Manila. There was a quiet sadness in the air as we packed our things—Baguio had captured our hearts with its cool weather, scenic views, and unforgettable memories. The time we spent there felt too short, and we all wished we had a little more time to explore and enjoy. By 12 noon, we were on the road back to Manila, carrying with us the joy, learning, and bonds we made throughout the entire tour.
    `
  },

  {
    id: "day8",
    title: "Day 8: Goodbye Manila",
    image: "/d8.jpg",
    content: `On the eighth and final day of our tour, it was time to head back home to Zamboanga. There was a bittersweet feeling in the air—sadness that the journey was ending, but also gratitude for all the memories we had made. As we prepared to leave, we couldn't help but feel thankful to the amazing staff of DJM Travela and Tours, who took such good care of us throughout the trip, making everything smooth and enjoyable. On our way to NAIA, I took one last look at the towering buildings of Manila, a sight that had become familiar over the past days. It was a quiet moment of reflection—feeling both sad to leave and satisfied with the unforgettable experience we had been blessed with.
    `
  },


];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div className="blog-container"><h2>Blog post not found.</h2></div>;
  }

   // Scroll-triggered fade-in effect
   useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    const paragraphs = document.querySelectorAll(".fade-in");
    paragraphs.forEach(p => observer.observe(p));

    return () => observer.disconnect();
  }, []);

  if (!post) {
    return <div className="blog-container"><h2>Blog post not found.</h2></div>;
  }

  return (
    <section className="blog">
      <div className="page-container">
        {/* Images First */}
        <div className="blog-image-wrapper">
          {Array.isArray(post.image) ? (
            post.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Post ${post.id} img ${index + 1}`}
                className="blog-post-image"
              />
            ))
          ) : (
            <img
              src={post.image}
              alt={post.title}
              className="blog-post-image"
            />
          )}
        </div>
  
        {/* Title Below Image */}
        <h1 className="section-title">{post.title}</h1>
  
        {/* Content */}
        <div className="blog-post-content">
          {post.content.trim().split('\n').map((para, idx) => (
            <p key={idx} className="fade-in">{para.trim()}</p>
          ))}
        </div>
      </div>
    </section>
  );
  };

export default BlogPost;