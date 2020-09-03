import { Controller, Get, Query, Post, Body, Redirect, Param } from '@nestjs/common';
import { CreateDogsDto } from './create-dogs.dto';


@Controller('dogs')
export class DogsController {
  @Get('/111/:id')
  find(@Param() param):string{
      return `This is a #${param.id} dog.`
  }

  @Post('create')
  create(@Body() createDogsDto: CreateDogsDto) {
      return 'This is a new Dog.'
  }
}
