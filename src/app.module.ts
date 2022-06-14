import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './modules/subject.module';
import { MongooseModule } from '@nestjs/mongoose';
import { URI } from './env';
import { DepartmentModule } from './modules/department.module';
import { SubjectSchema } from './entities/subject.entity';
import { DepartmentSchema } from './entities/department.entity';

@Module({
  imports: [
    MongooseModule.forRoot(URI),
    MongooseModule.forFeature([
      {name: 'subject', schema: SubjectSchema},
      {name: 'department', schema: DepartmentSchema}
    ]),
    SubjectModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
