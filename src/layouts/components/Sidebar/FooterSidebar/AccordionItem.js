import classNames from "classnames/bind";
import styles from './FooterSidebar.module.scss'

const cx = classNames.bind(styles)

function AccordionItem({ title, isActive, onClick, children }) {
    return (
        <div>
            <h4 onClick={onClick} className={cx('accordion-title', { active: isActive })}>{title}</h4>
            <div
                className={cx('accordion-content')}
                style={{
                    maxHeight: isActive ? '500px' : '0px',
                }}
            >
                {isActive && <div className={cx('content-inner')}>{children}</div>}
            </div>
        </div>

    );
}

export default AccordionItem;