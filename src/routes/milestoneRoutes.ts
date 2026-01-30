import express, { Request, Response } from 'express';
import Milestone, { IMilestone } from '../models/milestone';

const router = express.Router();

// GET / - Fetch all milestones
router.get('/', async (req: Request, res: Response) => {
  try {
    const milestones = await Milestone.find().sort({ createdAt: -1 });
    res.status(200).json(milestones);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch milestones' });
  }
});

// POST / - Create a new milestone
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, description, status, deadline } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const milestone = new Milestone({
      title,
      description,
      status: status || 'Pending',
      deadline: deadline ? new Date(deadline) : undefined
    });

    const savedMilestone = await milestone.save();
    res.status(201).json(savedMilestone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create milestone' });
  }
});

// PATCH /:id - Update status or details
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status, deadline } = req.body;

    const updateData: Partial<IMilestone> = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (status !== undefined) updateData.status = status;
    if (deadline !== undefined) updateData.deadline = new Date(deadline);

    const milestone = await Milestone.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!milestone) {
      return res.status(404).json({ error: 'Milestone not found' });
    }

    res.status(200).json(milestone);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update milestone' });
  }
});

// DELETE /:id - Remove a milestone
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const milestone = await Milestone.findByIdAndDelete(id);

    if (!milestone) {
      return res.status(404).json({ error: 'Milestone not found' });
    }

    res.status(200).json({ message: 'Milestone deleted successfully', milestone });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete milestone' });
  }
});

export default router;
