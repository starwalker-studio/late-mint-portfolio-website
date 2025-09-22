import { forwardRef } from 'react';
import style from './WPlace.module.scss';

export const WPlace = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={style.welcome_section}>
            <div className={style.welcome_container}>
                <div className={style.content_wrapper}>
                    <div className={style.welcome_place}>
                        <div className={style.welcome_heading}>
                            <h2>Bienvenido a un lugar donde el sabor, la calma y el diseño se mezclan en cada taza.</h2>
                        </div>
                        <div className={style.img_wrap}>
                            <img src="/welcome-place/place-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className={style.welcome_place}>
                        <div className={style.img_wrap}>
                            <img src="/welcome-place/place-2.jpg" alt="" />
                        </div>
                        <div className={style.welcome_text}>
                            <p>Una pausa fresca en el ritmo de la ciudad.</p>
                            En Late Mint nos apasiona el café, pero también los espacios que invitan a quedarte. Nuestro concepto combina el sabor del café de especialidad con un ambiente limpio, verde y relajado. Aquí, cada sorbo cuenta y cada rincón tiene su propio respiro.
                            Descubre un nuevo clásico: café con frescura.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
