export default [
  {
    id: "1",
    day: "Sunday",
    temp_min: 24,
    temp_max: 31,
    description: "Scattered Thunderstorm",
    rain: 85,
  },
  {
    id: "2",
    day: "Monday",
    temp_min: 24,
    temp_max: 31,
    description: "Thunderstorm",
    rain: 90,
  },
  {
    id: "3",
    day: "Tuesday",
    temp_min: 24,
    temp_max: 28,
    description: "Thunderstorm",
    rain: 100,
  },
  {
    id: "4",
    day: "Wednesday",
    temp_min: 22,
    temp_max: 28,
    description: "Scattered Rainshowers",
    rain: 70,
  },
  {
    id: "5",
    day: "Thrusday",
    temp_min: 26,
    temp_max: 30,
    description: "Cloudy",
    rain: 50,
  },
];

// import { createServer, Model } from "miragejs";

// createServer({
//   models: {
//     items: Model,
//     users: Model,
//   },

//   seeds(server) {
//     server.create("item", {
//       id: "1",
//       day: "Sunday",
//       temp_min: 24,
//       temp_max: 31,
//       description: "Scattered Thunderstorm",
//       rain: 85,
//     });
//     server.create("item", {
//       id: "2",
//       day: "Monday",
//       temp_min: 24,
//       temp_max: 31,
//       description: "Thunderstorm",
//       rain: 90,
//     });
//     server.create("item", {
//       id: "3",
//       day: "Tuesday",
//       temp_min: 24,
//       temp_max: 28,
//       description: "Thunderstorm",
//       rain: 100,
//     });
//     server.create("item", {
//       id: "4",
//       day: "Wednesday",
//       temp_min: 22,
//       temp_max: 28,
//       description: "Scattered Rainshowers",
//       rain: 70,
//     });
//     server.create("item", {
//       id: "5",
//       day: "Thrusday",
//       temp_min: 26,
//       temp_max: 30,
//       description: "Cloudy",
//       rain: 50,
//     });
//     server.create("item", {
//       id: "6",
//       day: "Friday",
//       temp_min: 25,
//       temp_max: 32,
//       description: "Sunny",
//       rain: 30,
//     });
//     server.create("item", {
//       id: "7",
//       day: "Saturday",
//       temp_min: 25,
//       temp_max: 32,
//       description: "Sunny",
//       rain: 30,
//     });
//   },

//   routes() {
//     this.namespace = "api";
//     this.logging = false;
//     this.timing = 1000;

//     this.get("/items", (schema, request) => {
//       return schema.items.all();
//     });
//   },
// });
