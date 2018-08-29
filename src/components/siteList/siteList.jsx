import React from 'react';
import SearchBar from '../searchBar/searchBar';
import ListItem from '../listItem/listItem';
import fetchSiteList from '../../utils/fetchData';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
    }

    createList = (searchTerm) => {
        let filter = '&Take=30&skip=0';

        fetchSiteList(searchTerm, filter).then((data) => {
            console.log(data);
        }).catch((ex) => {
            console.log('error:' + ex);
        });
    }

    render = () =>
    <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
        <div className="accordion__head accordion__head--search">Sites<SearchBar default="chayns" action={this.createList}/></div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div id="siteList">
                    <ListItem title="lb-club" description="77890-29897"/>
                </div>
            </div>
        </div>
    </div>;
}