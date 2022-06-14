import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, HttpStatus } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { SubjectDto } from '../dto/subject.dto';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) { }

  @Post()
  async create(@Body() subjectDto: SubjectDto, @Res() response) {
    const newSubject = await this.subjectService.create(subjectDto);
    return response.status(HttpStatus.CREATED).json({
      newSubject
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
  async findOne(@Param('id') id: number, @Res() response) {
    const subject = await this.subjectService.findOne(id);
    return response.status(HttpStatus.OK).json({
      subject
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() subjectDto: SubjectDto,
    @Res() response) {
    const updatedSubject = await this.subjectService.update(id, subjectDto);
    return response.status(HttpStatus.OK).json({
      updatedSubject
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() response) {
    const deletedSubject = await this.subjectService.remove(id);
    return response.status(HttpStatus.OK).json({
      deletedSubject
    });
  }
}
