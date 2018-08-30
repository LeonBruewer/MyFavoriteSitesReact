import React from 'react';
import SearchBar from '../searchBar/searchBar';
import ListItem from '../listItem/listItem';
import fetchSiteList from '../../utils/fetchData';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 30;
        this.skip = 0;
        this.displayedSites = 0;

        this.state = {

        };
    }

    createList = (searchTerm) => {
        let filter = `&Take=${this.sitesPerFetch}&skip=${this.skip}`;

        fetchSiteList(searchTerm, filter).then((data) => {
            console.log(data);
            let list = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
            this.setState({list: list});
            console.log('list: ' + this.state.list);
        }).catch((ex) => {
            console.log('error:' + ex);
        });
    }

    createListItems = (title, id) => <ListItem title={title} description={id} key={id}/>;

    render = () =>
    <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
        <div className="accordion__head accordion__head--search">Sites<SearchBar default="chayns" action={this.createList}/></div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div id="siteList">
                    {this.state.list}
                </div>
            </div>
        </div>
    </div>;
}