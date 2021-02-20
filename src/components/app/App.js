import React, { Component } from 'react';
import Context from '../../context/Context';
import List from '../list/List';
export default class App extends Component {
	static contextType = Context;
	render() {
		console.log(this.context.fileList);
		this.context.loadFileList();
		return (
			<List></List>
		);
	}
}