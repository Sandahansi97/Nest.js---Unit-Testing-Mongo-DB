import { Injectable } from '@nestjs/common'; // Importing the Injectable decorator from the NestJS common package.

@Injectable() // This decorator marks the class as a provider that can be injected into other classes.
export class CalculationsService {

  // Function to add two numbers
  getAddition(num1: number, num2: number): number {
    return num1 + num2; // Return the sum of num1 and num2
  }

  // Function to subtract one number from another
  getSubstraction(num1: number, num2: number): number {
    return num1 - num2; // Return the result of num1 minus num2
  }

  // Function to multiply two numbers
  getMutiplication(num1: number, num2: number): number {
    return num1 * num2; // Return the product of num1 and num2
  }

  // Function to divide one number by another
  getDivision(num1: number, num2: number): number {
    return num1 / num2; // Return the result of num1 divided by num2
  }

  // Function to divide one number by another with the same logic as getDivision (could be removed if redundant)
  getDivision1(num1: number, num2: number): number {
    return num1 / num2; // Return the result of num1 divided by num2
  }

  // Function to find the modulus (remainder) of two numbers
  getModulus(num1: number, num2: number): number {
    return num1 % num2; // Return the remainder of num1 divided by num2
  }

  // Function to find the square of a number
  getSquare(num1: number): number {
    return num1 * num1; // Return the square of num1
  }
}


