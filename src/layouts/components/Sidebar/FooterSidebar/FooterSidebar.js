import classNames from "classnames/bind";
import styles from './FooterSidebar.module.scss'
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const cx = classNames.bind(styles)

function FooterSidebar() {

    const [activeSection, setActiveSection] = useState(null)

    const toggleSection = (key) => {
        setActiveSection(activeSection === key ? null : key)
    }
    return (
        <div className={cx('wrapper')}>
            <AccordionItem
                title="Công ty"
                isActive={activeSection === "company"}
                onClick={() => toggleSection('company')}
            >
                <div>
                    <div>
                        <a href="/about">Giới thiệu</a>
                        <a href="/news">Bảng tin</a>
                    </div>
                    <div>
                        <a href="/contact">Liên hệ</a>
                        <a href="/careers">Sự nghiệp</a>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem
                title="Chương trình"
                isActive={activeSection === "program"}
                onClick={() => toggleSection('program')}
            >
                <div>
                    <div>
                        <a href="/">TikTok for Good</a>
                        <a href="/">Quảng cáo</a>
                    </div>
                    <div><a href="/">TikTok LIVE Creator Networks</a></div>
                    <div>
                        <a href="/">Developers</a>
                        <a href="/">Minh bạch</a>
                    </div>
                    <div><a href="/">Phần thưởng trên TikTok</a></div>
                    <div><a href="/">TikTok Embeds</a></div>
                </div>
            </AccordionItem>

            <AccordionItem
                title="Điều khoản và chính sách"
                isActive={activeSection === "terms"}
                onClick={() => toggleSection('terms')}
            >
                <div>

                    <div>
                        <a href="/">Trợ giúp</a>
                        <a href="/">An toàn</a>
                        <a href="/">Điều khoản</a>
                    </div>
                    <div><a href="/">Chính sách Quyền riêng tư</a></div>
                    <div>
                        <a href="/">Accessibility</a>
                    </div>
                    <div><a href="/">Trung tâm quyền riêng tư</a></div>
                    <div><a href="/">Creator Academy</a></div>
                    <div><a href="/">Hướng dẫn cộng đồng</a></div>
                </div>
            </AccordionItem>

            <span>© 2025 TikTok</span>
        </div>
    );
}

export default FooterSidebar;