import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1699135332986 implements MigrationInterface {
  name = 'Migration1699135332986';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TYPE "public"."account_roles_enum" AS ENUM('admin', 'user')`);
    await queryRunner.query(
      `ALTER TABLE "account" ADD "roles" "public"."account_roles_enum" array NOT NULL DEFAULT '{user}'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "account" DROP COLUMN "roles"`);
    await queryRunner.query(`DROP TYPE "public"."account_roles_enum"`);
  }
}
