import { Injectable } from '@nestjs/common';
import { InitiativeEntity } from 'src/business/entities/initiative.entity';
import { PrismaService } from '../prisma.service';
import { initiativeQueries } from '../queries/initiative.queries';
import { InitiativeDto } from 'src/business/dtos/initiative.dto';
import { IInitiativeRepository } from 'src/business/repositories/initiative-impl.repository';
import * as uuid from 'uuid';
@Injectable()
export class InitiativeRepository implements IInitiativeRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async create(
    initiativeDto: InitiativeDto,
  ): Promise<InitiativeEntity> {


    console.log(` VALUES (
      ${uuid.v4()},
      ${initiativeDto.initiativeName},
      ${initiativeDto.scope},
      ${initiativeDto.partnerId},
      ${initiativeDto.moduleId},
      ${initiativeDto.courseId},
      ${true},
      ${new Date()}
  `);
    
    return await this.prisma.$queryRaw(initiativeQueries.create(initiativeDto));
  }

  public async findAll(): Promise<InitiativeEntity[]> {
    return await this.prisma.$queryRaw(initiativeQueries.findAll);
  }
  
  public async updateInitiative(
    id: string,
    data: InitiativeDto
  ): Promise<InitiativeEntity> {
    const updatedInitiative = await this.prisma.$queryRaw<InitiativeEntity>(
      initiativeQueries.update(id, data)
    );

    return updatedInitiative;
  }
}
