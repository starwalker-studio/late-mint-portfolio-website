import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_background}>
        <div className={style.footer_layout}>
          <div className={style.footer_container}>
            <div className={style.footer_content}>
              <h2>Aviso legal</h2>
              <p>Este sitio es solo para fines demostrativos. <br />
                Late Mint es un proyecto ficticio desarrollado como parte de un portafolio creativo. <br />
                Sitio demo para cafetería/restaurante con enfoque en negocio minimalista.</p>
                <p>2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
