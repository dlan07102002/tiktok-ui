const {
    override, useBabelRc
} = require("customize-cra");
// muon override thi dua cau hinh vao trong override
module.exports = override(
    useBabelRc()
); 