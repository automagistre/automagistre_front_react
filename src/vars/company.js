import Service from "../components/Service/Service";
import React from 'react'
export const companyNameRu = 'Автомагистр';

export const companyContacts = {
    phone : '+7 (495) 984 81 82',
    phoneLink : '+74959848182',
    email : 'info@automagistre.ru',
    starWork: '9:00',
    endWork: '23:00'
};

export const companyAbout = {
    title: 'Наш автосервис',
    note:' Сервисный центр «Автомагистр» окажет помощь в проведении автомобильного\n' +
'            ремонта любой сложности, за проведение которого придётся заплатить\n' +
'            совсем недорого. Понимая, как трудно найти качественный автосервис в\n' +
'            Москве, мы готовы взяться за любую модель, но отдаем предпочтение\n' +
'            японским.'
}


export const services = [
    {
        name: 'Автосервис в москве',
        link: 'service',
        icon: 'icon-gear',
        url:  'service',
        visible: true,
        component: props => <Service {...props}/>
    },
    {
        name: 'Магазин запчастей',
        link: 'market',
        icon: 'icon-belt',
        url:  'market',
        visible: true,
        component: props => <Service {...props}/>
    }
]

export const confidentialCheckBox = 'Lorem ipsum dolor sit amet, consec tetur adipisi cing elit At, exerci tati onem.'