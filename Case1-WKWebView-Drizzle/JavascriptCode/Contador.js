const Contador = {
  "contractName": "Contador",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "msg",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "out",
          "type": "uint8"
        }
      ],
      "name": "Tic",
      "type": "event"
    },
    {
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "valor",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getValor",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "incr",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "decr",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"msg\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"out\",\"type\":\"uint8\"}],\"name\":\"Tic\",\"type\":\"event\"},{\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"constant\":false,\"inputs\":[],\"name\":\"decr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getValor\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"incr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"reset\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"valor\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/alex/OneDrive - Universidad Polite\\u0301cnica de Madrid/TFG/Contador/ConTruffle/contracts/Contador.sol\":\"Contador\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/alex/OneDrive - Universidad Polite\\u0301cnica de Madrid/TFG/Contador/ConTruffle/contracts/Contador.sol\":{\"keccak256\":\"0x63c4b516b955728a8074d15402dd0ef6c25199bc4b2ee0bb163d55d3f31bc5d5\",\"urls\":[\"bzz-raw://7a608127cab568cd3c80d541f6b2fa2d861afa62b4355fb9084c16b75b40a438\",\"dweb:/ipfs/QmYNL5psTgLwE9WLBjd24oUEWDo7zHHMA1fqr2TkdLFKDY\"]}},\"version\":1}",
  "bytecode": "0x608060405260008060006101000a81548160ff021916908360ff16021790555034801561002b57600080fd5b5061032f8061003b6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063119fbbd41461005c5780633ef42c9714610066578063d826f88f1461008a578063d9f2ac8a14610094578063ecbac7cf1461009e575b600080fd5b6100646100c2565b005b61006e610179565b604051808260ff1660ff16815260200191505060405180910390f35b61009261018f565b005b61009c610230565b005b6100a66102e8565b604051808260ff1660ff16815260200191505060405180910390f35b60008081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b60008060009054906101000a900460ff16905090565b60008060006101000a81548160ff021916908360ff1602179055507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b60008081819054906101000a900460ff16809291906001900391906101000a81548160ff021916908360ff160217905550507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b6000809054906101000a900460ff168156fea265627a7a723158205bc81f6f8408317d903474daa65a48dcd5890587e9bbecc5eb654c202f04275964736f6c63430005100032",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100575760003560e01c8063119fbbd41461005c5780633ef42c9714610066578063d826f88f1461008a578063d9f2ac8a14610094578063ecbac7cf1461009e575b600080fd5b6100646100c2565b005b61006e610179565b604051808260ff1660ff16815260200191505060405180910390f35b61009261018f565b005b61009c610230565b005b6100a66102e8565b604051808260ff1660ff16815260200191505060405180910390f35b60008081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b60008060009054906101000a900460ff16905090565b60008060006101000a81548160ff021916908360ff1602179055507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b60008081819054906101000a900460ff16809291906001900391906101000a81548160ff021916908360ff160217905550507f278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e6000809054906101000a900460ff1660405180806020018360ff1660ff1681526020018281038252600b8152602001807f41637475616c697a61646f0000000000000000000000000000000000000000008152506020019250505060405180910390a1565b6000809054906101000a900460ff168156fea265627a7a723158205bc81f6f8408317d903474daa65a48dcd5890587e9bbecc5eb654c202f04275964736f6c63430005100032",
  "sourceMap": "25:511:0:-;;;71:1;50:22;;;;;;;;;;;;;;;;;;;;25:511;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:511:0;;;;;;;",
  "deployedSourceMap": "25:511:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;25:511:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:8;;;205:87;;;:::i;:::-;;122:77;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;391:90;;;:::i;:::-;;298:87;;;:::i;:::-;;50:22;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;205:87;238:5;;:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;260:25;279:5;;;;;;;;;;;260:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;205:87::o;122:77::-;163:5;187;;;;;;;;;;;180:12;;122:77;:::o;391:90::-;433:1;425:5;;:9;;;;;;;;;;;;;;;;;;449:25;468:5;;;;;;;;;;;449:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;391:90::o;298:87::-;331:5;;:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;353:25;372:5;;;;;;;;;;;353:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;298:87::o;50:22::-;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract Contador {\n\n    uint8 public valor = 0;\n\n    event Tic(string msg, uint8 out);\n    \n    function getValor() public view returns (uint8) {\n        return valor;\n    }\n\n    function incr() public {\n        valor++;\n        emit Tic(\"Actualizado\", valor);\n    }\n\n    function decr() public {\n        valor--;\n        emit Tic(\"Actualizado\", valor);\n    }\n\n    function reset() public {\n        valor = 0;\n        emit Tic(\"Actualizado\", valor);\n    }\n\n    function () external {\n        revert();\n    }\n\n}\n",
  "sourcePath": "/Users/alex/OneDrive - Universidad Politécnica de Madrid/TFG/Contador/ConTruffle/contracts/Contador.sol",
  "ast": {
    "absolutePath": "/Users/alex/OneDrive - Universidad Politécnica de Madrid/TFG/Contador/ConTruffle/contracts/Contador.sol",
    "exportedSymbols": {
      "Contador": [
        63
      ]
    },
    "id": 64,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 63,
        "linearizedBaseContracts": [
          63
        ],
        "name": "Contador",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "valor",
            "nodeType": "VariableDeclaration",
            "scope": 63,
            "src": "50:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 2,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "50:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "71:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10,
            "name": "Tic",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "indexed": false,
                  "name": "msg",
                  "nodeType": "VariableDeclaration",
                  "scope": 10,
                  "src": "89:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8,
                  "indexed": false,
                  "name": "out",
                  "nodeType": "VariableDeclaration",
                  "scope": 10,
                  "src": "101:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "101:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:23:0"
            },
            "src": "79:33:0"
          },
          {
            "body": {
              "id": 17,
              "nodeType": "Block",
              "src": "170:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15,
                    "name": "valor",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4,
                    "src": "187:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 14,
                  "id": 16,
                  "nodeType": "Return",
                  "src": "180:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 18,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getValor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:2:0"
            },
            "returnParameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "163:5:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "163:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "162:7:0"
            },
            "scope": 63,
            "src": "122:77:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 29,
              "nodeType": "Block",
              "src": "228:64:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "238:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "238:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "238:7:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 25,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "264:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 26,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "279:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 24,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "260:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "260:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28,
                  "nodeType": "EmitStatement",
                  "src": "255:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 30,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "incr",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "218:2:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "228:0:0"
            },
            "scope": 63,
            "src": "205:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "321:64:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "331:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 33,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "331:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 35,
                  "nodeType": "ExpressionStatement",
                  "src": "331:7:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "357:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "372:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 36,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "353:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "353:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 40,
                  "nodeType": "EmitStatement",
                  "src": "348:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decr",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "321:0:0"
            },
            "scope": 63,
            "src": "298:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "415:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "425:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "433:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "425:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "425:9:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "453:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "468:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 49,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "449:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "449:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "EmitStatement",
                  "src": "444:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "405:2:0"
            },
            "returnParameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "415:0:0"
            },
            "scope": 63,
            "src": "391:90:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "508:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120,
                        121
                      ],
                      "referencedDeclaration": 120,
                      "src": "518:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "518:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:0"
            },
            "scope": 63,
            "src": "487:46:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 64,
        "src": "25:511:0"
      }
    ],
    "src": "0:537:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/alex/OneDrive - Universidad Politécnica de Madrid/TFG/Contador/ConTruffle/contracts/Contador.sol",
    "exportedSymbols": {
      "Contador": [
        63
      ]
    },
    "id": 64,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 63,
        "linearizedBaseContracts": [
          63
        ],
        "name": "Contador",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "valor",
            "nodeType": "VariableDeclaration",
            "scope": 63,
            "src": "50:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint8",
              "typeString": "uint8"
            },
            "typeName": {
              "id": 2,
              "name": "uint8",
              "nodeType": "ElementaryTypeName",
              "src": "50:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint8",
                "typeString": "uint8"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "71:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10,
            "name": "Tic",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "indexed": false,
                  "name": "msg",
                  "nodeType": "VariableDeclaration",
                  "scope": 10,
                  "src": "89:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "89:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8,
                  "indexed": false,
                  "name": "out",
                  "nodeType": "VariableDeclaration",
                  "scope": 10,
                  "src": "101:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 7,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "101:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "88:23:0"
            },
            "src": "79:33:0"
          },
          {
            "body": {
              "id": 17,
              "nodeType": "Block",
              "src": "170:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15,
                    "name": "valor",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4,
                    "src": "187:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 14,
                  "id": 16,
                  "nodeType": "Return",
                  "src": "180:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 18,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getValor",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "139:2:0"
            },
            "returnParameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 18,
                  "src": "163:5:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "163:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "162:7:0"
            },
            "scope": 63,
            "src": "122:77:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 29,
              "nodeType": "Block",
              "src": "228:64:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 22,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "238:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 21,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "238:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 23,
                  "nodeType": "ExpressionStatement",
                  "src": "238:7:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 25,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "264:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 26,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "279:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 24,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "260:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "260:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 28,
                  "nodeType": "EmitStatement",
                  "src": "255:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 30,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "incr",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "218:2:0"
            },
            "returnParameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "228:0:0"
            },
            "scope": 63,
            "src": "205:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "321:64:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "--",
                    "prefix": false,
                    "src": "331:7:0",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 33,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "331:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 35,
                  "nodeType": "ExpressionStatement",
                  "src": "331:7:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 37,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "357:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "372:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 36,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "353:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "353:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 40,
                  "nodeType": "EmitStatement",
                  "src": "348:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "decr",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "311:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "321:0:0"
            },
            "scope": 63,
            "src": "298:87:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 54,
              "nodeType": "Block",
              "src": "415:66:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 47,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 45,
                      "name": "valor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "425:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "433:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "425:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 48,
                  "nodeType": "ExpressionStatement",
                  "src": "425:9:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "41637475616c697a61646f",
                        "id": 50,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "453:13:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        "value": "Actualizado"
                      },
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "valor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4,
                        "src": "468:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_7243f340ddbe3cf9348c3b614ed165a901bf47908e2febb8f0c1b25a1584b9b7",
                          "typeString": "literal_string \"Actualizado\""
                        },
                        {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 49,
                      "name": "Tic",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "449:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint8_$returns$__$",
                        "typeString": "function (string memory,uint8)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "449:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "EmitStatement",
                  "src": "444:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 55,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "405:2:0"
            },
            "returnParameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "415:0:0"
            },
            "scope": 63,
            "src": "391:90:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 61,
              "nodeType": "Block",
              "src": "508:25:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 58,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        120,
                        121
                      ],
                      "referencedDeclaration": 120,
                      "src": "518:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "518:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "518:8:0"
                }
              ]
            },
            "documentation": null,
            "id": 62,
            "implemented": true,
            "kind": "fallback",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "496:2:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "508:0:0"
            },
            "scope": 63,
            "src": "487:46:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 64,
        "src": "25:511:0"
      }
    ],
    "src": "0:537:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x278733a8e0534f74d81486a11876429bb0d35a6968fa576ec403ad7aecfa2e6e": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "msg",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint8",
              "name": "out",
              "type": "uint8"
            }
          ],
          "name": "Tic",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xc481b3c43AF7e98c892995a48a1ebbAdd5ABaCb2",
      "transactionHash": "0x2573a55cb1739da2b569b0af69a35fa5f049afddb0b4c27d7eb4f133c9e047ae"
    }
  },
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-04-20T14:42:35.726Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
};
