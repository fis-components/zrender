/**
 * zrender: 生成唯一id
 *
 * @author errorrik (errorrik@gmail.com)
 */


var idStart = 2311;
module.exports = function () {
    return 'zr_' + idStart++;
} || module.exports;;