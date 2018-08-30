import React from 'react';
import SearchBar from '../searchBar/searchBar';
import ListItem from '../listItem/listItem';
import fetchSiteList from '../../utils/fetchData';
import ShowMore from '../showMore/showMore';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 30;
        this.skip = 0;
        this.displayedSites = 0;
        this.showMoreStyleDisplay = 'none';

        this.state = {
            showMoreStyleDisplay: 'none'
        };
    }

    createList = (searchTerm) => {
        let filter = `&Take=${this.sitesPerFetch + 1}&skip=${this.skip}`;

        fetchSiteList(searchTerm, filter).then((data) => {
            if (data.length > this.sitesPerFetch) {
                this.showMoreStyleDisplay = 'block';
                data.pop();
            }
            let list = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
            this.setState({list: list, showMoreStyleDisplay: this.showMoreStyleDisplay});
            
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
                    <ShowMore display={this.state.showMoreStyleDisplay}/>
                </div>
            </div>
        </div>
    </div>;
}