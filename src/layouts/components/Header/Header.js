import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faLanguage, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '~/config'

import images from '~/asset/images';
import styles from './Header.module.scss'
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image'

import Search from '../Search';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'th',
                    title: 'ประเทศไทย(Tiếng Thái)'
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: '中国(Tiếng Trung)'
                },
                {
                    type: 'language',
                    code: 'ko',
                    title: '한국인(Tiếng Hàn)'
                },


            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    }
]
function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hienle'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]





    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo-Tiktok' />
                </div> */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt='Logo-Tiktok' />
                </Link>

                <Search />


                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        </div>
                    ) : (

                        <>
                            <Button text>Upload</Button>
                            <Button primary >Log in</Button>
                            {/* <Button rounded className={cx('custom-text')} >Get app</Button> */}
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src='https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/426337183_1866914863807453_2289062827612497101_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=FWIfvzz5pP8Q7kNvgH5Tdji&_nc_oc=AdkrK2YuDiAKBjojdTlBdgnXnckXNlHmC5-gxSiM0QQqtW5mwB1pkIoTSBs96dvbPNM&_nc_zt=23&_nc_ht=scontent.fhan19-1.fna&_nc_gid=6WWTyxalfvwAjUzsWO-p8Q&oh=00_AYGzm5xNrjDhhy4FgOXqljW8Zszn3-T0VhbJk97U53MOmg&oe=67E70AB4'
                                className={cx('user-avatar')}
                                alt='avatar'
                            //fallback='https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-1/426337183_1866914863807453_2289062827612497101_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WgpF1Q5WcCYQ7kNvgFgb_JT&_nc_oc=AdipNfgBdaP-82cS4Aa15DawdAkDBX6VLCy6ytoISopkNx3wuvT8xA0ALi_h9GX76D4&_nc_zt=24&_nc_ht=scontent.fhan19-1.fna&_nc_gid=AsCHVaKoCgW0eH8AUmStTA9&oh=00_AYDnyredpu4tVnfnIaJJj44cm-u4Xe08j23sXgZ_9yUbsA&oe=67C2FCF2'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}

                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;