import mongoose from 'mongoose';

async function connect({ db }) {
  try {
    await mongoose
      .connect(db)
      .then(() =>
        console.log(`Successfully connected to Database`.cyan.underline.bold)
      );
  } catch (error) {
    console.log(`An error ocurred when trying to connect with Database`.red);
    throw error;
  }
}

export default connect;
