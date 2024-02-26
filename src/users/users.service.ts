import { User } from '@/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  findUsers() {
    return this.userRepository.find();
  }

  async create(createUserDto: ICreateUserDto) {
    const user = this.userRepository.create({ ...createUserDto });
    await this.userRepository.save(user);
  }

  delete(id: number) {
    return this.userRepository.delete({ id });
  }
}
