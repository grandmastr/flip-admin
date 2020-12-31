import React from "react";
import {Avatar} from "antd";
import {connect} from 'react-redux'
import {signOut} from 'redux/actions/Auth';

export const NavProfile = ({adminName}) => {
  const profileImg = "/img/avatars/thumb-1.jpg";

  return (
    <div style={{display: 'flex'}}>
      <div className="d-flex align-item-center" style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center'}} className={'py-2'}>
          <Avatar src={profileImg} style={{backgroundColor: 'red', alignSelf: 'center'}}/>
          <h4 className="mb-0 pl-2 text-sm" style={{alignSelf: 'center'}}>{adminName || 'Charlie Howard'}</h4>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {signOut})(NavProfile)
