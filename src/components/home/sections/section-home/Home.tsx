import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import style from './Home.module.scss';

export const Home = () => {

    const coffee = <FontAwesomeIcon icon={faMugHot} />

    return (
        <div className={style.overflow_hidden}>
            <section className={style.section_position}>
                <div className={style.layout_flex}>
                    <div className={style.banner_left}></div>
                    <div className={style.banner_right}></div>
                </div>
                <div className={style.layout_container}>
                    <div className={style.layout_content_flex}>
                        <div className={style.content_left_side}>
                            <div className={style.heading_card}>
                                <div className={style.heading_wrap}>
                                    <h1>El sorbo que completa tu día perfecto</h1>
                                </div>
                                <div className={style.text_wrap}>
                                    <p>Café de especialidad, sabores naturales y un espacio hecho para disfrutar sin prisa.</p>
                                </div>
                                <div className={style.button_header}>
                                    <button>Ver Menu</button>
                                </div>
                            </div>
                        </div>
                        <div className={style.content_right_side}>
                            <div className={style.inner_wrapper}>
                                <div className={style.banner_item_left}>
                                    <img src="/home-items/frappe-home-item-2.png" alt="" sizes="(max-width: 479px) 100vw, 458.765625px" />
                                </div>
                                <div className={style.banner_item}>
                                    <img src="/home-items/frappe-home-item-1.png" alt="" sizes="(max-width: 767px) 100vw, 482.125px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={style.banner}>
                <span>{coffee}</span>
                <h3>Disfruta un momento para ti, en un rincón donde el café sabe mejor</h3>
                <span>{coffee}</span>
            </div>
        </div>
    )
}
