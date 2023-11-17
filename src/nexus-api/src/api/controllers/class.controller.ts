import { Controller, Get, Post, Body } from "@nestjs/common";
import { ClassDto } from "../../business/dtos/class.dto";
import { ClassEntity } from "../../business/entities/class.entity";
import { ClassService } from "../../data/services/class.service";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags('class')
export class ClassController {

constructor(private readonly classService: ClassService){}


    @Post('/class')
    @ApiOperation({
        summary: 'create a class',
      })
    @ApiCreatedResponse({
        description: 'class created with sucessfully',
      })
    @ApiBadRequestResponse({
        description:
          'validators did not allow class creation.',
      })
    @ApiInternalServerErrorResponse({
        description: 'error connecting to the api',
      })
    public async createClass(@Body() classDto: ClassDto): Promise<ClassEntity> {
        return await this.classService.createClass(classDto);
    }


    @Get('/classes')
    @ApiOperation({
        summary: 'get all classes in the database',
      })
    @ApiOkResponse({
        description: 'Return all classes',
      })
    @ApiInternalServerErrorResponse({
        description: 'error connecting to the api',
      })
    public async findAllClasses() {
        return await this.classService.findAllClasses();
    }

}