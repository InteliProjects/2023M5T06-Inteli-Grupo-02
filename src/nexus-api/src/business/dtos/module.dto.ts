import { IsBoolean, IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StatusEnum } from "../enums/status.enum";

export class ModuleDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Course code',
    example: 'CS101'
  })
  readonly courseCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Module name',
    example: 'Computer Science'
  })
  readonly moduleName: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Begin date',
    example: '2023-01-01'
  })
  readonly beginData: Date;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Is module active',
    example: true
  })
  readonly isActive: boolean;

  @IsEnum(StatusEnum)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Module status',
    enum: StatusEnum,
    example: StatusEnum.Approved
  })
  readonly status: StatusEnum;
}
