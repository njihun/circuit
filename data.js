export const data = {
  "meta": { "gridSize": 20, "version": "1.0" },

  "gates": [
    {
      "id": "g1",
      "type": "lever",
      "x": 5, "y": 3, "rotation": 0,
      "pins": [
        { "name": "Y", "dir": "out", "nodeId": "n1" }
      ],
      "state": { "Y": 1 }
    },
    {
      "id": "g2",
      "type": "lever",
      "x": 5, "y": 5, "rotation": 0,
      "pins": [
        { "name": "Y", "dir": "out", "nodeId": "n2" }
      ],
      "state": { "Y": 0 }
    },
    {
      "id": "g3",
      "type": "and",
      "x": 10, "y": 4, "rotation": 0,
      "pins": [
        { "name": "A", "dir": "in",  "nodeId": "n3" },
        { "name": "B", "dir": "in",  "nodeId": "n4" },
        { "name": "Y", "dir": "out", "nodeId": "n5" }
      ],
      "state": { "Y": 0 }
    },
    {
      "id": "g4",
      "type": "lamp",
      "x": 15, "y": 4, "rotation": 0,
      "pins": [
        { "name": "A", "dir": "in", "nodeId": "n6" }
      ],
      "state": { "lit": 0 }
    }
  ],

  "nodes": [
    { "id": "n1", "x": 6,  "y": 3 },
    { "id": "n2", "x": 6,  "y": 5 },
    { "id": "n3", "x": 10, "y": 3 },
    { "id": "n4", "x": 10, "y": 5 },
    { "id": "n5", "x": 12, "y": 4 },
    { "id": "n6", "x": 15, "y": 4 }
  ],

  "segments": [
    { "id": "s1", "a": "n1", "b": "n3" },
    { "id": "s2", "a": "n2", "b": "n4" },
    { "id": "s3", "a": "n5", "b": "n6" }
  ],

  "nets": [
    {
      "id": "N1",
      "segments": ["s1"],
      "value": 1,
      "drivers": ["g1:Y"]
    },
    {
      "id": "N2",
      "segments": ["s2"],
      "value": 0,
      "drivers": ["g2:Y"]
    },
    {
      "id": "N3",
      "segments": ["s3"],
      "value": 0,
      "drivers": ["g3:Y"]
    }
  ]
}