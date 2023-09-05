import mongoose from 'mongoose';

async function connect({ db }) {
  try {
    await mongoose
      .set('strictQuery', false)
      .connect(db)
      .then(() => console.log('Successfully connected to Database'));
  } catch (error) {
    console.log('An error ocurred when trying to connect with Database');
    throw error;
  }
}

export default connect;
