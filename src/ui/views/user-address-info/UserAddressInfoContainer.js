import { UserAddressInfoComponent } from './UserAddressInfoComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putUserAddressInfo } from '../../../application';

function mapStateToProps(state) {
  const { userAddressInfo, app } = state;
  return { userAddressInfo, app };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ putUserAddressInfo }, dispatch);
}

export const UserAddressInfoContainer = connect(mapStateToProps, mapDispatchToProps)(UserAddressInfoComponent);