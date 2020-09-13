import React from 'react';
import { Timeline } from 'antd';
import PropTypes from 'prop-types';
import { FieldTimeOutlined } from '@ant-design/icons';
import Card from '../card/Card';

const TimeLine = ({ data, half }) => {
	console.log('timeline data', data);
	// const { half } = data || {};
	return (
		<Card title="經歷" icon={<FieldTimeOutlined />} half={half}>
			<Timeline>
				<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item color="red">
					<p>Solve initial network problems 1</p>
					<p>Solve initial network problems 2</p>
					<p>Solve initial network problems 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item>
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item color="gray">
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
				<Timeline.Item color="gray">
					<p>Technical testing 1</p>
					<p>Technical testing 2</p>
					<p>Technical testing 3 2015-09-01</p>
				</Timeline.Item>
			</Timeline>
		</Card>
	);
};

TimeLine.defaultProps = {
	data: null,
	half: false,
};

TimeLine.propTypes = {
	data: PropTypes.arrayOf(PropTypes.any),
	half: PropTypes.bool,
};

export default TimeLine;
