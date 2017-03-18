import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''}; 
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input 
				placeholder="Search Your Favorite Video"
				value={this.state.term}
				onChange={(event) => this.onInputChange(event.target.value)} />
			</div>
			);        
	} 
}

