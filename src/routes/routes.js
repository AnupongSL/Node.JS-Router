// Import Router
const router = require('express').Router()      

//ให้ไปเชื่อมกับตัว product.route.js
router.use('/products', require('./product.route'));

// export ระดับ module เพื่อให้คนอื่นสามารถเข้าถึงได้
module.exports = router;