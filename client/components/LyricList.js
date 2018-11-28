import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import query from '../queries/fetchSongs';

class LyricList extends Component {
  // onSongDelete(id) {
  //   const { mutate, data: { refetch } } = this.props;
  //
  //   mutate({
  //     variables: { id }
  //   }).then(() => refetch())
  // }
  //
  // renderSongs() {
  //   const { songs } = this.props.data;
  //
  //   return songs.map(({ id, title }) => {
  //     return (
  //       <li key={id} className="collection-item">
  //         <Link to={`/songs/${id}`}>{title}</Link>
  //         <i
  //           className="material-icons"
  //           onClick={() => this.onSongDelete(id)}
  //         >
  //           delete
  //         </i>
  //       </li>
  //     );
  //   });
  // }

  render() {

    // if(this.props.data.loading) {
    //   return <div />;
    // }

    return (
      <ul>
        Lyric List
      </ul>
    );
  }
};

// const mutation = gql`
//   mutation DeleteSong($id: ID){
//     deleteSong(id: $id) {
//       id
//     }
//   }
// `;

export default LyricList;
