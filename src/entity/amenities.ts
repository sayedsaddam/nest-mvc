import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Amenities {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    project: number;

    @Column()
    name: string;

}
