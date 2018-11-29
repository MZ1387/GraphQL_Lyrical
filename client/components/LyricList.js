import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  onLyricLike(id) {
    const { mutate, data: { refetch } } = this.props;

    mutate({
      variables: { id }
    }).then(() => refetch())
  }

  renderLyrics() {
    const { lyrics } = this.props;

    return lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i
            className="material-icons"
            onClick={() => this.onLyricLike(id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderLyrics()}
      </ul>
    );
  }
};

export default LyricList;
