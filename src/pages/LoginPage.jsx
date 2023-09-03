import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='mt-4  items-center justify-around grow flex'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Login</h1>
        <form className=' mx-auto max-w-md  '>
          <input type='email' placeholder='your@email.com' className='' />
          <input type='password' placeholder='password' />
          <button className='primary rounded-full'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            {' '}
            Don't have account yet?{' '}
            <Link className='underline text-black' to={'/register'}>
              {' '}
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
