import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import { GithubOutlined } from '@ant-design/icons';
import bannerDefaultImage from './bannerDefaultImage.jpg';

import './banner.scss';

const Banner = ({ data }) => {
	const { title, subTitle } = data || {};
	return (
		<div className="banner">
			<img className="banner__background" src={bannerDefaultImage} alt="" />
			<div className="banner__intro">
				<Avatar
					className="banner__intro-avatar"
					shape="square"
					icon={<GithubOutlined style={{ fontSize: 90 }} />}
				/>
				<div className="banner__intro-desc">
					<div className="banner__intro-desc-title">{title}</div>
					<div className="banner__intro-desc-subtitle">{subTitle}</div>
				</div>
			</div>
		</div>
	);
};

Banner.defaultProps = {
	data: null,
};

Banner.propTypes = {
	data: PropTypes.objectOf(PropTypes.any),
};

export default Banner;
