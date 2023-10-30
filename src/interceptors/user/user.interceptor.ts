import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = GqlExecutionContext.create(context).getContext();

    const user = {
      id: '6540059689bc60e5e5ae189a',
      name: 'ruann',
      email: 'example@example@gmail.com',
    };

    request.user = user;

    return next.handle();
  }
}
