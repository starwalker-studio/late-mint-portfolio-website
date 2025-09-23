import { useScrollDown } from '../../../hooks/useScrollDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useMobileScreen } from '../../../hooks/useMobileScreen';
import style from './Header.module.scss';

type TopBarProps = {
  onNavigate: (section: 'home' | 'about' | 'menu' | 'testimonials') => void;
}

export const Header = ({ onNavigate }: TopBarProps) => {

  const { isMobileScreen, handleClick, nav_transition } = useMobileScreen();
  const { scrolled, hidden, navbarEffects, navbarTransition } = useScrollDown();
  const list = <FontAwesomeIcon icon={faBars} />

  return (
    <>
      <motion.nav
        className={`${style.navbar} ${scrolled && style.navbar_scrolled} ${hidden && style.navbar_hidden}`}
        initial="initial"
        animate={hidden ? "hidden" : "visible"}
        variants={navbarEffects}
        transition={navbarTransition}>
        <div className={style.nav_container}>
          <div className={style.nav_wrapper}>
            <div className={style.a_nav_logo}>
              <img src="/logo/late-mint-logo.svg" alt="logo" onClick={() => onNavigate('home')}/>
            </div>
            {
              isMobileScreen() ?
                <>
                  <div className={style.mobile_icon}>
                    <span onClick={() => handleClick()}>{list}</span>
                  </div>
                </>
                :
                <>
                  <nav className={style.nav_menu}>
                    <ul>
                      <li onClick={() => onNavigate('about')}>Nosotros</li>
                      <li onClick={() => onNavigate('menu')}>Menú</li>
                      <li onClick={() => onNavigate('testimonials')}>Opiniones</li>
                    </ul>
                  </nav>
                  <div className={style.button_wrapper}>
                    <button>Contacto</button>
                  </div>
                </>
            }
          </div>
        </div>
      </motion.nav>
      {
        isMobileScreen() &&
        <div className={style.nav_overlay}>
          <nav className={style.nav_mobile} style={nav_transition}>
            <div className={style.nav_mobile_container}>
              <div className={style.display_pages}>
                <h2>Secciones</h2>
                <ul>
                  <li onClick={() => {
                    onNavigate('about')
                    handleClick()
                  }}><span><p>Nosotros</p></span></li>
                  <li onClick={() => {
                    onNavigate('menu')
                    handleClick()
                  }}><span><p>Menú</p></span></li>
                  <li onClick={() => {
                    onNavigate('testimonials')
                    handleClick()
                  }}><span><p>Opiniones</p></span></li>
                </ul>
                <div className={style.button_wrapper_mobile}>
                  <button onClick={() => handleClick()}>Cerrar Menú</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      }
    </>
  )
}
