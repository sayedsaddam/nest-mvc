import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Job } from './interfaces/job.interface';
import { JobsService } from './jobs.service';
import { JobDTO } from './dtos/job.dto';

@Controller('jobs')
export class JobsController {
    constructor (private readonly jobsService: JobsService){}
    @Get()
    find(@Param('id') id): Promise<Job>{
        return this.jobsService.find(id);
    }
    @Post()
    create(@Body() job: JobDTO): Promise<Job>{
        return this.jobsService.craete(job);
    }
    @Put(':id')
    update(@Param('id') id, @Body() job: JobDTO): Promise<Job>{
        return this.jobsService.update(id, job);
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<Job>{
        return this.jobsService.delete(id);
    }
}
