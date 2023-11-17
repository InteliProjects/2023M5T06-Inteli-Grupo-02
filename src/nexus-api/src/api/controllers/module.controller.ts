import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ModuleDto } from '../../business/dtos/module.dto';
import { ModuleService } from '../../data/services/module.service';
import { ApiTags } from '@nestjs/swagger';
import {
  ApiOperation,
  ApiInternalServerErrorResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';


@Controller()
@ApiTags('module')
export class ModuleController {
  constructor(
    private readonly moduleService: ModuleService,
  ) {}

  @Get('/modules')
  @ApiOperation({
    summary: 'get all modules in the database',
  })
  @ApiOkResponse({
    description: 'Return all modules',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findAllModules() {
    return await this.moduleService.findAllModules();
  }

  @Post('/module')
  @ApiOperation({
    summary: 'create a module',
  })
  @ApiCreatedResponse({
    description: 'module created with sucessfully',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow module creation.',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async createModule(@Body() moduleDto: ModuleDto) {
    return await this.moduleService.createModule(moduleDto);
  }

  @Get('/module')
  @ApiOperation({
    summary: 'get module.id info in the database',
  })
  @ApiOkResponse({
    description: 'Return module.id info',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findModuleByName(@Query('moduleName') moduleName: string) {
    return await this.moduleService.findModuleByName(moduleName);
  }
}
