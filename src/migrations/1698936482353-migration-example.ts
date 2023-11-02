import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698936482353 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "user" (
      id serial PRIMARY KEY,
      email VARCHAR(100) NOT NULL,
      firstname VARCHAR(50)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
