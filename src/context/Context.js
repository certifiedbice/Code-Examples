import React, { Component } from 'react';

const Context = React.createContext({
	error: null,
	fileList: [],
	loadFileList: () => { }
});

export default Context;

export class ContextProvider extends Component {
	state = {
		error: null,
		fileList: [],
	};
	
	loadFileList() {
		console.log('loadFileList()');

		// Load the list with the object, 
		// this can later be moved to Node(lambda function?)
		// so the directory can be automatically loaded.

		this.fileList = [
			'anagrams.js',
			'binary-representations.js',
			'counting-sheep.js',
			'diagonal-difference.js',
			'hackerrank-plus-minus.js',
			'sum-of-two-movie-times-equal-flight-time.js',
		];

		console.log(this.fileList)
	}

	render() {
    	const value = {
			error: this.state.error,
			fileList: this.state.fileList,
			loadFileList: this.loadFileList,
		};
		return (
			<Context.Provider value={value}>
				{this.props.children}
			</Context.Provider>
		);
	}
}