import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
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

  async findOne(id: string): Promise<Subject> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.subjectModel.findById(object_id).exec();
  }

  async update(id: string, subjectDto: SubjectDto): Promise<Subject> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.subjectModel.findByIdAndUpdate(object_id, subjectDto, { new: true });
  }

  async remove(id: string): Promise<Subject> {
    const object_id = new mongoose.Types.ObjectId(id);
    return await this.subjectModel.findByIdAndDelete(object_id);
  }
}
