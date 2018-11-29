import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends Component {
  onLike(id) {
    const { mutate } = this.props;

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
            onClick={() => this.onLike(id)}
          >
            thumb_up
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

const mutation = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id) {
      id
      content
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
