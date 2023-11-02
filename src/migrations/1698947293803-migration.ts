import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698947293803 implements MigrationInterface {
  name = 'Migration1698947293803';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "city" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "city"`);
  }
}
