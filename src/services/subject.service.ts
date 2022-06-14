import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubjectDto } from '../dto/subject.dto';
import { Subject, SubjectDocument } from '../entities/subject.entity';

@Injectable()
export class SubjectService {

  constructor(
    @InjectModel('subject') private readonly subjectModel: Model<SubjectDocument>
  ) {

  }

  async create(subjectDto: SubjectDto): Promise<Subject> {
    const newSubject = new this.subjectModel(subjectDto);
    return newSubject.save();
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectModel.find().exec();
  }

  async findOne(id: number): Promise<Subject> {
    return await this.subjectModel.findById(id).exec();
  }

  async update(id: number, subjectDto: SubjectDto): Promise<Subject> {
    return await this.subjectModel.findByIdAndUpdate(id, subjectDto, { new: true });
  }

  async remove(id: number): Promise<Subject> {
    return await this.subjectModel.findByIdAndDelete(id);
  }
}
