const db = require("../connectDb/database")


exports.Readorder = async(req, res) => {
    try {
        const [rows] = await db.query("DELETE  FROM `order`");
        console.log(rows);
        res.send(rows);
    } catch (error) {
        console.error("เกิดข้อผิดพลาด:", error.message);
        res.status(500).send("เกิดข้อผิดพลาดในระบบ");
    }
};