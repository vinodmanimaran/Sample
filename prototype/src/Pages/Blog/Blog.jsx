import React from 'react';
import './Blog.css';
import { Card } from 'react-bootstrap'; // Assuming you're using Bootstrap for Card

// import Header from '../../Components/Header/Header';
// import Footer from '../../Components/Footer/Footer';
import blog1 from '../../Assets/blog/blog-image.jpg'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Blog = () => {
    


    const bloginfo = [
        {
          blogTitle: "Navigating Wellness: A Comprehensive Guide to Healthy Living",
          blogImg: blog1,
          blogDesc: "Embark on a journey to holistic well-being as we explore the intricacies of maintaining a healthy lifestyle. From nutritional tips to fitness routines, this comprehensive guide covers everything you need to know about navigating the path to wellness. Discover the power of small, positive changes that can have a lasting impact on your overall health and vitality.",
          category: "Wellness",
        },
        {
          blogTitle: "Behind the Scenes: Unveiling the Everyday Heroes of Our Hospital",
          blogImg: blog1,
          blogDesc: "Step behind the curtain and witness the unsung heroes who work tirelessly in the heart of our hospital. Through poignant stories and remarkable anecdotes, this blog sheds light on the dedication and sacrifices made by healthcare professionals. Get an intimate glimpse into the daily lives of these heroes as they navigate challenges and provide unwavering support to those in need.",
          category: "Healthcare Heroes",
        },
        {
          blogTitle: "Innovations in Healthcare: Embracing the Future of Medicine",
          blogImg: blog1,
          blogDesc: "Explore the cutting-edge advancements shaping the future of healthcare. From revolutionary treatments to groundbreaking technologies, this blog delves into the innovations that are redefining the medical landscape. Join us on a journey of discovery as we explore how these advancements are improving patient outcomes and revolutionizing the delivery of healthcare services.",
          category: "Healthcare Innovation",
        },
        {
          blogTitle: "Patient Stories: Inspiring Journeys of Triumph and Recovery",
          blogImg: blog1,
          blogDesc: "Experience the resilience of the human spirit through inspiring stories of triumph and recovery. In this blog, we share the powerful narratives of individuals who have faced adversity with courage and determination. These patient stories serve as beacons of hope, illustrating the transformative impact of perseverance and the support of healthcare communities.",
          category: "Patient Stories",
        },
        {
          blogTitle: "Mental Health Matters: Breaking the Stigma Surrounding Mental Well-being",
          blogImg: blog1,
          blogDesc: "Challenge the stigma surrounding mental health as we delve into the importance of emotional well-being. Through thoughtful discussions and expert insights, this blog aims to foster a greater understanding of mental health issues. Discover strategies for self-care, coping mechanisms, and ways to support those navigating the complex landscape of mental well-being.",
          category: "Mental Health",
        },
        {
          blogTitle: "Women's Health Corner: Empowering Women through Knowledge",
          blogImg: blog1,
          blogDesc: "Empowerment begins with knowledge. Explore a dedicated space for women's health, where we discuss a range of topics from reproductive health to wellness strategies tailored for women. This blog aims to provide valuable insights, debunk myths, and encourage open conversations about the unique health considerations that women face throughout their lives.",
          category: "Women's Health",
        },
        {
            blogTitle: "Pediatric Perspectives: A Peek into Child Health and Development",
            blogImg: blog1,
            blogDesc: "Embark on a heartwarming journey into the world of child health and development. From the wonders of early milestones to navigating common pediatric concerns, this blog provides insights for parents and caregivers alike. Learn about the latest in pediatric medicine, developmental psychology, and valuable tips to foster a healthy and happy childhood.",
            category: "Pediatric Health",
          },
          {
            blogTitle: "The Science of Healing: Exploring Medical Breakthroughs",
            blogImg: blog1,
            blogDesc: "Dive into the realm of medical breakthroughs that are transforming the landscape of healthcare. This blog explores cutting-edge scientific discoveries, innovative treatments, and breakthrough technologies that promise to revolutionize the way we approach healing. Stay informed about the latest advancements and their potential impact on improving patient outcomes.",
            category: "Medical Breakthroughs",
          },
          {
            blogTitle: "Emergency Preparedness: Safeguarding Your Health in Critical Times",
            blogImg: blog1,
            blogDesc: "In uncertain times, preparedness is key. This blog focuses on essential strategies for safeguarding your health during emergencies. From natural disasters to global health crises, discover practical tips, emergency preparedness plans, and resources to ensure you and your loved ones are well-equipped to face critical situations with resilience and readiness.",
            category: "Emergency Preparedness",
          },
          {
            blogTitle: "Healthy Habits 101: Small Changes, Big Impact on Your Well-being",
            blogImg: blog1,
            blogDesc: "Transform your lifestyle with simple yet powerful healthy habits. This blog is your guide to making small changes that yield significant impacts on your overall well-being. From nutrition and fitness tips to mindfulness practices, explore a holistic approach to health that empowers you to cultivate sustainable habits for a happier and healthier life.",
            category: "Healthy Habits",
          },

          {
            blogTitle: "Infection Prevention: Safeguarding Patients and Healthcare Workers",
            blogImg: blog1,
            blogDesc: "Delve into the crucial world of infection prevention within hospital settings. This blog explores the rigorous protocols and advanced technologies employed to safeguard both patients and healthcare workers. Learn about the latest strategies, best practices, and innovative solutions that hospitals implement to maintain a clean and safe environment for optimal patient care.",
            category: "Healthcare Protocols",
          },
          {
            blogTitle: "Empathy in Healthcare: Nurturing the Human Connection",
            blogImg: blog1,
            blogDesc: "Discover the profound impact of empathy in the healthcare profession. This blog explores the importance of fostering a strong human connection between healthcare providers and patients. Through real-life stories and insightful discussions, gain a deeper understanding of how empathy enhances the patient experience and contributes to better outcomes in hospital care.",
            category: "Patient-Centered Care",
          }
          
      ];
      
      
      

    return (
        <>
            {/* <Header /> */}
            {/* <Header/> */}
            <main>
                <div className='blog'>
                    <div className='blog_header'  >
                        <p className='blog_title'>Blogs</p>
                        {/* <img src={blogheader} alt="blogheader" /> */}
                    </div>

                    <div className='blogs'>
                    {bloginfo.map((blog, index) => (
                        <Card key={index} className='blog_card' style={{border:"1px solid black"}}>
                            <div className='blog_img'>
        <p className='blog_img_category_content blog_img_category' style={{ color: "white" }}>{blog.category}</p>
    <img src={blog.blogImg} alt="blogimage" className='blog_image' loading='lazy' />
</div>

                                       <Card.Body>
                             <Link to="/singleblog" style={{textDecoration:"none",color:"#336699"}}>  <h2 className='blog-title'>{blog.blogTitle}</h2></Link> 
                                <div className='blog_content'>
                                    <p>{blog.blogDesc}</p>
                                </div>
                                <div className='read-more'>
                                   <Link className='link' to="/"> <p style={{color:"#DC143C"}}>Read More <FiArrowRight/> </p></Link>
                                </div>
                            </Card.Body>
                        </Card>
                        
                    ))}
                    </div>
                    
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Blog;
