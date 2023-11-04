import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1699120335921 implements MigrationInterface {
  name = 'Migration1699120335921';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "activity" ADD "addressId" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "activity" ADD CONSTRAINT "FK_d53f15ce78649bdbad3f26d576a" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "activity" DROP CONSTRAINT "FK_d53f15ce78649bdbad3f26d576a"`,
    );
    await queryRunner.query(`ALTER TABLE "activity" DROP COLUMN "addressId"`);
  }
}
