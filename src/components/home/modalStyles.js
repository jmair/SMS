const btn = {
  marginTop: '4px'
};

export default {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  modal: {
    width: '50%',
    margin: '0 auto',
    height: '200px',
    backgroundColor: '#fff',
    marginTop: '48px',
    borderRadius: '20px',
    padding: '12px',
    boxShadow: '0 0 24px 6px #000'
  },
  input: {
    width: '100%',
    height: '100px',
    marginTop: '12px'
  },
  btnWrapper: {
    float: 'right'
  },
  cancel: {
    ...btn,
    marginRight: '12px'
  },
  send: {
    ...btn
  }
};