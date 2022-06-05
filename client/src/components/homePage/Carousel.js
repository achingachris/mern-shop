import React from 'react'

const Carousel = () => {
  return (
    <div className='container'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div
            className='carousel-item active'
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/RCAhiGJsUUE/1920x1080")',
            }}
          >
            <div className='carousel-caption'>
              <h5>airShop Next</h5>
              <p>
                The Next Shop, but Online
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/wfh8dDlNFOk/1920x1080")',
            }}
          >
            <div className='carousel-caption'>
              <h5>React Frontend</h5>
              <p>
                Built on reactjs to make it perfect
              </p>
            </div>
          </div>
          <div
            className='carousel-item'
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/lHGeqh3XhRY/1920x1080")',
            }}
          >
            <div className='carousel-caption'>
              <h5>Express</h5>
              <p>
                MERN stacked at its best
              </p>
            </div>
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
