import "reflect-metadata";
import {createConnection} from "typeorm";
import { Amenities } from "./entity/amenities";
import {User} from "./entity/User";

createConnection().then(async connection => {

    console.log("Inserting a new amenity into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    const amenities = new Amenities();
    amenities.project = 1;
    amenities.name = 'Fasion & disability ramps';
    await connection.manager.save(amenities);
    console.log("Saved a new user with id: " + amenities.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Amenities);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
