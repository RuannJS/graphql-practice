import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateUserDto {
  @IsOptional()
  @Field((type) => String, { nullable: true })
  name?: string;
  @IsOptional()
  @Field((type) => String, { nullable: true })
  email?: string;
}
