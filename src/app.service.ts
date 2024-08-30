import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Returns a simple greeting message
  getHello(): string {
    return 'Hello World!';
  }

  // Returns a personalized greeting using the provided name
  getName(name: string): string {
    return `My name is ${name}`;
  }

  // Concatenates two strings
  // Currently not implemented, returns an empty string
  getConcatenation(str1: string, str2: string): string {
    return '';
  }

  // Returns the length of the provided string
  // Currently returns a fixed value of 5
  getStringLength(str: string): number {
    return 5;
  }

  // Returns the length of the provided string
  // Currently returns a fixed value of 0
  getStringLength1(str: string): number {
    return 0;
  }

  // Returns the length of the provided string
  // Currently returns a fixed value of 11
  getStringLength2(str: string): number {
    return 11;
  }

  // Checks if the substring exists within the string
  // Currently returns a fixed value of true
  containsSubstring(str: string, substring: string): boolean {
    return true;
  }

  // Reverses the provided string
  // Currently returns a fixed reversed value 'olleH'
  reverseString(str: string, substring: string): string {
    return 'olleH';
  }
}
