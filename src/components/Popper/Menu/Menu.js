import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";

const cx = classNames.bind(styles)
const defaultFn = () => { }
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

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

    const handleBack = () => {
        setHistory(pre => pre.slice(0, pre.length - 1))
    }
    const renderResult = attrs => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {
                    history.length > 1 &&
                    <Header
                        title={current.title}
                        onBack={handleBack} />}
                <div className={cx('menu-body')}>{rerenderItems()}</div>
            </PopperWrapper>
        </div>
    );

    //reset to first page
    const handleReset = () => {
        setHistory((pre) => pre.slice(0, 1))
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 1000]}
            offset={[12, 8,]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
}
export default Menu;