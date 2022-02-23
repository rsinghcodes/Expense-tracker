import { Router } from 'express';

import Transaction from '../models/Transcation';
import { validateInput } from '../validation/validators';

const router = Router();

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { errors, isValid } = validateInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
});

export default router;
