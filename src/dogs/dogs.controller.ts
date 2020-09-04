import { Controller, Get, Query, Post, Body, Redirect, Param } from '@nestjs/common';
import { CreateDogsDto } from './create-dogs.dto';
import { DogsService } from './service/dogs.service';
import { Dog } from './interface/dog.interface';


@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService){}

  @Get('')
  async find():Promise<Dog[]>{
      return this.dogsService.findAll();
  }

  @Post('create')
  async create(@Body() createDogsDto: CreateDogsDto) {
      this.dogsService.create(createDogsDto);
  }
}
