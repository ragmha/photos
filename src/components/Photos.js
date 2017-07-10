import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Photos extends Component {
  renderPhotos() {
    return this.props.photos.map(photo =>
      <Link key={photo.id} to={`/photos/${photo.id}`}>
        <li className="list-group-item">
          <img src={photo.thumbnailUrl} />
        </li>
      </Link>
    );
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderPhotos()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  };
}

export default connect(mapStateToProps)(Photos);
