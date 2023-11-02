import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698945089745 implements MigrationInterface {
  name = 'Migration1698945089745';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country" ADD CONSTRAINT "UQ_2c5aa339240c0c3ae97fcc9dc4c" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "country" DROP CONSTRAINT "UQ_2c5aa339240c0c3ae97fcc9dc4c"`,
    );
  }
}
