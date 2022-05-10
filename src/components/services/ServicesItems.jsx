import React from 'react';
import IconService from "../icons/IconService";

const ServicesItems = () => {
    const services = [
            { name: 'Действительность паспорта гражданина РФ', link: 'services.fms.gov.ru'},
            { name: 'Соответствие паспорта и адреса регистрации', link: 'services.fms.gov.ru'},
            { name: 'Узнать ИНН физлица', link: 'service.nalog.ru'},
            { name: 'Проверить корректность ИНН', link: 'egrul.ru'},
            { name: 'Проверить СНИЛС', link: 'pfrf.ru'},
            { name: 'Действительность документов об образовании', link: 'obrnadzor.gov.ru'},
            { name: 'Действительность водительского удостоверения', link: 'gibdd.ru'},
            { name: 'Действительность разрешений на работу и патентов', link: 'services.fms.gov.ru'},
            { name: 'Узнать ИНН ыизлица', link: 'service.nalog.ru'},
            { name: 'Проверка доверенностей по реквизитам', link: 'services.fms.gov.ru'},
            { name: 'Действительность приглашений на въезд в РФ', link: 'services.fms.gov.ru'},
            { name: 'Узнать ИНН физлица', link: 'service.nalog.ru'},
            { name: 'Действительность паспорта гражданина РФ', link: 'services.fms.gov.ru'},
        ]
    return (
        <div className="services-items__wrap">
            {services.map((service, index) =>
                <div className="services-items__item" key={index}>
                    <div className="services-items__icon-wrapper">
                        <div className="services-items__icon">
                            <IconService/>
                        </div>
                    </div>
                    <div className="services-items__name">{service.name}</div>
                    <div className="services-items__link">
                        <a href={service.link}>{service.link}</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesItems;