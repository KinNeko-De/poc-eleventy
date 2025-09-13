# BookingService Usage Guide

To use the BookingService API, follow these steps:

1. **Book a Vehicle**
   - Call the `BookVehicle` service method with the required booking details.
   - You will receive a `BookingStatusID` in the response.

2. **Check Booking Status**
   - Use the returned `BookingStatusID` to call the `BookingUpdates` service method.
   - This will allow you to query or subscribe to updates for the booking status.

---

**Example Flow:**

1. `BookVehicle` → returns `BookingStatusID`
2. `BookingUpdates(BookingStatusID)` → returns current status (and updates, if streaming)

> This manual documentation is shown alongside the generated API docs for BookingService.
