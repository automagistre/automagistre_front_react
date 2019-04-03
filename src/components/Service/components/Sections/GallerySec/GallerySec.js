import React from 'react'
import './GallerySec.less'
import {companyAbout} from "../../../../../vars/company";

import Facts from "../Facts/Facts";

import Zoom from 'react-medium-image-zoom'
import './block_zoom-pop.less'

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


const GallerySec = () => {
    const IMG_DIR = '/images/sec-gallery/';
    return(
        <section className="sec-gallery js-sec-scroll">
            <div className="sec-gallery__row js-scroll-x">
                <div className="sec-gallery__col">
                    <ImageItem  size={100} imgSrc={`${IMG_DIR}work_01.jpg`} imgAlt="Автосервис"/>
                    <div className="sec-gallery__text sec-gallery__text_top-rt">
                        <h2 className="sec-gallery__title">{companyAbout.title}</h2>
                        <div className="sec-gallery__note">
                            {companyAbout.note}
                        </div>
                    </div>
                </div>
                <div className="sec-gallery__col">
                    <ImageItem  size={50} imgSrc={`${IMG_DIR}work_02.jpg`} imgAlt="Автосервис"/>
                    <ImageItem  size={50} imgSrc={`${IMG_DIR}work_03.jpg`} imgAlt="Автосервис"/>
                    <div className="sec-gallery__text sec-gallery__text_btm-rt">
                        <Facts theme="sec-gallery__facts"/>
                    </div>
                </div>
                <div className="sec-gallery__col">
                    <ImageItem  size={33} imgSrc={`${IMG_DIR}work_04.jpg`} imgAlt="Автосервис"/>
                    <ImageItem  size={67} imgSrc={`${IMG_DIR}work_05.jpg`} imgAlt="Автосервис"/>
                </div>
                <div className="sec-gallery__col">
                    <ImageItem  size={50} imgSrc={`${IMG_DIR}work_02.jpg`} imgAlt="Автосервис"/>
                    <ImageItem  size={50} imgSrc={`${IMG_DIR}work_03.jpg`} imgAlt="Автосервис"/>
                </div>
            </div>
        </section>
    )
}

export default GallerySec