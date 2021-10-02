import { Injectable } from '@nestjs/common';
import{ Job } from './interfaces/job.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class JobsService {
    constructor (@InjectModel('Job') private readonly jobModel: Model<Job>) {}
}
