import { Injectable } from '@nestjs/common';
import { User } from 'src/types/users';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'howdy@melissa.tv',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Chelsy Deitrich',
      email: 'lucio@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'Patricia Lebsack',
      email: 'julianne.ocorner@kory.org',
      role: 'ENGINEER',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findAllInterns() {
    return this.users.filter((user) => user.role === 'INTERN');
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: User) {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users = [...this.users, newUser];
    return newUser;
  }

  update(
    id: number,
    updateData: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updateData } : user,
    );

    return this.findOne(id);
  }

  deleteOne(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
