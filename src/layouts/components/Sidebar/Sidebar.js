import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import { HomeIcon, ExploreIcon, FollowingIcon, FriendIcon, LiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Đề xuất" to={config.routes.home} icon={<HomeIcon />} />
                <MenuItem title="Khám phá" to={config.routes.explore} icon={<ExploreIcon />} />
                <MenuItem title="Đã follow" to={config.routes.following} icon={<FollowingIcon />} />
                <MenuItem title="Bạn bè" to={config.routes.friends} icon={<FriendIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    )

}

export default Sidebar;