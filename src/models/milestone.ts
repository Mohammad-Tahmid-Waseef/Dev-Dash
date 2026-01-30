import mongoose, { Schema, Document } from 'mongoose';

// 1. The TypeScript Interface 
export interface IMilestone extends Document {
  title: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  deadline?: Date;
  createdAt: Date;
}

// 2. The Mongoose Schema 
const MilestoneSchema: Schema = new Schema({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], 
    default: 'Pending' 
  },
  deadline: { 
    type: Date 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// 3. Export the Model
export default mongoose.model<IMilestone>('Milestone', MilestoneSchema);