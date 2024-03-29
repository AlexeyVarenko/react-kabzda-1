
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { useParams } from 'react-router-dom'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;

    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    //console.log("RENDER PROFILE")
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} />
    )
  }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
  //console.log("mapStateToProps PROFILE")
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  })
}


export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileContainer)
