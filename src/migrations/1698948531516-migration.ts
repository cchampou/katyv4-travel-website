import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698948531516 implements MigrationInterface {
  name = 'Migration1698948531516';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "season" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_b3e4a42a8be8b449354a8b31cc9" UNIQUE ("name"), CONSTRAINT "PK_8ac0d081dbdb7ab02d166bcda9f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "season"`);
  }
}
