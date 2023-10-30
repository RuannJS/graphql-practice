import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseGuards } from '@nestjs/common';
import { UserGuard } from 'src/guards/user/user.guard';
import { UserDecorator } from 'src/decorators/user/user.decorator';

export interface UserTest {
  id: string;
  name: string;
  email: string;
}

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @UseGuards(UserGuard)
  async findAllUsers(): Promise<User[]> {
    const users = await this.userService.findAllUsers();

    return users;
  }

  @Query(() => User)
  async findUserById(@Args('id') id: string): Promise<User> {
    const user = await this.userService.findUserById(id);

    return user;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(data);

    return user;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('data') data: UpdateUserDto,
    @UserDecorator() user: UserTest,
  ): Promise<User> {
    const updatedUser = await this.userService.updateUser(user.id, data);

    return updatedUser;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string): Promise<Boolean> {
    const deleted = await this.userService.deleteUser(id);

    return deleted;
  }
}
