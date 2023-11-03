import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698957234988 implements MigrationInterface {
  name = 'Migration1698957234988';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "complement" character varying NOT NULL, "zipCode" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
