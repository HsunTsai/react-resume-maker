import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './card.scss';

const Card = ({ title, icon, half, children }) =>
	children ? (
		<div className={classNames('card', { 'card--half': half })}>
			<div className="card__title">
				{icon && <span className="card__title-icon">{icon}</span>}
				{title}
			</div>
			<div className="card__divider" />
			<div className="card__body">{children}</div>
		</div>
	) : null;

Card.defaultProps = {
	title: null,
	icon: null,
	half: false,
	children: null,
};

Card.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.objectOf(PropTypes.array),
	half: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.any), PropTypes.arrayOf(PropTypes.any)]),
};

export default Card;
