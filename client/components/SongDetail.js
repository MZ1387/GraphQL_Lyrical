import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong';

import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { params: { id }, data: { loading, song } } = this.props;

    if(loading) {
      return <div />;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate id={id}/>
      </div>
    );
  }
};

export default graphql(fetchSong, {
  options: (props) => {
    return {
       variables: { id: props.params.id }
    };
  }
})(SongDetail);
