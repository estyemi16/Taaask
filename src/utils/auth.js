const USERS_STORAGE_KEY = 'taskify-users';
const CURRENT_USER_STORAGE_KEY = 'taskify-current-user';

const readUsers = () => {
  try {
    const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.error('Failed to read stored users:', error);
    return [];
  }
};

const writeUsers = (users) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

export const signupUser = ({ fullName, email, password }) => {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();

  const userExists = users.some((user) => user.email === normalizedEmail);
  if (userExists) {
    return {
      success: false,
      message: 'An account with this email already exists.',
    };
  }

  const newUser = {
    id: crypto.randomUUID(),
    fullName: fullName.trim(),
    email: normalizedEmail,
    password,
  };

  users.push(newUser);
  writeUsers(users);
  return {
    success: true,
    message: 'Account created successfully.',
    user: newUser,
  };
};

export const loginUser = (email, password) => {
  const users = readUsers();
  const normalizedEmail = email.trim().toLowerCase();
  const user = users.find((storedUser) => storedUser.email === normalizedEmail);

  if (!user) {
    return {
      success: false,
      message: 'Incorrect email or password.',
    };
  }

  if (user.password !== password) {
    return {
      success: false,
      message: 'Incorrect email or password.',
    };
  }

  localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify({
    id: user.id,
    fullName: user.fullName,
    email: user.email,
  }));

  return {
    success: true,
    message: 'Login successful.',
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    },
  };
};

export const getCurrentUser = () => {
  try {
    const storedUser = localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error('Failed to read current user:', error);
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
};

export const clearStoredUsers = () => {
  localStorage.removeItem(USERS_STORAGE_KEY);
  localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
};
