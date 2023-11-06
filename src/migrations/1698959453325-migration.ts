import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698959453325 implements MigrationInterface {
  name = 'Migration1698959453325';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "thematic" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_7f5f1ff7aaa1dd6ba699ac29e65" UNIQUE ("name"), CONSTRAINT "PK_91abb7d424bf024227f3a4804b3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "thematic"`);
  }
}
