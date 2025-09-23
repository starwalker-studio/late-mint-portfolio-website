import { forwardRef } from 'react';
import style from './Testimonials.module.scss';

export const Testimonials = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref}>
            <div className={style.section_container}>
                <div className={style.section_content}>
                    <div className={style.section_heading}>
                        <h2>Opiniones de nuestros clientes</h2>
                    </div>
                    <div className={style.testimonial_grid}>
                        <div className={style.testimonial_column}>
                            <div className={style.testimonial_img}>
                                <img src="/testimonials-pics/testimonial-1.jpg" alt="" />
                            </div>
                            <div className={style.testimonial_block}>
                                <div className={style.testimonial_block_content}>
                                    <p>“El Cold Mint Latte es algo que no sabía que necesitaba en mi vida. Refrescante y delicioso.”</p>
                                    <div className={style.client_name}>– Mariana R.</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.testimonial_column}>
                            <div className={style.testimonial_block}>
                                <div className={style.testimonial_block_content}>
                                    <p>“Un lugar tranquilo, con buena música y excelente café. Ideal para leer o trabajar un rato.”</p>
                                    <div className={style.client_name}>– Diego L.</div>
                                </div>
                            </div>
                            <div className={style.testimonial_img}>
                                <img src="/testimonials-pics/testimonial-2.jpg" alt="" />
                            </div>
                        </div>
                        <div className={style.testimonial_column}>
                            <div className={style.testimonial_img}>
                                <img src="/testimonials-pics/testimonial-3.jpg" alt="" />
                            </div>
                            <div className={style.testimonial_block}>
                                <div className={style.testimonial_block_content}>
                                    <p>“Me encantó el enfoque en ingredientes frescos y el espacio verde. Es mi nueva cafetería favorita.”</p>
                                    <div className={style.client_name}>– Sofía G.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
