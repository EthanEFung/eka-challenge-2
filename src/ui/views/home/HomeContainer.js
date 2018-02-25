
import { HomeComponent } from './HomeComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { postUser } from '../../../application';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postUser }, dispatch)
}

export const HomeContainer = connect(() => ({}), mapDispatchToProps)(HomeComponent);