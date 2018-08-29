import React from 'react';
import './accordionSearchBar.scss';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.default = this.props.default;
    }

    render = () =>
    <div id="searchBar" className="Suche Suche--accordion">
        <input id="searchBar--searchTerm" type="text" placeholder="Suche" value="" />
        <label><i className="fa fa-search"></i></label>
    </div>;
}