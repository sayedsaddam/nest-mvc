import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { AmenitiesSeed } from "../../seeds/amenities.seed";

export class addAmenities1635435782454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const amenities = await getRepository("amenities").save(
            AmenitiesSeed
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
