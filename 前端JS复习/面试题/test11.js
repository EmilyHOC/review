const arr = [
    {
        pId: 1,
        label: "重庆",
        children: [
            {
                cId: 1,
                label: 重庆市,
                children: [
                    {
                        cId: 1,
                        label: "南川区",
                        children: [
                            {
                                townId: 1,
                                tuId: 1,
                                label: "重庆1393",
                                flag: "1"
                            },
                            {
                                townId: 2,
                                tuId: 3,
                                label: "重庆1393",
                                flag: "1"
                            },
                            {
                                townId: 6,
                                tuId: 0,
                                label: "重庆1393",
                                flag: "1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        pId: 2,
        label: "江苏",
        children: [
            {
                cId: 2,
                label: "南京市",
                children: [
                    {
                        cId: 2,
                        label: "江宁区",
                        children: [
                            {
                                townId: 3,
                                tuId: 4,
                                label: "银杏湖",
                                flag: "1"
                            }
                        ]

                    },
                    {
                        cId: 2,
                        label: "玄武区",
                        children: []

                    }
                ]
            },
            {
                cId: 3,
                label: "无锡市",
                children: []
            }
        ]
    }
]