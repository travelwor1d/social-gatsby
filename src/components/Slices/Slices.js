/** @jsx jsx */
import { jsx } from "theme-ui"

import Img from "gatsby-image"

import { useState, useRef, useCallback } from "react"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function SectionImageGallery(sectionData) {
  const [activeSlide, slideCount] = useState(0)

  const slider = useRef()

  const next = useCallback(() => {
    slider.current.slickNext()
  }, [slider])

  const prev = useCallback(() => {
    slider.current.slickPrev()
  }, [slider])

  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: prev => slideCount(prev),
    afterChange: next => slideCount(next),
  }

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
      {activeSlide + 1}
      <Slider ref={slider} {...settings}>
        {sectionData.items.map((image, index) => (
          <Img
            key={index}
            fluid={image.image.localFile.childImageSharp.fluid}
          />
        ))}
      </Slider>
    </div>
  )
}

const Slices = ({ sectionData, sectionType }) => {
  switch (sectionType) {
    case "image_gallery":
      return <SectionImageGallery {...sectionData} />
    case "content":
      return "Content"
    default:
      return null
  }
}

export default Slices
