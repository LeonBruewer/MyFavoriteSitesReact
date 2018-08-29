import React from 'react';
import SearchBar from '../searchBar/searchBar';
import ListItem from '../listItem/listItem';
import fetchSiteList from '../../utils/fetchData';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);

        this.state = {

        };
    }

    createList = (searchTerm) => {
        let filter = '&Take=30&skip=0';

        fetchSiteList(searchTerm, filter).then((data) => {
            console.log(data);
            this.list = data.map( () => this.createListItems(data.appstoreName, data.siteId));
            this.setState({list: this.list});
            console.log('list: ' + this.list);
        }).catch((ex) => {
            console.log('error:' + ex);
        });
    }

    createListItems = (title, id) => <ListItem title={title} description={id}/>;

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