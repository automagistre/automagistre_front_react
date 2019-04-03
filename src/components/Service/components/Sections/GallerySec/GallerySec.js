import React from 'react'
import './GallerySec.less'
import {companyAbout} from "../../../../../vars/company";

import Facts from "../Facts/Facts";
import ImageItem from "./ImageItem/ImageItem";



class GallerySec extends React.Component {
    IMG_DIR = '/images/sec-gallery/';

    render() {
        return(
            <section className="sec-gallery js-sec-scroll">
                <div className="sec-gallery__row js-scroll-x">
                    <div className="sec-gallery__col">
                        <ImageItem  size={100} imgSrc={`${this.IMG_DIR}work_01.jpg`} imgAlt="Автосервис"/>
                        <div className="sec-gallery__text sec-gallery__text_top-rt">
                            <h2 className="sec-gallery__title">{companyAbout.title}</h2>
                            <div className="sec-gallery__note">
                                {companyAbout.note}
                            </div>
                        </div>
                    </div>
                    <div className="sec-gallery__col">
                        <ImageItem  size={50} imgSrc={`${this.IMG_DIR}work_02.jpg`} imgAlt="Автосервис"/>
                        <ImageItem  size={50} imgSrc={`${this.IMG_DIR}work_03.jpg`} imgAlt="Автосервис"/>
                        <div className="sec-gallery__text sec-gallery__text_btm-rt">
                            <Facts theme="sec-gallery__facts"/>
                        </div>
                    </div>
                    <div className="sec-gallery__col">
                        <ImageItem  size={33} imgSrc={`${this.IMG_DIR}work_04.jpg`} imgAlt="Автосервис"/>
                        <ImageItem  size={67} imgSrc={`${this.IMG_DIR}work_05.jpg`} imgAlt="Автосервис"/>
                    </div>
                    <div className="sec-gallery__col">
                        <ImageItem  size={50} imgSrc={`${this.IMG_DIR}work_02.jpg`} imgAlt="Автосервис"/>
                        <ImageItem  size={50} imgSrc={`${this.IMG_DIR}work_03.jpg`} imgAlt="Автосервис"/>
                    </div>
                </div>
            </section>
        )
    }


}

export default GallerySec