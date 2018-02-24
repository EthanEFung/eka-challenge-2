
import { connect } from 'react-redux';
import { AppComponent } from './AppComponent';
import { bindActionCreators } from 'redux';
import {
  renderLoadingPage,
  postUser,
  putCredentials,
  putProfileInfo,
  putUserAddressInfo
} from '../../application';

function mapStateToProps(state) {
  return ({
    credentials: state.credentials,
    profileInfo: state.profileInfo,
    userAddressInfo: state.userAddressInfo,
  });
}

function mapDispatchToProps(dispatch) {
  const actions = {
    renderLoadingPage,
    postUser,
    putCredentials,
    putProfileInfo,
    putUserAddressInfo
  }
  return bindActionCreators(actions, dispatch);
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent)