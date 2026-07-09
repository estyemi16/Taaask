import test from 'node:test';
import assert from 'node:assert/strict';
import { signupUser, loginUser, clearStoredUsers } from './auth.js';

test('login rejects an email that does not exist', () => {
  clearStoredUsers();

  const result = loginUser('missing@example.com', '123456');

  assert.equal(result.success, false);
  assert.match(result.message, /create an account/i);
});

test('login rejects an incorrect password for an existing account', () => {
  clearStoredUsers();
  signupUser({ fullName: 'Ada Lovelace', email: 'ada@example.com', password: '123456' });

  const result = loginUser('ada@example.com', 'wrong-password');

  assert.equal(result.success, false);
  assert.match(result.message, /incorrect email or password/i);
});

test('signup stores a user and allows successful login', () => {
  clearStoredUsers();

  const signupResult = signupUser({ fullName: 'Grace Hopper', email: 'grace@example.com', password: '654321' });
  const loginResult = loginUser('grace@example.com', '654321');

  assert.equal(signupResult.success, true);
  assert.equal(loginResult.success, true);
  assert.equal(loginResult.user.email, 'grace@example.com');
});
