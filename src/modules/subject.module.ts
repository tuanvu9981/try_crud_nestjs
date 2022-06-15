import { Module } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { SubjectController } from '../controllers/subject.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectSchema } from 'src/entities/subject.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'subject', schema: SubjectSchema},
    ]),
  ],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule {}
