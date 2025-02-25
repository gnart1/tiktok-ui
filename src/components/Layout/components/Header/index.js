import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/asset/images';
import styles from './Header.module.scss'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';



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

    const [searchResult, setSearchResult] = useState([])

    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

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
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Logo-Tiktok' />
                </div>

                <HeadLessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}>
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadLessTippy>


                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('current-user')}>
                            <>
                                <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
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
                            <img src='https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-1/409230331_1550777295733960_7475790569764296994_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=1XsIGiOBxt4Q7kNvgEnHhLK&_nc_ht=scontent.fhan18-1.fna&_nc_gid=AWjw2Wn4VWJJ33bDVtxjxS6&oh=00_AYAXa8JkYlp3r1yKz2acpoOLWznzzYYro1xf2hvmmI9__g&oe=67043F40' className={cx('user-avatar')} alt='avatar' />
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