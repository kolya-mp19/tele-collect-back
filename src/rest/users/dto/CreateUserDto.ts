import { ICreateUserDto } from '@/users/dto';

export class CreateUserDto implements ICreateUserDto {
  email: string;
  firstName: string;
  lastName?: string;
}
