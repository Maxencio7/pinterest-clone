import { useState } from "react";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Login logic here

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="card mx-auto p-4">
      <h2 className="card-title">Login</h2>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
