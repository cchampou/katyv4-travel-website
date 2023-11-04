import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1699112130593 implements MigrationInterface {
  name = 'Migration1699112130593';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "activity_seasons_season" ("activityId" integer NOT NULL, "seasonId" integer NOT NULL, CONSTRAINT "PK_ae2aee799ce388aa733af32081a" PRIMARY KEY ("activityId", "seasonId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_31dc878eecca47a04309b30de2" ON "activity_seasons_season" ("activityId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_83aa0ef32a7e10e61d910aca94" ON "activity_seasons_season" ("seasonId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "activity_seasons_season" ADD CONSTRAINT "FK_31dc878eecca47a04309b30de22" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity_seasons_season" ADD CONSTRAINT "FK_83aa0ef32a7e10e61d910aca940" FOREIGN KEY ("seasonId") REFERENCES "season"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "activity_seasons_season" DROP CONSTRAINT "FK_83aa0ef32a7e10e61d910aca940"`,
    );
    await queryRunner.query(
      `ALTER TABLE "activity_seasons_season" DROP CONSTRAINT "FK_31dc878eecca47a04309b30de22"`,
    );
    await queryRunner.query(`DROP INDEX "public"."IDX_83aa0ef32a7e10e61d910aca94"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_31dc878eecca47a04309b30de2"`);
    await queryRunner.query(`DROP TABLE "activity_seasons_season"`);
  }
}
