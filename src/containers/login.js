import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    return (
      <div className='login'>

        <div className="logo">
          <img src="../images/144.png" />
        </div>

        <div className="manners">
          <div className="mobile">手机号登录</div>
          <div className="register">注册</div>
          <div className="trial">游客试用<span className="arrow">>>></span></div>
        </div>

        <div className="others">
          <div className="title">
            <div className="left"></div>
            <div className="text">其他登录方式</div>
            <div className="right"></div>
          </div>
          <div className="content">
            <div><i className="wx"></i><a>微信</a></div>
            <div><i className="qq"></i><a>QQ</a></div>
            <div><i className="sn"></i><a>新浪微博</a></div>
            <div><i className="wy"></i><a>网易邮箱</a></div>
          </div>
        </div>
      </div>
    )
  }
}

function map(state) {
  return {
  }
}

export default connect(map)(Login)
