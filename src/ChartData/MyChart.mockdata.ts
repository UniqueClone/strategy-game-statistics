export const mockdata = {
    "labels": [
        "Ryan",
        "Conor",
        "Paul"
    ],
    "datasets": [
        {
            "label": "1st Place",
            "data": [
                65,
                59,
                80
            ],
            "hoverOffset": 4,
        },
        {
            "label": "2nd Place",
            "data": [
                28,
                48,
                40
            ],
            "hoverOffset": 4
        },
        {
            "label": "3rd Place",
            "data": [
                35,
                50,
                60
            ],
            "hoverOffset": 4
        }
    ]
};

export const firstPlaceMockdata = [
    ["Winner", "Wins"],
    ["Ryan", 8],
    ["Conor", 3],
    ["Paul", 7]
];

export const secondPlaceMockdata = [
    ["Second Place", "Wins"],
    ["Ryan", 6],
    ["Conor", 4],
    ["Paul", 8]
];

export const thirdPlaceMockdata = [
    ["Third Place", "Wins"],
    ["Ryan", 4],
    ["Conor", 11],
    ["Paul", 3]
];

export const gamesPlayedMockdata = [
    [{
        type: "date",
        id: "Date",
    },
    {
        type: "number",
        id: "Games",
    }],
    [new Date(2023, 11, 1), 1],
    [new Date(2024, 0, 1), 1],
    [new Date(2024, 1, 1), 2],
    [new Date(2024, 1, 5), 3],
    [new Date("4 Apr 24"), 2],
]
