import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor (private readonly jobsService: JobsService){}
    @Get()
    findAll(): string{
        return 'findAll';
    }
    @Post()
    create(): string{
        return 'create';
    }
    @Put(':id')
    update(): string{
        return 'update';
    }
    @Delete(':id')
    delete(): string{
        return 'delete';
    }
}
