import React from 'react';
import SearchBar from '../searchBar/searchBar';
import ListItem from '../listItem/listItem';
import fetchSiteList from '../../utils/fetchData';
import ShowMore from '../showMore/showMore';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
        this.sitesPerFetch = 20;
        this.displayedSites = 0;
        this.showMoreStyleDisplay = 'none';

        this.state = {
            showMoreStyleDisplay: 'none'
        };
    }

    showMore = () => {
        this.createList(this.searchTerm, this.displayedSites);
    }

    createList = (searchTerm, skip) => {
        this.searchTerm = searchTerm;

        fetchSiteList(searchTerm, this.sitesPerFetch, skip).then((d) => {
            let {data, allowShowMore} = d;
            this.showMoreStyleDisplay = allowShowMore === true ? 'block' : 'none';
            console.log('show more ' + allowShowMore);

            this.displayedSites = skip + data.length;

            let elementList = this.state.list;
            if (skip === 0) {
                elementList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
                console.log('skip 0');
            }
        
            if (skip > 0){
                
                let oldList = this.state.list;
                console.log(oldList);
                let newList = data.map( (d) => this.createListItems(d.appstoreName, d.siteId));
                console.log(newList);
                elementList = oldList.concat(newList);
                console.log(elementList);
            }

            this.setState({list: undefined});
            this.setState({list: elementList, showMoreStyleDisplay: this.showMoreStyleDisplay});
            
            console.log(this.displayedSites);
        }).catch((ex) => {
            console.log('error:' + ex);
        });
    }

    createListItems = (title, id) => <ListItem title={title} description={id} key={id}/>;

    render = () =>
    <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
        <div className="accordion__head accordion__head--search">Sites<SearchBar default="leon" action={this.createList}/></div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div id="siteList">
                    {this.state.list}
                    <ShowMore display={this.state.showMoreStyleDisplay} onClick={this.showMore}/>
                </div>
            </div>
        </div>
    </div>;
}