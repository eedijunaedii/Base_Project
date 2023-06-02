const express = require('express');
const laundryController = require('../controllers/laundryController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, laundryController.getLaundries);
router.post('/', authenticateToken, laundryController.createLaundry);
router.put('/:id', authenticateToken, laundryController.updateLaundry);
router.delete('/:id', authenticateToken, laundryController.deleteLaundry);

module.exports = router;
