const router = require('express').Router();


const {
    createUser,
    getSingleUser,
    saveTune,
    // deleteTune,
    login,
} = require('../../controllers/user-controller')

const { authMiddleware } = require('../../utils/auth');


router.route('/').post(createUser).put(authMiddleware, saveTune);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;

//add routes