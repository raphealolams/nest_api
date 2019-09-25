import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService ){ }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param) : Promise<Item> {
        return this.itemsService.findOne(param.id)
    }
    
    @Post() 
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}\n Desc: ${createItemDto.description}`
    }

    @Delete(':id') 
    delete(@Param() param): string {
        return `delete ${param.id}`
    }   

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param() param) : string {
        return `Update ${param.id}`
    }
}   
