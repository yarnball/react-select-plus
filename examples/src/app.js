/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select-plus';

import GroupedOptionsField from './components/GroupedOptionsField';

ReactDOM.render(
	<div>
		<GroupedOptionsField label="Option Groups" />
	</div>,
	document.getElementById('example')
);
