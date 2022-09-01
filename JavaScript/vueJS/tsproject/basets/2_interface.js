var rect1 = {
    id: 1,
    size: {
        width: 15,
        height: 20
    },
    color: '#ccc'
};
var rect2 = {
    id: 2,
    size: {
        width: 70,
        height: 70
    }
};
rect2.color = '#fff ';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: 3,
    size: {
        width: 15,
        height: 15
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
rect5.getArea();
