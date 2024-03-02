const userRouter = require("./routes/api/user");
app.use("/api/user", userRouter);

const exercisesRouter = require("./routes/api/exercises");
app.use("/api/user", exercisesRouter);