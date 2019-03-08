import React from 'react'

import Zoom from 'react-medium-image-zoom'
import '../block_zoom-pop.less'

const ImageItem = props => {
    const clsImgSize = 'sec-gallery__cell-' + props.size;
    return(
        <div className={clsImgSize}>
            <Zoom image={{
                      src: props.imgSrc,
                      alt: props.imgAlt,
                      className: 'sec-gallery__img',
                  }}
                  zoomImage={{
                      alt: props.imgAlt,
                      className: 'sec-gallery__img zoom-img',
                  }}
                  defaultStyles={{
                      zoomImage:{
                          cursor: "pointer",
                      },
                      image:{
                          cursor: "pointer"
                      },
                      overlay:{
                          opacity: 0.9
                      }
                  }}
            />
        </div>
    )
};


export default ImageItem