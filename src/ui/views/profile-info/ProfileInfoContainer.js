import { ProfileInfoComponent } from './ProfileInfoComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putProfileInfo } from '../../../application'

function mapStateToProps(state) {
  const { profileInfo, app } = state;
  return profileInfo;
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ putProfileInfo }, dispatch);
}



export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoComponent);