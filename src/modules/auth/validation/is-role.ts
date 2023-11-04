import { ValidationOptions, registerDecorator } from 'class-validator';

import { Roles } from '../entities/roles.entity';

export function IsRole(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isRole',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return Object.values(Roles).includes(value);
        },
      },
    });
  };
}
