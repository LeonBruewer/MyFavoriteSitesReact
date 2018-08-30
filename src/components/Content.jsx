import React from 'react';

import SiteList from './siteList/SiteList';
import AddSite from './addSite/addSite';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <div className="tapp__content content">
                 <SiteList open={!this.props.formOpen}/>
                 <AddSite open={this.props.formOpen} title="Seite hinzufügen"/>
            </div>
        );
    }
}
