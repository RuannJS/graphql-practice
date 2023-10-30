import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

@InputType()
export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Field must not be empty!' })
  @Field((type) => String)
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Field must not be empty!' })
  @Field((type) => String)
  email: string;
}
