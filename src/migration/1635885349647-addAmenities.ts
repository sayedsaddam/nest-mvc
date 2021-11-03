import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { Amenities } from "../entity/amenities";

export class Amenities1635885349647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const amenity1 = getRepository(Amenities).create({
            name: 'Solar Systems'
        });
        const amenity2 = getRepository(Amenities).create({
            name: 'HVAC Systems'
        });
        const amenity3 = getRepository(Amenities).create({
            name: 'Fashion & disability ramps'
        });
        const amenity4 = getRepository(Amenities).create({
            name: 'A three-level basement parking'
        });
        await getRepository(Amenities).save(amenity1);
        await getRepository(Amenities).save(amenity2);
        await getRepository(Amenities).save(amenity3);
        await getRepository(Amenities).save(amenity4);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
