import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("🛢️ Database connected successfully");

    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to database:", err);
    process.exit(1);
  }

  process.on("unhandledRejection", (err) => {
    console.error("🔴 Unhandled Rejection:", err);
    process.exit(1);
  });
}

main();
