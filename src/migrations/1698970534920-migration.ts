import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698970534920 implements MigrationInterface {
  name = 'Migration1698970534920';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "activity" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "address_id" integer NOT NULL, CONSTRAINT "UQ_e0098522faf604f4f29ba54bba4" UNIQUE ("name"), CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "activity"`);
  }
}
