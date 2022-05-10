import React from 'react';

const PaymentAbout = () => {
    const paData = [
        { src: '/img/house.png', title: 'Предложите ипотеку вашим клиентам', text: 'Рассчитывайте новые кредиты в нашем калькуляторе и выбирайте наилучшие предложения' },
        { src: '/img/union.png', title: 'Отправьте заявки и документы в банки', text: 'Наши единые анкеты и документы для всех банков помогут ускорить весь процесс оформления' },
        { src: '/img/like-shapes.png', title: 'Проведите ипотечные сделки', text: 'Когда сделка будет проведена, мы начисляем на ваш счет бонус (процент) от выданного кредита' },
        { src: '/img/card-pos.png', title: 'Получите выплату на ваш баланс', text: 'Дождитесь окончания месяца, и мы перечислим бонус на указанные вами реквизиты' }
    ]
    return (
        <div className="payment-about">
            {paData.map((item, index) =>
                <div className="payment-about__item" key={index}>
                    <div className="payment-about__icon-wrap">
                        <div className="payment-about__index">0{index + 1}</div>
                        <div className="payment-about__icon">
                            <img src={item.src} alt=""/>
                        </div>
                    </div>
                    <div className="payment-about__title">{item.title}</div>
                    <div className="payment-about__text">{item.text}</div>
                </div>
            )}
        </div>
    );
};

export default PaymentAbout;