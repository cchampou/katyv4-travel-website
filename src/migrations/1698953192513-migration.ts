import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1698953192513 implements MigrationInterface {
  name = 'Migration1698953192513';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "city" ADD "countryId" integer`);
    await queryRunner.query(
      `ALTER TABLE "city" ADD CONSTRAINT "FK_990b8a57ab901cb812e2b52fcf0" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "city" DROP CONSTRAINT "FK_990b8a57ab901cb812e2b52fcf0"`);
    await queryRunner.query(`ALTER TABLE "city" DROP COLUMN "countryId"`);
  }
}
