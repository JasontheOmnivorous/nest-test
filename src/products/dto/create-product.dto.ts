import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  id?: number;

  @IsNotEmpty()
  @IsString()
  name: String;

  @IsInt()
  price: number;
}
