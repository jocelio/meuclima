import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
      super(props);
      this.state = {search: ''}
  }

  onInputChange(event){
    this.setState({search: event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.search);
    this.setState({search: ''});
  }
  render() {
    return (
      <div>
        <form className="input-group" onSubmit={(e) => this.onFormSubmit(e)}>
            <input type="text" className="form-control"
              onChange={(event) => this.onInputChange(event)}
              value={this.state.search}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
