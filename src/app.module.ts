import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CalculationsModule } from 'dist/calculations/calculations.module';

// Configure Mongoose with the MongoDB connection string
const mongooseInstance = MongooseModule.forRoot('mongodb+srv://user1:10023857@cluster0.jmw7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/nest');

@Module({
  // Import other modules needed by the application
  imports: [
    mongooseInstance,   // Import Mongoose module for database connectivity
    UsersModule,        // Import Users module for user-related features
    CalculationsModule // Import Calculations module for calculations-related features
  ],
  // Define the controllers used by the application
  controllers: [
    AppController       // Register AppController to handle incoming requests
  ],
  // Define the providers used by the application
  providers: [
    AppService          // Register AppService for business logic
  ],
})
export class AppModule { }
