import {Logger} from '@nestjs/common';
import {EventsHandler, IEventHandler} from '@nestjs/cqrs';
import { UserUpdatedEvent } from '../../impl/user';

@EventsHandler(UserUpdatedEvent)
export class StripeUserUpdatedHandler implements IEventHandler<UserUpdatedEvent> {
  handle(event: UserUpdatedEvent): any {
    Logger.log(event, 'UserUpdatedEvent'); // write here
  }
}