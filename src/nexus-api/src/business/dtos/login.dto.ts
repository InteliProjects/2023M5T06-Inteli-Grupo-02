import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'user email',
    example: 'parceiro@teste.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'user strong password',
    example: 'StrongPa!!Swor12',
  })
  @IsStrongPassword()
  password: string;
}
