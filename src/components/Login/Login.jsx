export const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Iniciar Sesión</h1>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
