import { forwardRef } from 'react';
import style from './Menu.module.scss';

export const Menu = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section ref={ref} className={style.menu_section}>
            <div className={style.menu_layout}>
                <div className={style.menu_content}>
                    <div className={style.menu_content_heading}>
                        <h2>Conoce nuestro delicioso Menú</h2>
                        <p>Seleccionamos granos de origen y los preparamos con el detalle que tu día merece.</p>
                    </div>
                    <div className={style.menu_wrapper}>
                        <div className={style.menu_list}>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-1.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Café americano</div>
                                        <div className={style.info_text}>
                                            <p>$35</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-2.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Latte clásico</div>
                                        <div className={style.info_text}>
                                            <p>$45</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-3.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Capuchino</div>
                                        <div className={style.info_text}>
                                            <p>$48</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-4.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Frappe</div>
                                        <div className={style.info_text}>
                                            <p>$60</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.menu_wrapper}>
                        <div className={style.menu_list}>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-5.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Sandwich de atún</div>
                                        <div className={style.info_text}>
                                            <p>$60</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-6.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Muffin de vainilla</div>
                                        <div className={style.info_text}>
                                            <p>$30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-7.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Yogur con fresa</div>
                                        <div className={style.info_text}>
                                            <p>$50</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.menu_item}>
                                <div className={style.menu_item_block}>
                                    <div className={style.image_wrapper}>
                                        <img src="/menu-items/menu-item-8.jpg" alt="" />
                                    </div>
                                    <div className={style.menu_info}>
                                        <div className={style.info_title}>Pan dulce</div>
                                        <div className={style.info_text}>
                                            <p>$25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})
