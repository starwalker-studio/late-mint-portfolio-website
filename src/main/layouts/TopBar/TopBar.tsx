import { useScrollDown } from '../../../hooks/useScrollDown';
import { motion } from 'framer-motion';
import style from './TopBar.module.scss';

type TopBarProps = {
  onNavigate: (section: 'about' | 'menu' | 'services' | 'stories') => void;
}

export const TopBar = ({ onNavigate }: TopBarProps) => {

  const { scrolled, hidden, navbarEffects, navbarTransition } = useScrollDown();

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
          </div>
        </div>
      </motion.nav>
    </>
  )
}
