import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { User } from 'src/types/users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // inject UsersService as a dependency
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // handle query string values
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get('/interns')
  findAllInterns() {
    return this.usersService.findAllInterns();
  }

  // always put dynamic value passing controllers at the bottom
  // because they will read everything added behind root like their specified dynamic value
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  // ParseIntPipe is a built-in pipe middleware to parse data into integer type
  // by using ParseIntPipe, we inform nestjs that id must be a numeric string
  // so whenever user put in random bullshits in that place, nest will respond error message
  @Patch(':id')
  updateOne(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {}) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteOne(id);
  }
}
