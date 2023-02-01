export const tokenKey = 'x-auth_token';

class AuthService {
  static getToken = () => {
    let token;
    try {
      token = localStorage.getItem(tokenKey);
    } catch (e) {}

    return token;
  };

  static setToken = (token) => {
    localStorage.setItem(tokenKey, token);
  };

  static logout = () => {
    localStorage.removeItem(tokenKey);
  };

  static clearToken = () => {
    localStorage.removeItem(tokenKey);
  }
}

export default AuthService;
