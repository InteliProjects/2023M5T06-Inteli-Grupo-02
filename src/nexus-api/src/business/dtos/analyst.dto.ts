import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
export class AnalystDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'analyst name',
    example: 'marcelo'
  })
  readonly name: string;
  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty({
    description: 'analyst strong password',
    example: 'StrongpASS!2@'
  })
  readonly password: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'analyst email with final: @sou.inteli.edu.br',
    example: 'marcelo.moreira@sou.inteli.edu.br'
  })
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'position in the company',
    example: 'senior project analyst'
  })
  readonly role: string;
}
