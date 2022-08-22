import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Carousel } from "flowbite-react";

const Slider = (): React.ReactElement => {
  const { carousel } = useStaticQuery(graphql`
    query {
      carousel: allDatoCmsPost(filter: { featured: { eq: true } }) {
        nodes {
          id
          title
          slug
          meta {
            createdAt
          }
          coverImage {
            url
            gatsbyImageData(
              width: 980
              placeholder: BLURRED
              forceBlurhash: false
              imgixParams: { invert: false }
            )
          }
        }
      }
    }
  `);
  // const [slideIndex, setSlideIndex] = useState(0);

  // const nextSlide = () => {
  //   if (slideIndex !== carousel.nodes.length) {
  //     setSlideIndex(slideIndex + 1);
  //   } else if (slideIndex === carousel.nodes.length) {
  //     setSlideIndex(1);
  //   }
  // };
  //
  // const prevSlide = () => {
  //   if (slideIndex !== 1) {
  //     setSlideIndex(slideIndex - 1);
  //   } else if (slideIndex === 1) {
  //     setSlideIndex(carousel.nodes.length);
  //   }
  // };

  return (
    <div className="md:h-[340px] lg:h-[551px] md:w-[692px] lg:w-[980px] mx-auto">
      <h1 className="text-2xl md:text-3xl md:text-4xl font-eina font-bold text-white pt-20 pb-8">
        Featured Stories
      </h1>
      <Carousel slide={false} indicators={false}>
        {carousel.nodes.map((item: any) => (
            <div key={item.id} className="relative">
            <GatsbyImage key={item.id} alt={item.title} image={item.coverImage.gatsbyImageData} />
            <h1 className='absolute text-white text-[40px] lg:max-w-[900px] mx-auto bottom-16 ml-8'>{item.title}</h1>
            </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
