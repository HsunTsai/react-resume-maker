import React, { useContext, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
import { Spin } from 'antd';
// import classNames from 'classnames';
import { ReducerContext } from '../../ReduxIntlProvider';
import { getResumeData } from './homeAction';
import Banner from './components/banner/Banner';

import './home.scss';

const Home = () => {
	const [state, dispatch] = useContext(ReducerContext);
	const { resumeData } = state.home;

	useEffect(() => {
		getResumeData({ dispatch });
	}, []);

	return (
		<Spin spinning={!resumeData} size="large">
			<div className="home">
				{/* <FormattedMessage id="superHello" values={{ someoneName: 'Hsun.Tsai' }} /> */}
				<Banner data={{ title: 'Tsai Hsun', subTitle: 'Seinor Software Developer', avatar: '' }} />
				{/* <Avatar
					className="home__avatar"
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
				/> */}
			</div>
		</Spin>
	);
};

export default Home;
