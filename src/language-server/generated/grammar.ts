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
            "operator": "=",
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
            "$type": "Assignment",
            "feature": "instanceTypeName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "InstanceTypeName"
              }
            },
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
            "$type": "Group",
            "elements": [
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
                "elements": []
              },
              {
                "$type": "Keyword",
                "value": ","
              }
            ],
            "cardinality": "*"
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
            }
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
                "operator": "?=",
                "terminal": {
                  "$type": "Keyword",
                  "value": "class"
                },
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "interface",
                "operator": "?=",
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
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "implements",
                "elements": []
              },
              {
                "$type": "Assignment",
                "feature": "interfaces",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$refText": "EcoreClass"
                  }
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ",",
                    "elements": []
                  },
                  {
                    "$type": "Assignment",
                    "feature": "interfaces",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$refText": "EcoreClass"
                      }
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "instanceTypeName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "InstanceTypeName"
              }
            },
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
            "feature": "final",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "final"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "volatile",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "volatile"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "transient",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "transient"
            },
            "cardinality": "?"
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
            "feature": "boundDefinition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "BoundDefinition"
              }
            },
            "cardinality": "?",
            "elements": []
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
                    "feature": "lowerBound",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    },
                    "elements": []
                  },
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "upperBound",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "INT"
                      }
                    }
                  }
                ]
              },
              {
                "$type": "Assignment",
                "feature": "upperBound",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "arguments": [],
                  "rule": {
                    "$refText": "INT"
                  }
                },
                "elements": []
              }
            ],
            "cardinality": "?"
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
      "name": "InstanceTypeName",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "instanceTypeName",
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
            "feature": "final",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "final"
            },
            "cardinality": "?"
          },
          {
            "$type": "Alternatives",
            "elements": [
              {
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
                    "$type": "Assignment",
                    "feature": "references",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "ClassCrossReference"
                      }
                    }
                  }
                ]
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Assignment",
                    "feature": "refers",
                    "operator": "?=",
                    "terminal": {
                      "$type": "Keyword",
                      "value": "refers"
                    },
                    "elements": []
                  },
                  {
                    "$type": "Assignment",
                    "feature": "references",
                    "operator": "=",
                    "terminal": {
                      "$type": "RuleCall",
                      "arguments": [],
                      "rule": {
                        "$refText": "ClassReference"
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "$type": "Assignment",
            "feature": "boundDefinition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "BoundDefinition"
              }
            },
            "cardinality": "?",
            "elements": []
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
            "operator": "=",
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
      "$type": "ParserRule",
      "parameters": [],
      "name": "ClassReference",
      "hiddenTokens": [],
      "alternatives": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "classReference",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$refText": "EcoreClass"
              }
            },
            "elements": []
          },
          {
            "$type": "Assignment",
            "feature": "BoundDefinition",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "arguments": [],
              "rule": {
                "$refText": "BoundDefinition"
              }
            },
            "cardinality": "?"
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
