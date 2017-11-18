import { Audience as AudienceComponent, } from './Audience';
import { connect, } from 'react-redux';
import { getEntireAudience, } from '../../../state/audience';

const mapStateToProps = (state, props) => {
  console.log('audience.entities', state);
  return {
    ...props,
    audience: getEntireAudience(state),
  };
};

const Audience = connect(mapStateToProps)(AudienceComponent);
export {
  Audience,
};
