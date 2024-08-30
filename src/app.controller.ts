import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/get')
export class AppController {

  constructor(private readonly appService: AppService) { }

  // Endpoint to get a simple greeting message
  @Get('hello-world')
  getHello(): string {
    return this.appService.getHello(); // Calls AppService to get 'Hello World!'         API
  }

  // Endpoint to return a personalized greeting based on the provided name
  @Post('name')
  getName(@Body() body: { name: string }): string {
    const { name } = body;
    return `My name is ${name}`; // Returns a message with the provided name
  }

  // Endpoint to concatenate two strings
  @Post('empty-string')
  getConcatenation(@Body() body: { str1: string, str2: string }): string {
    return body.str1 + body.str2; // Concatenates str1 and str2 and returns the result
  }

  // Endpoint to get the length of a provided string
  @Post('string-length')
  getStringLength(@Body() body: { str: string }): number {
    return body.str.length; // Returns the length of the provided string
  }

  // Endpoint to check if a string contains a specified substring
  @Post('contains')
  containsSubstring(@Body() body: { str: string, substring: string }): boolean {
    return body.str.includes(body.substring); // Returns true if str contains substring, otherwise false
  }

  // Endpoint to reverse a provided string
  @Post('reverse')
  reverseString(@Body() body: { str: string }): string {
    return body.str.split('').reverse().join(''); // Reverses the string and returns it
  }
}
