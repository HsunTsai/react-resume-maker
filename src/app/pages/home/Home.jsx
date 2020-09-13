import React, { useContext, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
import { Spin } from 'antd';
// import classNames from 'classnames';
import { ReducerContext } from '../../ReduxIntlProvider';
import { getResumeData } from './homeAction';
import Banner from './components/banner/Banner';
import TimeLine from './components/timeLine/TimeLine';

import './home.scss';

const Home = () => {
	const [state, dispatch] = useContext(ReducerContext);
	const { resumeData } = state.home;

	useEffect(() => {
		getResumeData({ dispatch });
	}, []);

	const renderCards = cardItem => {
		if (!(cardItem && cardItem.type)) return null;
		const { type, data, half } = cardItem;
		switch (type) {
			case 'banner':
				return <Banner data={data} />;
			case 'timeLine':
				return <TimeLine data={data} half={half} />;
			default:
				return null;
		}
	};

	return (
		<Spin spinning={!resumeData} size="large">
			<div className="home">
				{/* <FormattedMessage id="superHello" values={{ someoneName: 'Hsun.Tsai' }} /> */}
				{resumeData &&
					Array.isArray(resumeData.cards) &&
					resumeData.cards.map(cardItem => renderCards(cardItem))}
				{/* <Avatar
					className="home__avatar"
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
				/> */}
			</div>
		</Spin>
	);
};

export default Home;
