import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles)
const defaultFn = () => { }
function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const rerenderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(pre => [...pre, item.children])
                } else {
                    onChange(item)
                }
            }} />
        })
    }
    return (
        <Tippy
            interactive
            delay={[0, 1000]}
            offset={[12, 8,]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {
                            history.length > 1 && <Header title="Language" onBack={() => {
                                setHistory(pre => pre.slice(0, pre.length - 1))
                            }} />}
                        {rerenderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;