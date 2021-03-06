import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Select } from 'antd';
import { ReducerContext } from '../../../ReduxIntlProvider';
import { changeLang } from '../../../appAction';
import ReactIcon from '../../../../images/react_logo.png';

import './header.scss';

const languageOptions = [
	{ value: 'en', label: 'English' },
	{ value: 'zh-tw', label: '繁體中文' },
	{ value: 'zh-cn', label: '簡體中文' },
];

const { Option } = Select;

const Header = ({ pages }) => {
	const [state, dispatch] = useContext(ReducerContext);
	const {
		language: { locale },
	} = state.app;

	/* 檢查與係是否存在於清單 */
	const isLanguageExist = languageOptions.some(({ value }) => value === locale);
	return (
		<div className="header">
			<img alt="" className="header-icon" src={ReactIcon} />
			{pages.map(page => (
				<NavLink key={page.path} to={page.path} className="header-item" activeClassName="header-item--active">
					{page.name}
				</NavLink>
			))}
			<div className="header-select">
				<Select value={isLanguageExist ? locale : 'en'} onChange={lang => changeLang(lang, dispatch)}>
					{languageOptions.map(({ label, value }) => (
						<Option key={value} value={value}>
							{label}
						</Option>
					))}
				</Select>
			</div>
		</div>
	);
};

Header.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Header;
