import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)
function Menu({ children, items = [] }) {

    const rerenderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }
    return (
        <Tippy
            interactive
            delay={[0, 5000]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {rerenderItems()}
                    </PopperWrapper>
                </div>
            )}>
            {children}
        </Tippy>
    );
}

export default Menu;