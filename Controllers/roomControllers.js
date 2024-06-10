const room = [
  {
    id: 1,
    room_name: "low-medium",
    number_of_seats_available: "30",
    amentities_in_room: ["wifi", "Heater"],
    price_for_1_hour: "₹ 1500",
  },
  {
    id: 2,
    room_name: "medium",
    number_of_seats_available: "20",
    amentities_in_room: ["wifi", "Heater", "Tv"],
    price_for_1_hour: "₹ 2500",
  },
  {
    id: 3,
    room_name: "high-medium",
    number_of_seats_available: "10",
    amentities_in_room: ["wifi", "Heater", "Tv", "Washing Machine"],
    price_for_1_hour: "₹ 3500",
  },
];

const book = [
  {
    room_id: 1,
    customer_name: "Umar",
    date: "10-06-2024",
    start_time: "10:00 AM",
    end_time: "06:00 PM",
    status: "Booked",
  },
  {
    room_id: 1,
    customer_name: "Wazim",
    date: "10-06-2024",
    start_time: "10:00 AM",
    end_time: "06:00 PM",
    status: "Booked",
  },
  {
    room_id: 2,
    customer_name: "Umar",
    date: "10-06-2024",
    start_time: "10:00 AM",
    end_time: "06:00 PM",
    status: "Booked",
  },
];

export const createRoom = (request, response) => {
  const {
    room_name,
    number_of_seats_available,
    amentities_in_room,
    price_for_1_hour,
  } = request.body;
  const newRoom = {
    id: room.length + 1,
    room_name: room_name,
    number_of_seats_available: number_of_seats_available,
    amentities_in_room: amentities_in_room,
    price_for_1_hour: price_for_1_hour,
  };

  room.push(newRoom);
  response.status(200).json({ data: room });
};

export const showRooms = (request, response) => {
  response.status(200).json({ data: room });
};
export const bookedRooms = (request, response) => {
  response.status(200).json({ data: book });
};

export const bookRoom = (request, response) => {
  const { room_id, customer_name, date, start_time, end_time, status } =
    request.body;

  const newBook = {
    room_id: room_id,
    customer_name: customer_name,
    date: date,
    start_time: start_time,
    end_time: end_time,
    status: status,
  };

  book.push(newBook);

  response.status(200).json({ data: book });
};

export const roomDetails = (request, response) => {
  const result = book.map((booking) => {
    const rooms = room.find((rooms) => rooms.id == booking.room_id);
    if (!rooms) {
      response.status(404).send("Room ID Not Found");
    }
    return {
      Room_Name: rooms.room_name,
      Booked_Status: booking.status,
      Customer_Name: booking.customer_name,
      Date: booking.date,
      Start: booking.start_time,
      End: booking.end_time,
    };
  });

  response.status(200).json({ data: result });
};

export const cutomerDetails = (request, response) => {
  const result = book.map((booking) => {
    const rooms = room.find((rooms) => rooms.id == booking.room_id);
    if (!rooms) {
      response.status(404).send("Room ID Not Found");
    }
    return {
      Room_Name: rooms.room_name,
      Customer_Name: booking.customer_name,
      Date: booking.date,
      Start: booking.start_time,
      End: booking.end_time,
    };
  });

  response.status(200).json({ data: result });
};

export const customerCount = (request, response) => {
  const nameID = request.params.name;

  const customerCount = book.filter(
    (booking) => booking.customer_name == nameID
  );
  const result = customerCount.map((booking) => {
    const rooms = room.find((room) => room.id === booking.room_id);
    if (!rooms) {
      response.status(404).send("Room ID Not Found");
    }

    return {
      Room_Name: rooms.room_name,
      Customer_Name: booking.customer_name,
      Date: booking.date,
      Start: booking.start_time,
      End: booking.end_time,
      Booking_id: booking.room_id,
      Booking_date: booking.date,
      Booking_Status: booking.status,
    };
  });

  response.status(200).json({ count: customerCount.length, data: result });
};
