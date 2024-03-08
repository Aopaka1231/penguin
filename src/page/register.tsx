import { useState } from "react";
import { supabase } from "../utils/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // supabaseのユーザー登録の関数
  const doRegister = async () => {
    // supabaseで用意されているユーザー登録の関数
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw new Error(error.message);
    console.log(data);
  };
  return (
    <div className="card bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold mb-4">新規登録</h1>
      <div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              メールアドレス：
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              パスワード：
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={doRegister}
          >
            登録
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
