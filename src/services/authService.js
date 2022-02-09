import api from "../api/config";

class AuthService {
  static instance = new AuthService();

  signIn({ email, password }) {
    const authData = {
      email,
      password,
    };

    return api.post("/auth/signIn", authData);
  }

  signUp(signData) {
    return api.post("/auth/signup", signData);
  }
}

export default AuthService.instance;
