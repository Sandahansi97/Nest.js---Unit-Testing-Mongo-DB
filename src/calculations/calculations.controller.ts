import { Body, Controller, Get } from '@nestjs/common';
import { CalculationsService } from './calculations.service';

@Controller('/calculations')
export class CalculationsController {
  constructor(private readonly calculationsService: CalculationsService) { }

  // Endpoint to perform addition of two numbers
  @Get('addition')
  getAddition(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructure the numbers from the request body
    return num1 + num2; // Return the sum of num1 and num2
  }

  // Endpoint to perform subtraction of two numbers
  @Get('substraction')
  getSubstraction(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructure the numbers from the request body
    return num1 - num2; // Return the result of num1 minus num2
  }

  // Endpoint to perform multiplication of two numbers
  @Get('multiplication')
  getMutiplication(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructure the numbers from the request body
    return num1 * num2; // Return the product of num1 and num2
  }

  // Endpoint to perform division of two numbers
  @Get('division')
  getDivision(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructure the numbers from the request body
    return num1 / num2; // Return the result of num1 divided by num2
  }
  
  // Another endpoint to perform division of two numbers with error handling
  @Get('division')
  getDivision1(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructure the numbers from the request body
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed'); // Handle division by zero with an error
    }
    return num1 / num2; // Return the result of num1 divided by num2 if num2 is not zero
  }

  @Get('modulus') // This decorator defines a GET route with the path 'modulus'.
  getModulus(@Body() body: { num1: number, num2: number }): number {
    const { num1, num2 } = body; // Destructuring the num1 and num2 properties from the request body.
    return num1 % num2; // Returning the modulus (remainder) of num1 divided by num2.
  }

  // Define a GET route for the square calculation
  @Get('square')
  getSquare(@Body() body: { num1: number }): number {
    const { num1 } = body; // Destructure the num1 value from the request body
    return num1 * num1; // Square  // Return the square of num1
  }
}
