import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DepartmentService } from '../service/department.service';
import { CreateDepartmentDto } from '../dto/create-department.dto';
import { Department } from '../entities/department.entity';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get(':name')
  async findByName(@Param('name') name: string): Promise<Department> {
    return this.departmentService.findByName(name);
  }
}
