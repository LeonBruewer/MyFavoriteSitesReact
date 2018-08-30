import React from 'react';

import SiteList from './siteList/SiteList';
import AddSite from './addSite/addSite';

const Content = () => (
    <div className="tapp__content content">
        <SiteList />
        <AddSite title="Seite hinzufügen"/>
    </div>
);

export default Content;