import express from "express";
import {
  bookRoom,
  bookedRooms,
  createRoom,
  customerCount,
  cutomerDetails,
  roomDetails,
  showRooms,
} from "../Controllers/roomControllers.js";

const router = express.Router();

router.post("/createroom", createRoom);
router.get("/showroom", showRooms);
router.get("/showbookedroom", bookedRooms);
router.post("/bookroom", bookRoom);
router.get("/roomdetails", roomDetails);
router.get("/customerdetails", cutomerDetails);
router.get("/customercount/:name", customerCount);

export default router;
