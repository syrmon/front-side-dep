import React, { useState } from 'react';
import styles from './contact.module.css';
import arrow from './assets/img/arrow.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const canSubmit = [fullName, email, message].every(Boolean);

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <main className="mobile-padding">
            <section className={`${styles.map_numbers}`}>
                <div className={`${styles.map}`}></div>
                <div className={`${styles.number}`}>
                    <AnimationOnScroll animateIn="animate__zoomInDown">
                        <div>
                            <span>ƏLAQƏ</span>
                            <h2>
                                Bizimlə əlaqə saxlayın <br />
                                və ya ofisimizə yaxınlaşın
                            </h2>
                            <div className={`${styles.contact_informations}`}>
                                <div>
                                    <a href="mailto:info@thinkwise.az">
                                        info@thinkwise.az
                                    </a>{' '}
                                    <br />
                                    <a href="tel:+994 50 447 10 90">
                                        +994 50 447 10 90
                                    </a>{' '}
                                    <br />
                                    <a href="tel:+994 50 447 10 90">
                                        +994 50 447 10 90
                                    </a>
                                </div>

                                <p>
                                    Nobel prospekti 15, <br /> Azure Biznes
                                    Mərkəzi <br />
                                    Mərtəbə 17, Otaq 118
                                </p>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </section>
            <section className={`${styles.pic_form}`}>
                <div className={`${styles.pic}`}></div>
                <div className={`${styles.form}`}>
                    <form onSubmit={handleSubmit}>
                        <AnimationOnScroll animateIn="animate__zoomInDown">
                            <span>ƏLAQƏ</span>
                            <h2>
                                Müraciətinizi burada <br />
                                qeyd edə bilərsiniz
                            </h2>
                        </AnimationOnScroll>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            aria-labelledby="name"
                            required={true}
                            placeholder="Ad və Soyad*"
                            value={fullName}
                            pattern="(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
                            onChange={e => setFullName(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            aria-labelledby="email"
                            required={true}
                            placeholder="Email*"
                            value={email}
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <textarea
                            name="message"
                            id="message"
                            aria-labelledby="message"
                            required={true}
                            value={message}
                            placeholder={''}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <button disabled={!canSubmit}>
                            <AnimationOnScroll animateIn="animate__rubberBand">
                                <span>Müraciət et</span>
                                <img
                                    src={arrow}
                                    alt="button icon arrow right"
                                />
                            </AnimationOnScroll>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
