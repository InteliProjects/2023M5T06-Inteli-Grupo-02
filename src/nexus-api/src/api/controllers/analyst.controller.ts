import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnalystDto } from '../../business/dtos/analyst.dto';
import { AnalystEntity } from '../../business/entities/analyst.entity';
import { AnalystService } from '../../data/services/analyst.service';
import {
  ApiOperation,
  ApiInternalServerErrorResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';


@Controller()
@ApiTags('analyst')
export class AnalystController {
  constructor(private readonly analystService: AnalystService) {}

  @Get('/analysts')
  @ApiOperation({
    summary: 'get all analysts in the database',
  })
  @ApiOkResponse({
    description: 'Return all analysts',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findAllAnalysts(): Promise<AnalystEntity[]> {
    return await this.analystService.findAllAnalysts();
  }

  @Post('/analyst')
  @ApiOperation({
    summary: 'create a analyst',
  })
  @ApiCreatedResponse({
    description: 'analyst created with sucessfully',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow analyst creation.',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async createAnalysts(
    @Body() analystDto: AnalystDto,
  ): Promise<AnalystEntity> {
    return await this.analystService.createAnalyst(analystDto);
  }
}
