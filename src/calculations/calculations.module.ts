import { Module } from '@nestjs/common'; // Importing the Module decorator from the NestJS common package.

import { CalculationsService } from './calculations.service'; // Importing the CalculationsService from the service file.
import { CalculationsController } from './calculations.controller'; // Importing the CalculationsController from the controller file.

@Module({
    providers: [CalculationsService], // Declaring the providers that this module will make available (in this case, the CalculationsService).
    controllers: [CalculationsController], // Declaring the controllers that this module will handle (in this case, the CalculationsController).
})
export class CalculationsModule { } // Exporting the module class so it can be used in other parts of the application.
