const constraints = {
  user:{
    presence:true,
    length:{
      minimum:6,
      message:'用户名必须大于6位'
    },
    exclusion:{
      within:['zp'],
      message:'not allowed'
    }
  },
  psd:{
    presence:true,
    length:{
      minimum:8,
      message:'密码必须大于8位'
    },
    format: {
      pattern: "^[0-9]+$",
      message: "密码必须是数字"
    }
  }};

export default constraints;