import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function RegisterUser() {}

  return (
    <div className='mt-4  items-center justify-around grow flex'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form onSubmit={RegisterUser} className=' mx-auto max-w-md  '>
          <input
            type='text'
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder='John doe'
          />
          <input
            type='email'
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder='your@email.com'
            className=''
          />
          <input
            type='password'
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder='password'
          />
          <button type='submit' className='primary rounded-full'>
            Register
          </button>
          <div className='text-center py-2 text-gray-500'>
            Already a member ?
            <Link className='underline text-black' to={'/login'}>
              {''} Login Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
