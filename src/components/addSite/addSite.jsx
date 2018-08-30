import React from 'react';

export default class AddSite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inpName: '',
            inpStreet: '',
            inpPLZ: '',
            inpOrt: '',
            inpMail: '',
            inpComment: ''
        };
    }

    onInputChange = (e) => {
        let value = e.target.value;

        this.setState({[e.target.id]: e.target.value});

        clearTimeout(this.timeout);
        this.timeout = setTimeout( () => {
            
            this.setState({name: value});
        }, 800);
    }

    submit = () => {
        alert();
    }

    render = () =>
    (<div className="accordion" data-group="mfs" id="addSite">
    <div className="accordion__head">{this.props.title}<p className="badge right"><i className="fa fa-plus "></i></p></div>
    <div className="accordion__body">
        <div className="accordion__content">
            <input type="text" value={this.state.inpName} onChange={this.onInputChange} className="input" id="inpName" placeholder="Name" style={{width: "100%"}} />
            <input type="text" value={this.state.inpStreet} onChange={this.onInputChange} className="input" id="inpStreet" placeholder="Straße" style={{width: "100%"}} />
            <div className="grid">
                <div className="grid__item col-1-2-desktop"><input type="text" value={this.state.inpPlz} onChange={this.onInputChange} className="input" id="inpPlz" placeholder="PLZ" style={{width: "90%"}} /></div>
                <div className="grid__item col-1-2-desktop"><input type="text" value={this.state.inpOrt} onChange={this.onInputChange} className="input" id="inpOrt" placeholder="Ort" style={{width: "100%"}} /></div>
            </div>
            <input type="text" value={this.state.inpMail} onChange={this.onInputChange} className="input" id="inpMail" placeholder="E-Mail" style={{width: "100%"}} />
            <textarea type="text" value={this.state.inpComment} onChange={this.onInputChange} className="input" id="inpComment" placeholder="Kommentar" style={{width: "100%"}}></textarea>
            <div style={{textAlign: "center", marginTop: "15px"}}>
                <button id="send" className="button">Senden</button>
            </div>
        </div>
    </div>
    </div>);
}