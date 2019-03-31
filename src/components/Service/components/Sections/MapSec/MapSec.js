import React from 'react'
import './MapSec.less'
import './YMap.less'
import {YMaps, Map, GeoObject} from 'react-yandex-maps'

import mapIcon from '../../../../../img/icons/icon_map.png'

const MapSec = () => {
    const mapStyles = {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        backgroundColor: "rgb(229, 227, 223",
        opacity: 0.6
    }
    const point = [55.717355, 37.721175]
    return (
        <section className="sec-map js-sec-scroll">
            <YMaps version={2.1}>
                <Map defaultState={{ center: point, zoom: 17.46 }}
                     className="sec-map__back">
                    <GeoObject
                        geometry={{
                            type: 'Point',
                            coordinates: point,
                        }}
                        properties={{
                            iconContent: 'АвтоМагистр',
                        }}
                        options={{
                            iconShadow: true,
                            preset: 'islands#redAutoIcon',
                            iconImageHref: mapIcon,
                            draggable: false,
                        }}
                    />
                </Map>
            </YMaps >
            <div style={mapStyles} />
    <div className="sec-map__front">
        <div className="container">
            <div className="sec-map__pannel">
                <div className="sec-map__info">
                    <h4 className="sec-map__info-text">
                        г. Москва , Остаповский проезд, дом 17 <br />
                        (м.Волгоградский проспект, м.Текстильщики)
                    </h4>
                </div>
                <a className="sec-map__link" role="button">Схема проезда</a>
                <div className="sec-map__more">
                    <a className="btn btn_arrow-rt sec-map__more-btn" href="#">Контакты</a>
                </div>
            </div>
        </div>
    </div>
    </section>
)
}

export default MapSec


