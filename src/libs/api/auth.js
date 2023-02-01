import Api from '@/libs/api/index';

class AuthApi extends Api {
  constructor() {
    super('auth');
  }

  signIn = (params) => {
    return this.buildQuery('post', params, 'login');
  };

  signUp = (params) => {
    return this.buildQuery('post', params, 'sign-up');
  };
}

export default AuthApi;
