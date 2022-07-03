// components/test.js
const myBehavior = require('../../behaviors/my-behavior')
Component({
    /**
     * 组件的属性列表
     */
    behaviors: [myBehavior],
    
    options: {
        styleIsolation: 'shared',
        pureDataPattern: /^_/,
        multipleSlots: true
    },

    properties: {
        max: {
            type: Number,
            value: 10
        },

        num: {
            type: Number
        }
    },

    created() {
        console.log('created');
    },

    attached() {
        console.log('attached');
    },

    ready() {
        console.log('ready');
    },

    moved() {
        console.log('moved');
    },

    detached() {
        console.log('detached');
    },

    lifetimes: {
        created() {
            console.log('new created');
        }
    },

    pageLifetimes: {
        show() {
            this.setData({
                '_rgb.a': Math.floor(Math.random() * (Math.ceil(255) - Math.floor(0) + 1)) + Math.floor(0),
                '_rgb.b': Math.floor(Math.random() * (Math.ceil(255) - Math.floor(0) + 1)) + Math.floor(0),
                '_rgb.c': Math.floor(Math.random() * (Math.ceil(255) - Math.floor(0) + 1)) + Math.floor(0)
            })
        },

        hide() {
            console.log('hide');
        },

        resize() {
            console.log('resize');
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0,
        n1: 0,
        n2: 0,
        sum: 0,
        _rgb: {
            r: 0,
            g: 0,
            b: 0
        },
        fullColor: '0,0,0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount() {
            if (this.properties.max <= this.data.count) return
            this.setData({
                count: ++this.data.count,
                max: ++this.properties.max
            })
            this._showCount()
        },
        _showCount() {
            wx.showToast({
                title: 'count值为' + this.data.count,
            })
        },
        showInfo() {
            console.log(this.data);
            console.log(this.properties);
            console.log(this.data === this.properties);
        },
        addN1() {
            this.setData({
                n1: ++this.data.n1
            })
        },
        addN2() {
            this.setData({
                n2: ++this.data.n2
            })
        },
        changeR() {
            this.setData({
                '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
            })
        },
        changeG() {
            this.setData({
                '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
            })
        },
        changeB() {
            this.setData({
                '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
            })
        },
        addNum() {
            this.setData({
                num: ++this.data.num
            })

            this.triggerEvent('sync', {
                value: this.properties.num
            })
        },
    },
    observers: {
        'n1,n2': function (n1, n2) {
            this.setData({
                sum: n1 + n2
            })
        },

        /*         '_rgb.r,_rgb.g,_rgb.b': function(r,g,b){
                    this.setData({
                        fullColor: `${r},${g},${b}`
                    })
                }, */

        '_rgb.**': function (obj) {
            this.setData({
                fullColor: `${obj.r},${obj.g},${obj.b}`
            })
        }
    }
})