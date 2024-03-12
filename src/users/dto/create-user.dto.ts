// DTOs (Data Transfer Objects) are used as input validation types
// to validate the data we're recieving in the request
export class CreateUserDto {
  name: string;
  email: string;
  role: 'ADMIN' | 'ENGINEER' | 'INTERN';
}
