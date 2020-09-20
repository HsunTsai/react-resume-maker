/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
// import { FormattedMessage } from 'react-intl';
import { Spin } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import classNames from 'classnames';
import { ReducerContext } from '../../ReduxIntlProvider';
import { getResumeData } from './homeAction';
import Banner from './components/banner/Banner';
import TimeLine from './components/timeLine/TimeLine';

import './home.scss';

const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',

	// styles we need to apply on draggables
	...draggableStyle,
});

/* params => isDraggingOver */
const getListStyle = () => ({ width: '100%' });

const Home = () => {
	const [state, dispatch] = useContext(ReducerContext);
	const { resumeData } = state.home;

	useEffect(() => {
		getResumeData({ dispatch });
	}, []);

	const onDragEnd = result => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const cards = reorder(resumeData.cards, result.source.index, result.destination.index);
		console.log('cards', cards);
		// this.setState({ items });
	};

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
			{resumeData && (
				<div className="home">
					{/* <FormattedMessage id="superHello" values={{ someoneName: 'Hsun.Tsai' }} /> */}
					{renderCards(resumeData.banner)}
					{Array.isArray(resumeData.cards) && (
						<DragDropContext onDragEnd={onDragEnd}>
							<Droppable droppableId="droppable">
								{(provided, snapshot) => (
									<div
										{...provided.droppableProps}
										ref={provided.innerRef}
										style={getListStyle(snapshot.isDraggingOver)}
									>
										{resumeData.cards.map((cardItem, index) => (
											<Draggable key={cardItem.id} draggableId={cardItem.id} index={index}>
												{(provided_, snapshot_) => (
													<div
														ref={provided_.innerRef}
														{...provided_.draggableProps}
														{...provided_.dragHandleProps}
														style={getItemStyle(
															snapshot_.isDragging,
															provided_.draggableProps.style
														)}
													>
														{renderCards(cardItem)}
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</DragDropContext>
					)}

					{/* {resumeData &&
					Array.isArray(resumeData.cards) &&
					resumeData.cards.map(cardItem => renderCards(cardItem))} */}
					{/* <Avatar
					className="home__avatar"
					src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
				/> */}
				</div>
			)}
		</Spin>
	);
};

export default Home;
