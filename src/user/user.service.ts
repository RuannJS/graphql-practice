import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly Prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    const users = await this.Prisma.user.findMany();

    return users;
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.Prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not Found');
    }
    return user;
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const userExists = await this.Prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new ConflictException('Email in use');
    }
    const user = await this.Prisma.user.create({ data: data });
    return user;
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.findUserById(id);

    if (!user) {
      throw new NotFoundException();
    }

    const updatedUser = await this.Prisma.user.update({ where: { id }, data });

    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    if (!user) {
      throw new NotFoundException();
    }

    const deleted = await this.Prisma.user.delete({ where: { id } });

    if (deleted) {
      return true;
    }

    return false;
  }
}
