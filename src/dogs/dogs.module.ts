import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controller";
import { DogsService } from "./service/dogs.service";

@Module({
    controllers: [DogsController],
    providers: [DogsService],
})

export class DogsModule{}