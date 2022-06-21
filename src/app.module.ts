import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './modules/subject.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentModule } from './modules/department.module';
import { URI } from './env';

@Module({
  imports: [MongooseModule.forRoot(URI), SubjectModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
