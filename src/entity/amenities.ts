import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Amenities{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}