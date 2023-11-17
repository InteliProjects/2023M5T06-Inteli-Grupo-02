import { Injectable } from '@nestjs/common';
import { moduleQueries } from '../queries/module.queries';
import { ModuleDto } from 'src/business/dtos/module.dto';
import { ModuleEntity } from 'src/business/entities/module.entity';
import { IModuleService } from 'src/business/services/module-impl.service';
import { ModuleRepository } from '../repositories/module.repository';
import { PrismaService } from '../prisma.service';


@Injectable()
export class ModuleService implements IModuleService {
  constructor(
    private readonly repository: ModuleRepository,
    private readonly prisma: PrismaService,
  ) {}

  public async findModuleByName(moduleName: string): Promise<ModuleEntity> {
   const result : ModuleEntity = await this.prisma.$queryRaw(
      moduleQueries.findByModuleName(moduleName),
    );
    return result;
  }

    public async findAllModulesAndInitiativesAssociated(): Promise<any[]> {
        try {
          return await this.prisma.$queryRaw(
            moduleQueries.findAllModulesAndInitiatives,
          );
        } catch (error) {
          console.log(error);
          throw error;
        }
      }

   public async createModule(moduleDto: ModuleDto): Promise<ModuleEntity> {
    return await this.prisma.$queryRaw(moduleQueries.create(moduleDto));
    };
    public async findAllModules(): Promise<ModuleEntity[]> {
        return await this.repository.findAll();
      }
  
}

