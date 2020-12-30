import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1609299180196 implements MigrationInterface {
    name = 'Migrations1609299180196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transactions" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "walletId" uuid NOT NULL, "amount" integer NOT NULL, "category" "transactions_category_enum" NOT NULL DEFAULT 'Incoming', "description" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_3386cedd74f727ad93e5eaf78d1" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "wallet" ("_id" uuid NOT NULL, "balance" integer NOT NULL, CONSTRAINT "UQ_6f5a7eea333a0c943dffbcdcbc0" UNIQUE ("_id"), CONSTRAINT "REL_6f5a7eea333a0c943dffbcdcbc" UNIQUE ("_id"), CONSTRAINT "PK_6f5a7eea333a0c943dffbcdcbc0" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "taxId" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_3f9ef2d41ada58ffcfc19090bd0" UNIQUE ("taxId"), CONSTRAINT "PK_21a9a5354747252958e50f0d31e" PRIMARY KEY ("_id"))`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_a88f466d39796d3081cf96e1b66" FOREIGN KEY ("walletId") REFERENCES "wallet"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "wallet" ADD CONSTRAINT "FK_6f5a7eea333a0c943dffbcdcbc0" FOREIGN KEY ("_id") REFERENCES "client"("_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "wallet" DROP CONSTRAINT "FK_6f5a7eea333a0c943dffbcdcbc0"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_a88f466d39796d3081cf96e1b66"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "wallet"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
    }

}
