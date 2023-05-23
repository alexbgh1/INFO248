"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = (0, express_1.Router)();
router.get("/", productos_1.getProductos);
router.get("/:id", productos_1.getProducto);
exports.default = router;
//# sourceMappingURL=productos.js.map