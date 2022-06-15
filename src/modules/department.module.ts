import { Module } from '@nestjs/common';
import { DepartmentService } from '../services/department.service';
import { DepartmentController } from '../controllers/department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from 'src/entities/department.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'department', schema: DepartmentSchema}
    ]),
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService]
})
export class DepartmentModule {}
