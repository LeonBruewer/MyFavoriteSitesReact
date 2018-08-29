import React from 'react';
import SearchBar from '../searchBar/searchBar';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
    }

    createList = (searchTerm) => {
        console.log(searchTerm);
    }

    render = () =>
    <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
        <div className="accordion__head accordion__head--search">Sites<SearchBar default="chayns" action={this.createList}/></div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div id="siteList"></div>
            </div>
        </div>
    </div>;
}