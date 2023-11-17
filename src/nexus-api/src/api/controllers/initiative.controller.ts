import { Controller, Injectable, Post, Get, Put, Body, Param, Patch } from '@nestjs/common';
import { InitiativeDto } from '../../business/dtos/initiative.dto';
import { InitiativeEntity } from '../../business/entities/initiative.entity';
import { InitiativeService } from '../../data/services/initiative.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('initiative')
export class InitiativeController {
  constructor(private readonly initiativeService: InitiativeService) {}

  @Get('/initiatives')
  @ApiOperation({
    summary: 'get all initiatives in the database',
  })
  @ApiOkResponse({
    description: 'Return all initiatives',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findAllInitiatives(): Promise<InitiativeEntity[]> {
    return await this.initiativeService.findAllInitiatives();
  }

  @Post('/initiative')
  @ApiOperation({
    summary: 'create a initiative',
  })
  @ApiCreatedResponse({
    description: 'initiative created with sucessfully',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow initiative creation.',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async createInitiative(
    @Body() initiativeDto: InitiativeDto,
  ): Promise<InitiativeEntity> {
    return await this.initiativeService.createInitiatives(initiativeDto);
  }

  @Patch('/initiative/:id')
  @ApiOperation({
    summary: 'update a initiative',
  })
  @ApiOkResponse({
    description: 'Return a initiative',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow initiative creation.',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async updatePartner(
    @Body() initiativeDto: InitiativeDto,
    @Param('id') id: string,
  ): Promise<InitiativeEntity> {
    return await this.initiativeService.updateInitiative(id, initiativeDto);
  }
}
