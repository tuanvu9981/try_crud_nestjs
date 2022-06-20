import { Module } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { SubjectController } from '../controllers/subject.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectSchema } from 'src/entities/subject.entity';
import { DepartmentSchema } from 'src/entities/department.entity';
import { DepartmentService } from 'src/services/department.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'subject', schema: SubjectSchema},
      {name: 'department', schema: DepartmentSchema}
    ]),
  ],
  controllers: [SubjectController],
  providers: [SubjectService, DepartmentService]
})
export class SubjectModule {}
