import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common'
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger'
import { Exercise } from 'src/schemas/exercises.schema'
import { ExerciseService } from 'src/service/exercise/exercise.service'

@ApiTags('exercises')
@Controller('exercises')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @ApiResponse({ status: 201, type: Exercise })
  @ApiCreatedResponse({ description: 'Exercise created successfully' })
  @Post()
  async create(@Body() body: Exercise) {
    try {
      const exercise = await this.exerciseService.create(body)
      return exercise
    } catch (error) {
      throw new InternalServerErrorException('Internal server error')
    }
  }

  @ApiResponse({ status: 200, type: Exercise, isArray: true })
  @ApiOkResponse({ description: 'List of exercises' })
  @Get()
  async findAll() {
    try {
      const exercises = await this.exerciseService.findAll()
      return exercises
    } catch (error) {
      throw new InternalServerErrorException('Internal server error')
    }
  }

  @ApiResponse({ status: 200, type: Exercise })
  @ApiOkResponse({ description: 'Exercise found' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Get(':id')
  async getById(@Param('id') id: string) {
    try {
      const exercise = await this.exerciseService.getById(id)
      if (!exercise) {
        throw new NotFoundException('Exercise not found')
      }
      return exercise
    } catch (error) {
      throw new InternalServerErrorException('Internal server error')
    }
  }

  @ApiResponse({ status: 200, type: Exercise })
  @ApiOkResponse({ description: 'Exercise updated successfully' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    try {
      const exercise = await this.exerciseService.update(id, body)
      if (!exercise) {
        throw new NotFoundException('Exercise not found')
      }
      return exercise
    } catch (error) {
      throw new InternalServerErrorException('Internal server error')
    }
  }

  @ApiResponse({ status: 200, description: 'Exercise deleted successfully' })
  @ApiResponse({ status: 404, description: 'Exercise not found' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const result = await this.exerciseService.remove(id)
      if (!result) {
        throw new NotFoundException('Exercise not found')
      }
      return { message: 'Exercise deleted successfully' }
    } catch (error) {
      throw new InternalServerErrorException('Internal server error')
    }
  }
}
