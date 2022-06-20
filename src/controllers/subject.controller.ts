import { Controller, Get, Post, Body, Put, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { SubjectDto } from '../dto/subject.dto';
import { DepartmentService } from 'src/services/department.service';

@Controller('subject')
export class SubjectController {
  constructor(
    private subjectService: SubjectService,
    private departmentService: DepartmentService
  ) { }

  @Post()
  async create(@Body() subjectDto: SubjectDto, @Res() response) {
    const newSubject = await this.subjectService.create(subjectDto);
    // console.log("🚀 ~ file: subject.controller.ts ~ line 16 ~ SubjectController ~ create ~ newSubject", newSubject)
    // Turbo Console Nestjs --> Shortcut: 

    const newDepartmentSubjects = await this.departmentService.updateListSubject(
      subjectDto.departmentId, newSubject._id
    );

    return response.status(HttpStatus.CREATED).json({
      newSubject,
      newDepartmentSubjects
    });
  }

  @Get()
  async findAll(@Res() response) {
    const allSubjects = await this.subjectService.findAll();
    return response.status(HttpStatus.OK).json({
      allSubjects
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    const subject = await this.subjectService.findOne(id);
    return response.status(HttpStatus.OK).json({
      subject
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() subjectDto: SubjectDto,
    @Res() response) {
    const updatedSubject = await this.subjectService.update(id, subjectDto);
    return response.status(HttpStatus.OK).json({
      updatedSubject
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    const deletedSubject = await this.subjectService.remove(id);
    return response.status(HttpStatus.OK).json({
      deletedSubject
    });
  }
}
