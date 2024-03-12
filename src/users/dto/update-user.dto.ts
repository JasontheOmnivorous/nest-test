import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// now we can use every field from CreateUserDto
// but not all perticular field is required because of PartialType
export class UpdateUserDto extends PartialType(CreateUserDto) {}
