import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { PartnerDto } from '../../business/dtos/partner.dto';
import { PartnerEntity } from '../../business/entities/partner.entity';
import { PartnerService } from '../../data/services/partner.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller()
@ApiTags('partner')
export class PartnerController {
  constructor(private readonly partnerService: PartnerService) {}

  @Get('/partners')
  @ApiOperation({
    summary: 'get all partners in the database',
  })
  @ApiOkResponse({
    description: 'Return all partners',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async getAllPartners(): Promise<PartnerEntity[]> {
    return await this.partnerService.getAllPartners();
  }

  @Post('/partner')
  @ApiOperation({
    summary: 'create a partner',
  })
  @ApiCreatedResponse({
    description: 'partner created with sucessfully',
  })
  @ApiBadRequestResponse({
    description:
      'validators did not allow user creation. His password is not strong, it is not an email or the data already exists in the database',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async createPartner(@Body() partnerDto: PartnerDto) {
    return await this.partnerService.createPartner(partnerDto);
  }

  @Put('/partner/:id')
  public async updatePartner(
    @Body() partnerDto: PartnerDto,
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<PartnerEntity> {
    return await this.partnerService.updatePartner(partnerDto, id);
  }

  @Delete('/partner/:id')
  @ApiOperation({
    summary: 'delete a partner',
  })
  @ApiOkResponse({
    description: 'Return a partner',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async deletePartner(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<PartnerEntity> {
    return await this.partnerService.deletePartner(id);
  }

  @Get('/partner')
  @ApiOperation({
    summary: 'get a partner by name',
  })
  @ApiOkResponse({
    description: 'Return a partner',
  })
  @ApiInternalServerErrorResponse({
    description: 'error connecting to the api',
  })
  public async findPartnerByName(
    @Query('partnerName') partnerName: string,
  ): Promise<PartnerEntity> {
    return await this.partnerService.findPartnerByName(partnerName);
  }
}
