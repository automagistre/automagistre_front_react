import React, {Component} from 'react'
import './SelectModel.less'


import Slider from 'react-slick'
import {carManufactures} from "../../../vars/manufactures";
import {services} from "../../../vars/company";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {applyMiddleware as dispatch} from "redux";
import {setManufacture} from "../../../store/actions/serviceActions";

function CustomArrow(props) {
    const { className, onClick } = props;
    return (
        <button type='button' className={className} onClick={onClick} />
    );
}

class SelectModel extends Component {
    carManufactures = carManufactures
    services = services

    renderServices = links => links.map((value , key) =>{
        return (
            <NavLink to={`${value.url}/${this.props.manufacture}`} className="btn btn_shmatn sec-start__btn" style={ {display: "block", margin: "40px 0"}} key={key} href="#">
                <i className={value.icon} />
                {value.name}
            </NavLink>
        )
    } )
    setManufacture = manufacture => {
        this.props.setManufacture(manufacture)
        this.props.friezeChoiceToggle()

    }
    renderCarBlock = cars => cars.map((value, key) => {
        let cls = value.cls
        return (
            <div className={`sec-start__slide st-${cls}`} key={key}>
                <div className={`sec-start__slide-logo st-${cls}__logo`} />
                <div className={`sec-start__slide-car st-${cls}__car`}>
                    <div className={`sec-start__slide-wheel st-${cls}__wheel-lt`} />
                    <div className={`sec-start__slide-wheel st-${cls}__wheel-rt`} />
                    <div className="sec-start__slide-btns">
                        {this.renderServices(this.services)}
                    </div>
                </div>
                <div className="sec-start__slide-btm">
                    <button className="btn btn_big sec-start__slide-btn" onClick={()=> this.setManufacture(value.name)}>Выбрать {value.name}</button>
                </div>
            </div>
        )
    })

    renderNavBlock = cars => {
        let brands = cars.map((value, key) => {
            let cls = "sec-start__nav-link icon-" + value.cls
            return (
                <button className={cls} key={key} onClick={ () => this.slider.slickGoTo(key)}/>
            )
        })
        brands.push(
                <NavLink className="sec-start__nav-link icon-all" key={brands.length + 1} to="/all_brands">
                    <div className="sec-start__nav-tooltip" data-text="Японские и&nbsp;корейские машины"/>
                </NavLink>
        )
        return brands
    }

    render() {
        const slickOptions = {
            className: "sec-start__slider",
            arrows: true,
            dots: false,
            infinite: true,
            speed: 0,
            fade: true,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <CustomArrow className='slick-arrow slick-prev'/>,
            nextArrow: <CustomArrow className='slick-arrow slick-next'/>,
            responsive: [
                { breakpoint: 768, settings: { arrows: false } }
            ],
            // beforeChange: (current, next) => this.setState({ activeSlide: next })
        }
        let cls = "sec-start__select "
        if (this.props.frieze) {
            cls += "is-frozen"
        }
        return (
                <div className="sec-start__body">
                        <div className={cls}>
                        <button className="btn btn_gray btn_arrow-lt sec-start__back"
                           onClick={this.props.friezeChoiceToggle}>
                            Назад
                        </button>
                        <h1 className="sec-start__title">Выберите <br /> интересующее направление:</h1>
                        <Slider  {...slickOptions}
                                ref={slider => (this.slider = slider)}>
                            {this.renderCarBlock(this.carManufactures)}
                        </Slider>
                        <nav className="sec-start__nav">
                            {this.renderNavBlock(this.carManufactures)}
                        </nav>
                    </div>
                </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        manufacture: store.service.manufacture
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setManufacture: manufacture => dispatch(setManufacture(manufacture))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectModel)