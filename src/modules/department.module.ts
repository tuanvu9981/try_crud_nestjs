import { Module } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { DepartmentController } from '../controllers/department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from 'src/entities/department.entity';
import { SubjectSchema } from 'src/entities/subject.entity';
import { SubjectService } from 'src/services/subject.service';
import { SubjectModule } from './subject.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'department', schema: DepartmentSchema },
      // { name: 'subject', schema: SubjectSchema },
    ]),
    SubjectModule,
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
