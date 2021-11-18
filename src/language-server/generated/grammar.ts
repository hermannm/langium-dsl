/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { loadGrammar, Grammar } from 'langium';

let loaded: Grammar | undefined;
export const grammar = (): Grammar => loaded || (loaded = loadGrammar(`{
  "$type": "Grammar",
  "usedGrammars": [],
  "hiddenTokens": [
    {
      "$refText": "WS"
    },
    {
      "$refText": "SL_COMMENT"
    },
    {
      "$refText": "ML_COMMENT"
    }
  ],
  "metamodelDeclarations": [],
  "rules": [
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreModel",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "EcoreModelDefinition"
              }
            },
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "nsUri",
            "operator": "?=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "NsUriDeclaration"
              }
            },
            "cardinality": "?"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "ecoreClasses",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "EcoreClass"
                  }
                },
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "ecoreDefinitions",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "EcoreDefinition"
                  }
                },
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "ecoreEnums",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "EcoreEnum"
                  }
                },
                "elements": []
              }
            ],
            "cardinality": "*"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreModelDefinition",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Model",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "NsUriDeclaration",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "nsUri",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "STRING"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreEnum",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "enum",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "OPENBRACKET"
            }
          },
          {
            "$type": "Assignment",
            "feature": "enumEntry",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "EcoreEnumEntry"
              }
            },
            "elements": [],
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "CLOSEBRACKET"
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreEnumEntry",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            },
            "elements": []
          },
          {
            "$type": "Keyword",
            "value": "<"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "stringDefinition",
                    "operator": "?=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "STRING"
                      }
                    },
                    "cardinality": "?",
                    "elements": []
                  },
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "numberDefinition",
                    "operator": "?=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    },
                    "cardinality": "?"
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "amgiousDefintion",
                "operator": "?=",
                "terminal": {
                  "$type": "Alternatives",
                  "elements": [
                    {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "STRING"
                      },
                      "elements": []
                    },
                    {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    }
                  ]
                },
                "elements": []
              }
            ]
          },
          {
            "$type": "Keyword",
            "value": ">"
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreClass",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "class",
                "operator": "=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "class"
                },
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "interface",
                "operator": "=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "interface"
                },
                "elements": []
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends",
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "parentClass",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refText": "EcoreClass"
                  }
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "OPENBRACKET"
            }
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "features",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "EcoreFeature"
                  }
                },
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "references",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "EcoreReference"
                  }
                },
                "elements": []
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "CLOSEBRACKET"
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreFeature",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "required",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "required"
            },
            "cardinality": "?",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Assignment",
            "feature": "boundDefinnition",
            "operator": "?=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "BoundDefinition"
              }
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "featureName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "BoundDefinition",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "ARRAY_START"
            },
            "elements": []
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "startPoint",
                    "operator": "?=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    },
                    "cardinality": "?",
                    "elements": []
                  },
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "endPoint",
                    "operator": "?=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    },
                    "cardinality": "?"
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "endPoint",
                "operator": "?=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "INT"
                  }
                },
                "cardinality": "?",
                "elements": []
              }
            ]
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "ARRAY_END"
            }
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreReference",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "containmentType",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "Container",
                  "elements": []
                },
                {
                  "$type": "Keyword",
                  "value": "Containment"
                }
              ]
            },
            "elements": []
          },
          {
            "$type": "RuleCall",
            "arguments": [],
            "rule": {
              "$refText": "ClassCrossReference"
            }
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "EcoreDefinition",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            },
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "properties",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "ID"
              }
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      }
    },
    {
      "$type": "ParserRule",
      "parameters": [],
      "name": "ClassCrossReference",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<",
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "classReference",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "EcoreClass"
              }
            }
          },
          {
            "$type": "Assignment",
            "feature": "boundDefinition",
            "operator": "?=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "BoundDefinition"
              }
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ">"
          }
        ]
      }
    },
    {
      "$type": "TerminalRule",
      "name": "ARRAY_START",
      "regex": "\\\\["
    },
    {
      "$type": "TerminalRule",
      "name": "ARRAY_END",
      "regex": "\\\\]"
    },
    {
      "$type": "TerminalRule",
      "name": "OPENBRACKET",
      "regex": "{"
    },
    {
      "$type": "TerminalRule",
      "name": "CLOSEBRACKET",
      "regex": "}"
    },
    {
      "$type": "TerminalRule",
      "name": "WS",
      "regex": "\\\\s+"
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "regex": "[_a-zA-Z][\\\\w_]*"
    },
    {
      "$type": "TerminalRule",
      "name": "UID",
      "regex": "([a-zA-z]\\\\.)[a-zA-Z][\\\\w_]*"
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": "number",
      "regex": "-?[0-9]+"
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "regex": "\\"[^\\"]*\\"|'[^']*'"
    },
    {
      "$type": "TerminalRule",
      "name": "ML_COMMENT",
      "regex": "\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\/"
    },
    {
      "$type": "TerminalRule",
      "name": "SL_COMMENT",
      "regex": "\\\\/\\\\/[^\\\\n\\\\r]*"
    }
  ],
  "name": "VsCore",
  "definesHiddenTokens": true
}`));
