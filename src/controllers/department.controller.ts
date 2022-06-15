import { Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, Put } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { DepartmentDto } from '../dto/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() departmentDto: DepartmentDto, @Res() response) {
    const newDepartment = await this.departmentService.create(departmentDto);
    return response.status(HttpStatus.CREATED).json({
      newDepartment
    })
  }

  @Get()
  async findAll(@Res() response) {
    const departments = await this.departmentService.findAll();
    return response.status(HttpStatus.OK).json({
      departments
    })
  }

  @Get('/:id')
  async findOne(@Param('id') id: string, @Res() response) {
    const department = await this.departmentService.findOne(id);
    return response.status(HttpStatus.OK).json({
      department
    })
  }

  @Put('/:id')
  async update(@Res() response, @Param('id') id: string, @Body() departmentDto: DepartmentDto) {
    const updatedDepartment = await this.departmentService.update(id, departmentDto);
    return response.status(HttpStatus.OK).json({
      updatedDepartment
    })
  }

  @Delete('/:id')
  async remove(@Param('id') id: string, @Res() response) {
    const deletedDepartment = await this.departmentService.remove(id);
    return response.status(HttpStatus.OK).json({
      deletedDepartment
    })
  }
}
