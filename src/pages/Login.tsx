import { mainStyle } from '../styles/mainStyle';

export default function Login() {
  return (
    <div className={`${mainStyle.pageContainer} max-w-md mx-auto`}>
      <h1 className={`${mainStyle.h1.primary} ${mainStyle.utils.textCenter}`}>Log In</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className={mainStyle.form.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={mainStyle.form.input}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className={mainStyle.form.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              className={mainStyle.form.input}
              placeholder="Enter your password"
            />
          </div>

          <div className={mainStyle.utils.flexBetween}>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className={mainStyle.text.small}>Remember me</span>
            </label>
            <a href="/forgot-password" className={`${mainStyle.link.primary} text-sm`}>
              Forgot password?
            </a>
          </div>

          <button type="submit" className={`w-full ${mainStyle.button.primary}`}>
            Log In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className={mainStyle.text.small}>
            Don't have an account?{' '}
            <a href="/register" className={`${mainStyle.link.primary} font-medium`}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
