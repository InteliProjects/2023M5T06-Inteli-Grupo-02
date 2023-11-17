import { Injectable, Controller, Post, Body } from "@nestjs/common";
import { LoginService } from "../../data/services/login.service";
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../../business/dtos/login.dto';
import {
  ApiOperation,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';

@Controller()
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  @ApiOperation({
    summary: 'allows access to the system',
  })
  @ApiCreatedResponse({
    description:
      'return the object with userTypem the boolean isConnected and userId',
  })
  @ApiInternalServerErrorResponse({
    description: 'error when searching for user without id',
  })
  @ApiNotFoundResponse({
    description: 'email invalid',
  })
  @ApiBadRequestResponse({
    description: 'user password is not strong enough',
  })
  public async Login(@Body() LoginDto: LoginDto): Promise<object> {
    const email = LoginDto.email;
    const password = LoginDto.password;
    return await this.loginService.login({ email, password });
  }
}
