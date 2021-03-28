import mongoose from 'mongoose';

const DCRSchema = mongoose.Schema({
  language: String,
  source: String,
  ticketNumber: String,
  mails: Number,
  calls: Number,
  chats: Number,
  agent: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
})

const DCREntry = mongoose.model('DCREntry', DCRSchema);

export default DCREntry;