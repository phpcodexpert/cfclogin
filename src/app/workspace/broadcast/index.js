import { connect } from 'react-redux';
import { Broadcast as BroadcastComponent } from './Broadcast';
import { getBroadcasts, } from '../../../state/broadcasts';

const mapStateToProps = (state, props) => ({
  ...props,
  broadcasts: getBroadcasts(state),
});

const Broadcast = connect(mapStateToProps)(BroadcastComponent);


export * from './createBroadcast';
export * from './editBroadcast';
export * from './viewBroadcast';
export {
  Broadcast,
};

