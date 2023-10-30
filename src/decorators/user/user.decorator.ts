import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const UserDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext) =>
    GqlExecutionContext.create(context).getContext().user,
);
