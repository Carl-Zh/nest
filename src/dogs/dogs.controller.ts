import { Controller, Get, Query, Post, Body, Redirect, Param, UsePipes } from '@nestjs/common';
import { CreateDogsDto } from './create-dogs.dto';
import { DogsService } from './service/dogs.service';
import { Dog } from './interface/dog.interface';
import { JoiValidationPipe } from './pipe/joiValidationPipe';
import { createDogSchema } from './schema/createDogSchema';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService){}

  @Get('')
  async find():Promise<Dog[]>{
      return this.dogsService.findAll();
  }
  
  @Post('create')
  @UsePipes(new JoiValidationPipe(createDogSchema))
  async create(@Body() createDogsDto: CreateDogsDto) {
      this.dogsService.create(createDogsDto);
  }
}
