import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Container from './Container';

const blogPosts = [
  {
    title: "The Future Smart Home in Real Estate",
    para: "Smart home technology is changing the way we live—learn how it impacts property values and home life.",
    date: "2024-10-15",
  },
  {
    title: "Why Location Matters More Than Ever in 2024 ",
    para: "As remote work reshapes housing demand, picking the right location is key to maximizing your home’s value.",
    date: "2024-10-10",
  },
  {
    title: "How To Stage Your Home For a Quick Sale",
    para: "A well-staged home can sell faster and for more—discover the secrets to creating a buyer-friendly space.",
    date: "2024-10-05",
  },
];

const Blog = () => {
  return (
   <Container>
        <div className='py-10'><h1 className="text-5xl  text-center text-gray-900  pb-16'"><b>Read our Latest Blog Posts   </b></h1></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.para}</p>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className='flex items-center text-md justify-center pt-2 cursor-pointer'>Read More<IoIosArrowRoundForward size={22} /></p>
              </div>
            </div>
          ))}
        </div>
      
   </Container>
  );
};

export default Blog;