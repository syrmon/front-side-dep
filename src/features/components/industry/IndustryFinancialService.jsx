/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import styles from './industry.module.css';
import IndustryHeaderDash from './IndustryHeaderDash';
import headerImagePng from './assets/img/maliyyeservisleri-header.png';
import sectionImagePng from './assets/img/maliyyeservisleri-section.png';
import groupItemImagePng1 from './assets/img/maliyyeservisleri-group-item-1.png';
import groupItemImagePng2 from './assets/img/maliyyeservisleri-group-item-2.png';
import Footer from './../../footer/Footer';
const IndustryFinancialService = () => {
    return (
        <div>
            <IndustryHeaderDash
                headerText={'SƏNAYE/MALİYYƏ SERVİSLƏRİ'}
                isHeader={true}
            />
            <div className={`${styles.container}`}>
                <section className={`${styles.header_image_container} d-flex `}>
                    <img src={headerImagePng} alt="" />
                </section>
                <section className={`d-flex direction-column`}>
                    <span className={`${styles.header_subtitle}`}>Sənaye</span>
                    <span className={`${styles.header_title}`}>
                        Maliyyə servisləri
                    </span>
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        Dünyanın ən böyük investisiya kateqoriyası olan daşınmaz
                        əmlak artıq şirkətlərin əvvəl düşündükləri kimi maliyyə
                        resurslarını təhlükəsiz qoruyacağı liman rolunu oynamır.
                        Texnologiyadakı dəyişikliklər, pandemiyanın təsiri və
                        insanların daşınmaz əmlakdan istifadəsində olan
                        dəyişikliklər industriyanın dinamikasının dəyişməsinə
                        səbəb olur, lakin bu sektor bu vaxta qıdır innovasiyada
                        geri qalıb.
                    </p>
                </section>

                <section
                    className={`${styles.services_section} d-flex direction-column align-center`}
                >
                    <p className={`${styles.header_subtitle}`}>Sənaye</p>
                    <p className={`${styles.services_title}`}>
                        Maliyyə servisləri konsaltinq xidmətlərimiz
                    </p>
                    <section className={`${styles.service_image_group} d-flex`}>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng1}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Yerli institutlardan və fondlardan maliyyələşmə
                                dəstəyi
                            </p>
                        </div>
                        <div className={`${styles.service_image_container}`}>
                            <img
                                className={`${styles.service_image}`}
                                src={groupItemImagePng2}
                                alt=""
                            />
                            <p className={`${styles.service_image_subtitle}`}>
                                Beynəlxalq institutlardan və fondlardan
                                maliyyələşmə dəstəyi
                            </p>
                        </div>
                    </section>
                </section>

                <section className={`${styles.section_image_container} d-flex`}>
                    <img src={sectionImagePng} alt="" />
                </section>
                <section className={`${styles.paragraph_section}`}>
                    <p>
                        TWC böyük yerli şirkətlərə, inkişaf etməkdə olan
                        şirkətlərə, institusional investorlara və individuallara
                        bizneslərinin nə qədər sağlam olmaqlarından asılı
                        olmayaraq kapital əldə etməkdə dəstək verir.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default IndustryFinancialService;
