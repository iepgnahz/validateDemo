import React, {Component} from 'react';
import validate from 'validate.js';

import constraints from '../mixin/constraints';

function mapItemToErrMsg(items) {
  return items[0] ? items[0].substring(items[0].indexOf(' ')+1) : ''
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:'',
      psd:''
    }
  }

  submit(e){
    e.preventDefault();
    const  valueObject = {};
    const errMsg = {user:'',psd:''};   //Fixme errMsg之所以要定义key是validate function返回值中若有一个key没有err那么这个key就不会再返回值中出现
    valueObject.user = this.user.value;
    valueObject.psd = this.psd.value;
    const result = validate(valueObject,constraints);
    for(let a in result){
      errMsg[a] = mapItemToErrMsg(result[a])
    }
    this.setState(errMsg);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <div>
            <label>用户名：<input type="text" autoFocus ref={(ref)=>{this.user=ref}}/></label>
            <span>{this.state.user}</span>
          </div>

          <div>
            <label>密码：<input type="password" ref={(ref)=>{this.psd=ref}}/></label>
            <span>{this.state.psd}</span>
          </div>

          <div>
            <input type="submit"  value="提交"/>
          </div>
        </form>
      </div>
    );
  }

}

