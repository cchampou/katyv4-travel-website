import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @MinLength(6, {
    message:
      'Account name is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(40, {
    message:
      'Account name is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  name: string;

  @IsNotEmpty()
  @MinLength(6, {
    message:
      'Password is too short. Minimal length is $constraint1 characters, but actual is $value',
  })
  @MaxLength(40, {
    message:
      'Password is too long. Maximal length is $constraint1 characters, but actual is $value',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
