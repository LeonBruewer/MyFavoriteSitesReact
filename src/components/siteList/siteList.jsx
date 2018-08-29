import React from 'react';

export default class SiteList extends React.Component {
    constructor (props) {
        super(props);
    }

    render = () => 
    <div className="accordion accordion--open" data-group="mfs" id="sitesAccordion">
        <div className="accordion__head accordion__head--search">Sites</div>
        <div className="accordion__body">
            <div className="accordion__content">
                <div id="siteList"></div>
            </div>
        </div>
    </div>
}