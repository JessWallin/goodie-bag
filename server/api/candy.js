const router = require('express').Router();
const { Candy, db } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const candy = await Candy.findAll();
    res.json(candy);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201);
    res.json(await Candy.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const [updatedCandyCount, udatedCandyInstance] = await Candy.update(
      {
        quantity: req.body.quantity,
      },
      {
        where: { id: req.params.id },
        individualHooks: true,
        returning: true,
      }
    );
    if (updatedCandyCount[0] === 0) {
      res.status(404).send();
    } else {
      res.status(202).send();
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deletedCandy = await Candy.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deletedCandy > 0) {
      res.status(204).send('Deleted.');
    } else {
      res.status(404).send('Nothing to delete.');
    }
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const thisCandy = await Candy.findById(req.params.id);
    res.json(thisCandy);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
