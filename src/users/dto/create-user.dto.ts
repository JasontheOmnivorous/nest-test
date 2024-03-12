import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

// DTOs (Data Transfer Objects) are used as input validation types
// to validate the data we're recieving in the request
export class CreateUserDto {
  // validate the name to not be empty and is a string
  @IsNotEmpty()
  @IsString()
  name: string;

  // validate if the input is a valid email
  @IsEmail()
  email: string;

  // validate role is an enum of three values
  // and show specified message when the user provide invalid role
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Please provide a valid role.',
  })
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
