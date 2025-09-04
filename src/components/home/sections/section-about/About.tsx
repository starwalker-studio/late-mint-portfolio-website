import style from './About.module.scss';

export const About = () => {
  return (
    <section>
      <div className={style.about_container}>
        <div className={style.about_grid}>
          <div className={style.about_grid_imgs}>
            <div className={style.about_img}>
              <img src="/about-items/about-item-1.jpg" alt="" />
            </div>
            <div className={style.about_img}>
              <img src="/about-items/about-item-2.jpg" alt="" />
            </div>
          </div>
          <div className={style.about_grid_info}>
            <h1>Una idea simple: <br /> café + calma.</h1>
            <p>Late Mint nace del deseo de crear un lugar donde el café no solo sea delicioso, sino también parte de una experiencia consciente y tranquila. Nos inspiramos en el aroma de los tostados suaves, en los detalles verdes que decoran nuestro local, y en esa menta simbólica que refresca, equilibra y renueva.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
