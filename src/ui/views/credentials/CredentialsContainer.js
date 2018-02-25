
import { CredentialsComponent } from './CredentialsComponent';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { putCredentials } from '../../../application';

function mapStateToProps({ credentials, app }) {
  return {
    credentials,
    id: app.id,
    renderCredentials: app.renderCredentials,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ putCredentials }, dispatch);
}

export const CredentialsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CredentialsComponent);