
export interface User {
  id: number,
  email: string;
  password: string;
  role: string;
}

export interface CreateUserDto extends Omit<User, 'id'> { };

