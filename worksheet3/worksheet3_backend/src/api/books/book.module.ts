import { Module } from '@nestjs/common'
import { BookController } from './book.constroller'
import { BookService } from './book.services'
import { MongooseModule } from '@nestjs/mongoose'
import { Book, BookSchema } from './book.schema'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema}]),
    ],
    controllers: [BookController],
    providers: [BookService],
})
export class BookModule{}