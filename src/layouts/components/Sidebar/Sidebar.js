import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import { HomeIcon, ExploreIcon, FollowingIcon, FriendIcon, LiveIcon, HomeActiveIcon, ExploreActiveIcon, FriendActiveIcon, FollowingActiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Đề xuất" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem title="Khám phá" to={config.routes.explore} icon={<ExploreIcon />} iconActive={<ExploreActiveIcon />} />
                <MenuItem title="Đã follow" to={config.routes.following} icon={<FollowingIcon />} iconActive={<FollowingActiveIcon />} />
                <MenuItem title="Bạn bè" to={config.routes.friends} icon={<FriendIcon />} iconActive={<FriendActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} iconActive={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label='Tài khoản được đề xuất' />
            {/* <SuggestedAccounts label='Tài khoản Đã follow' /> */}
        </aside>
    )

}

export default Sidebar;