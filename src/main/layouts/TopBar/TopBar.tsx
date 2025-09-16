import { useScrollDown } from '../../../hooks/useScrollDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import { useMobileScreen } from '../../../hooks/useMobileScreen';
import style from './TopBar.module.scss';

type TopBarProps = {
  onNavigate: (section: 'about' | 'menu' | 'services' | 'stories') => void;
}

export const TopBar = ({ onNavigate }: TopBarProps) => {

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
            <a href="/" className={style.a_nav_logo}>
              <img src="/logo/late-mint-logo.svg" alt="logo" />
            </a>
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
                      <li onClick={() => onNavigate('menu')}>Menu</li>
                      <li onClick={() => onNavigate('services')}>Servicios</li>
                      <li onClick={() => onNavigate('stories')}>Testimonios</li>
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
                    handleClick()
                  }}><span><p>Propiedades</p></span></li>
                  <li onClick={() => {
                    onNavigate('services')
                    handleClick()
                  }}><span><p>Servicios</p></span></li>
                  <li onClick={() => {
                    onNavigate('stories')
                    handleClick()
                  }}><span><p>Testimonios</p></span></li>
                </ul>
                <div className={style.button_wrapper_mobile}>
                  <button>Contacto</button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      }
    </>
  )
}
