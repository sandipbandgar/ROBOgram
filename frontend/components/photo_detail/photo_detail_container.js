import React from 'react';
import { connect } from 'react-redux';


import PhotoDetail from './photo_detail';
import { fetchSinglePhoto, deletePhoto } from '../../actions/photo_detail_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
  photoDetail: state.photoDetail,
  currentUser: state.currentUser,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePhoto: (id) => { return dispatch(fetchSinglePhoto(id)); },
  closeModal: () => { return dispatch(closeModal()); },
  deletePhoto: (id, callback) => { return dispatch(deletePhoto(id, callback)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
