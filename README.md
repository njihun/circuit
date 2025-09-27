# 회로 시스템
> ### [구조](#구조-1)
- [meta](#metaobject)
- [gates](#gateslist)
- [nodes](#nodeslist---와이어의-점)
- [segments](#segmentslist---와이어의-선분)
- [nets](#netslist---같은-신호-값을-공유하는-와이어들의-집합)
- [example](#examplejson)
## 구조
- #### meta(Object)
    - gridSize(Number)
    - version(String)

- #### gates(List)
    - id(String)
    - type(String)
    - x(Number)
    - y(Number)
    - rotation(Number)
    - pins(List) - ```게이트에 연결된 와이어 정보```
        - name(String)
        - dir(String) - ```"in" or "out"```
        - nodeId(String)
    - state(Object)

- #### nodes(List) - ```와이어의 점```
    - id(String)
    - x(Number)
    - y(Number)

- #### segments(List) - ```와이어의 선분```
    - id(String)
    - a(String) - ```선분의 양 끝점에 해당하는 점의 id```
    - b(String) - ```선분의 양 끝점에 해당하는 점의 id```

- #### nets(List) - ```같은 신호 값을 공유하는 와이어들의 집합```
    - id(String)
    - segments(List)
    - value(Number)
    - drivers(List) - ```gate의 id와 특정 pin의 name 값을 "id:name" 형식으로 저장함.```

- #### example(JSON)
```json
{
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
    { "id": "n1", "x": 6,  "y": 3 },  // g1:Y
    { "id": "n2", "x": 6,  "y": 5 },  // g2:Y
    { "id": "n3", "x": 10, "y": 3 },  // g3:A
    { "id": "n4", "x": 10, "y": 5 },  // g3:B
    { "id": "n5", "x": 12, "y": 4 },  // g3:Y
    { "id": "n6", "x": 15, "y": 4 }   // g4:A
  ],

  "segments": [
    { "id": "s1", "a": "n1", "b": "n3" },  // lever(g1) -> AND.A
    { "id": "s2", "a": "n2", "b": "n4" },  // lever(g2) -> AND.B
    { "id": "s3", "a": "n5", "b": "n6" }   // AND.Y -> lamp.A
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
```