import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create a new NestJS application instance using the AppModule
  const app = await NestFactory.create(AppModule);

  // Make the application listen on port 3000
  // 3000 is the port where the server will be available, e.g., http://localhost:3000
  await app.listen(3000);    // 3000 is website network port 
}

// Call the bootstrap function to start the application
bootstrap();














