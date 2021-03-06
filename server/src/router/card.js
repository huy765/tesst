//hàm xử lý dữ liệu api lấy từ cơ sở dữ liệu
const express = require("express");

const Router = express.Router();
const {
    find_all_Card,
    InsertCard,
    UpdateCard,
    find_by_name_row_card,
    delete_By_Id,
    find_by_idCard_and_IdCus,
    Card,
} = require("../models/card");

const { find_by_name_row } = require("../models/user");

const { find_by_id_role, find_by_name_row_role } = require("../models/role");

const verifyToken = require("../../Middleware/Auth");

Router.get("/", verifyToken, async (req, res) => {
    try {
        const user = await find_by_name_row_card("id", req.userId);
        if (!user) {
            return res
                .status(202)
                .json({ success: false, message: "User not found" });
        } else {
            return res
                .status(200)
                .json({ success: true, user, role: req.role });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});
Router.delete("/:id", verifyToken, async (req, res) => {
    const result = await find_by_idCard_and_IdCus(req.userId, req.params.id);

    try {
        if (result) {
            const result = await delete_By_Id(req.params.id);
            if (result != 1) {
                return res
                    .status(202)
                    .json({ success: false, message: "Xóa thất bại" });
            } else {
                return res
                    .status(200)
                    .json({ success: true, message: "Xóa thành công" });
            }
        } else {
            return res.status(405).json({
                success: false,
                message: "Lỗi cơ sở dữ liệu",
            });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});

Router.get("/allCard", verifyToken, async (req, res) => {
    try {
        const card = await find_all_Card(req.userId);
        if (card.length <= 0) {
            return res
                .status(202)
                .json({ success: false, message: "Giỏ hàng trống" });
        } else {
            return res.status(200).json({ success: true, card });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: "Server Error" });
    }
});

Router.post("/addCard", async (req, res) => {
    const { idCustomer, idMGG, stateCard } = req.body;

    if (!idCustomer || !idMGG || !stateCard) {
        res.status(400).json({
            success: true,
            message: "Nhập thiếu thông tin",
        });
    } else {
        const user = await find_by_name_row("id", idCustomer);
        if (user.length <= 0) {
            res.status(400).json({
                success: false,
                message: "Tài khoản không tồn tại",
            });
        } else {
            const newCard = new Card({
                idCustomer,
                idMGG,
                stateCard,
            });
            try {
                const result = await InsertCard(newCard);

                if (result) {
                    const cardNew = await find_by_name_row_card(
                        "idCustomer",
                        idCustomer
                    );
                    res.status(200).json({
                        success: true,
                        message: "Thêm sản phẩm thành công",
                        card: cardNew,
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Thêm sản phẩm thất bại",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Xảy ra lỗi : " + error,
                });
            }
        }
    }
});
Router.put("/update", verifyToken, async (req, res) => {
    const { idMGG } = req.body;
    if (!idMGG) {
        res.status(400).json({
            success: true,
            message: "Mã giảm giá không tồn tại",
        });
    } else {
        const user = await find_by_name_row("id", req.userId);
        if (user.length <= 0) {
            res.status(400).json({
                success: false,
                message: "Tài khoản không tồn tại",
            });
        } else {
            const updateCard = new Card({
                idMGG,
            });
            try {
                const result = await UpdateCard(updateCard, req.userId);
                if (result) {
                    const cardUpdate = await find_by_name_row_card(
                        "idCustomer",
                        req.userId
                    );
                    res.status(200).json({
                        success: true,
                        message: "Cập nhật thành công",
                        card: cardUpdate,
                    });
                } else {
                    res.status(400).json({
                        success: false,
                        message: "Cập nhật thất bại",
                    });
                }
            } catch (error) {
                res.status(400).json({
                    success: false,
                    message: "Xảy ra lỗi : " + error,
                });
            }
        }
    }
});

module.exports = Router;
