import React from 'react';
import './ListItem.scss';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired
};

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.description = this.props.description;

        this.imageUrl = `https://sub60.tobit.com/l/${this.description}`;
        this.url = `https://chayns.net/${this.description}`;
    }

    render = () =>
    <div className="ListItem ListItem--clickable">
        <a href={this.url} target="_blank">
            <div className="ListItem__head">
                <div className="ListItem__Image" style={{background: 'url("https://sub60.tobit.com/l/77891-07846)")', backgroundSize: '40px'}}>
                    <div className="ListItem__Image" style={{background: `url(${this.imageUrl})`, backgroundSize: '40px'}}></div>
                </div>
                <div className="ListItem__Title">
                    <p className="ListItem__Title--headline">{this.title}</p>
                    <p className="ListItem__Title--description">{this.description}</p>
                </div>
            </div>
        </a>
    </div>
    ;
}

ListItem.propTypes = propTypes;

export default ListItem;