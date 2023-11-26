
/* eslint-disable semi, eol-last, object-curly-spacing, key-spacing, quote-props, comma-spacing, quotes, no-unused-vars, comma-dangle */

interface Squad {
  id: string;
  recruit: { front: string; back: string };
  contents: { front: string; back: string }[];
  available_slots: {
    'M1': number,
    'M2': number,
    'D1': number,
    'D2': number,
    'G1': number,
    'G2': number,
   };
  type: string;
  subtype: string;
  size: number;
  slots: string;
  source: string;
  box: string;
  faction: string;
  cost: number;
  platoon: string;
  orders: number;
}

interface Database {
    [faction: string]: {
        [box: string]: {
            [platoon: string]: {
                [type: string]: {
                    [subtype: string]: {
                        [id: string]: Squad;
                    };
                };
            };
        };
    };
}
 export const dataBase: Database = {
  "CW": {
    "army-box-cw": {
      "command": {
        "rc-plat": {
          "M1-D1-0-G2": {
            "HoN-v1-army-box-cw-cw-command-recruitment-tile-field-command_a =": {
              "id": "HoN-v1-army-box-cw-cw-command-recruitment-tile-field-command_a =",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/recruitment-tile-field-command_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/recruitment-tile-field-command_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 35,
              "platoon": "command",
              "orders": 0
            }
          },
          "M2-M1-0-M1-M2": {
            "HoN-v1-army-box-cw-cw-command-recruitment-tile-high-command_a": {
              "id": "HoN-v1-army-box-cw-cw-command-recruitment-tile-high-command_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/recruitment-tile-high-command_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/recruitment-tile-high-command_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-cw-cw-command-option-concealed-ab": {
              "id": "HoN-v1-army-box-cw-cw-command-option-concealed-ab",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-concealed-ab.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-concealed-ab.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-planning": {
              "id": "HoN-v1-army-box-cw-cw-command-option-planning",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-planning.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-planning.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 1
            },
            "HoN-v1-army-box-cw-cw-command-option-smoke-x3": {
              "id": "HoN-v1-army-box-cw-cw-command-option-smoke-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-smoke-x3.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-smoke-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-artillery-x1": {
              "id": "HoN-v1-army-box-cw-cw-command-option-artillery-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-artillery-x1.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-artillery-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-directive-x1": {
              "id": "HoN-v1-army-box-cw-cw-command-option-directive-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-directive-x1.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-directive-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-initiative": {
              "id": "HoN-v1-army-box-cw-cw-command-option-initiative",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-initiative.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-initiative.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-airstrike-x1": {
              "id": "HoN-v1-army-box-cw-cw-command-option-airstrike-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-airstrike-x1.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-airstrike-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-army-box-cw-cw-command-option-directive-x3": {
              "id": "HoN-v1-army-box-cw-cw-command-option-directive-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-directive-x3.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-directive-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 40,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-battle-plan": {
              "id": "HoN-v1-army-box-cw-cw-command-option-battle-plan",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-battle-plan.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-battle-plan.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 25,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-artillery-x3": {
              "id": "HoN-v1-army-box-cw-cw-command-option-artillery-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-artillery-x3.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-artillery-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 30,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-concealed-cd": {
              "id": "HoN-v1-army-box-cw-cw-command-option-concealed-cd",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-concealed-cd.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-concealed-cd.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-command-option-airstrike-x3": {
              "id": "HoN-v1-army-box-cw-cw-command-option-airstrike-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/command/option-airstrike-x3.png",
                "back": "res/HoN-v1/army-box-cw/cw/command/option-airstrike-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 20,
              "platoon": "command",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "gear": {
          "1": {
            "HoN-v1-army-box-cw-cw-generic-fuel-option": {
              "id": "HoN-v1-army-box-cw-cw-generic-fuel-option",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/fuel-option.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/fuel-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-ammo-option": {
              "id": "HoN-v1-army-box-cw-cw-generic-ammo-option",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/ammo-option.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/ammo-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-veteran-option": {
              "id": "HoN-v1-army-box-cw-cw-generic-veteran-option",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/veteran-option.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/veteran-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-grenade-option": {
              "id": "HoN-v1-army-box-cw-cw-generic-grenade-option",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/grenade-option.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/grenade-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-army-box-cw-cw-generic-option-staghound_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-option-staghound_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/option-staghound_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/option-staghound_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 35,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-option-universal-carrier_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-option-universal-carrier_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/option-universal-carrier_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/option-universal-carrier_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-army-box-cw-cw-generic-option-churchill-avre_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-option-churchill-avre_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/option-churchill-avre_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/option-churchill-avre_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 75,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-army-box-cw-cw-generic-option-vickers-mg_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-option-vickers-mg_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/option-vickers-mg_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/option-vickers-mg_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 20,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-cw-cw-generic-recruitment-tile-sasha_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-recruitment-tile-sasha_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-sasha_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-sasha_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-recruitment-tile-walter-pipkin_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-recruitment-tile-walter-pipkin_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-walter-pipkin_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-walter-pipkin_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 85,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-generic-recruitment-tile-ernest-smokey-smith_a": {
              "id": "HoN-v1-army-box-cw-cw-generic-recruitment-tile-ernest-smokey-smith_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-ernest-smokey-smith_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/generic/recruitment-tile-ernest-smokey-smith_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "rifle-platoon": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "HoN-v1-army-box-cw-cw-rifle-platoon-recruitment-tile-suffolk-regiment_a": {
              "id": "HoN-v1-army-box-cw-cw-rifle-platoon-recruitment-tile-suffolk-regiment_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/rifle-platoon/recruitment-tile-suffolk-regiment_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/rifle-platoon/recruitment-tile-suffolk-regiment_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 95,
              "platoon": "rifle-platoon",
              "orders": 1
            }
          }
        },
        "ft-inf": {
          "2": {
            "184930200134564876123E51217030AD1DF3A879AB79544DBF46E7A437B": {
              "id": "184930200134564876123E51217030AD1DF3A879AB79544DBF46E7A437B",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-support_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-support_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 65,
              "platoon": "rifle-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-rifle-platoon-option-piat-platoon_a": {
              "id": "HoN-v1-army-box-cw-cw-rifle-platoon-option-piat-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-piat-platoon_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-piat-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 60,
              "platoon": "rifle-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-rifle-platoon-option-bren-platoon_a": {
              "id": "HoN-v1-army-box-cw-cw-rifle-platoon-option-bren-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-bren-platoon_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/rifle-platoon/option-bren-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 60,
              "platoon": "rifle-platoon",
              "orders": 0
            }
          }
        }
      },
      "tank-platoon": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "HoN-v1-army-box-cw-cw-tank-platoon-recruitment-tile-4th-county-of-london-yeomanry_a": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-recruitment-tile-4th-county-of-london-yeomanry_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/recruitment-tile-4th-county-of-london-yeomanry_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/recruitment-tile-4th-county-of-london-yeomanry_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 120,
              "platoon": "tank-platoon",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-cw-cw-tank-platoon-option-apc-shells": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-option-apc-shells",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-apc-shells.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-apc-shells.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "tank-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-tank-platoon-option-ace-driver": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-option-ace-driver",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-ace-driver.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-ace-driver.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 5,
              "platoon": "tank-platoon",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-army-box-cw-cw-tank-platoon-option-cromwell-mkvii_a": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-option-cromwell-mkvii_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-cromwell-mkvii_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-cromwell-mkvii_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 65,
              "platoon": "tank-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-tank-platoon-option-troop_a": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-option-troop_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-troop_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-troop_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 130,
              "platoon": "tank-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-tank-platoon-option-sherman-firefly_a": {
              "id": "HoN-v1-army-box-cw-cw-tank-platoon-option-sherman-firefly_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-sherman-firefly_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/tank-platoon/option-sherman-firefly_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 65,
              "platoon": "tank-platoon",
              "orders": 0
            }
          }
        }
      },
      "weapon-platoon": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "HoN-v1-army-box-cw-cw-weapon-platoon-recruitment-tile-regiment-de-la-chaudiere_a": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-recruitment-tile-regiment-de-la-chaudiere_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/recruitment-tile-regiment-de-la-chaudiere_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/recruitment-tile-regiment-de-la-chaudiere_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 55,
              "platoon": "weapon-platoon",
              "orders": 1
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-cw-cw-weapon-platoon-option-trigger-happy": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-option-trigger-happy",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-trigger-happy.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-trigger-happy.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 10,
              "platoon": "weapon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-weapon-platoon-option-ammo-belt": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-option-ammo-belt",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-ammo-belt.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-ammo-belt.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 20,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-army-box-cw-cw-weapon-platoon-option-mechanized_a": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-option-mechanized_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mechanized_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mechanized_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 60,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-army-box-cw-cw-weapon-platoon-option-mg-platoon_a": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-option-mg-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mg-platoon_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mg-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 70,
              "platoon": "weapon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-cw-cw-weapon-platoon-option-mortar-platoon_a": {
              "id": "HoN-v1-army-box-cw-cw-weapon-platoon-option-mortar-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mortar-platoon_b.png",
                "back": "res/HoN-v1/army-box-cw/cw/weapon-platoon/option-mortar-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-cw",
              "faction": "CW",
              "cost": 65,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        }
      }
    },
    "east-yorkshire-regiment": {
      "east-yorkshire-regiment": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-recruitment-tile_a": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/recruitment-tile_b.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 55,
              "platoon": "east-yorkshire-regiment",
              "orders": 1
            }
          }
        },
        "gear": {
          "1": {
            "184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B": {
              "id": "184930200134564372150355333A49E00F2EF9CFE724EE3EBB42ABF624B",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/hardboiled-option.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/hardboiled-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-V1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 5,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            },
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-ammo-belt-option": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-ammo-belt-option",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/ammo-belt-option.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/ammo-belt-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 20,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-universal-carrier-option_a": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-universal-carrier-option_a",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/universal-carrier-option_b.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/universal-carrier-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 30,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-mg-platoon_a": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-mg-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/mg-platoon_b.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/mg-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 40,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-at-gun-platoon_a": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-at-gun-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/at-gun-platoon_b.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/at-gun-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 55,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            },
            "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-mortar-platoon-option_a": {
              "id": "HoN-v1-east-yorkshire-regiment-cw-east-yorkshire-regiment-mortar-platoon-option_a",
              "recruit": {
                "front": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/mortar-platoon-option_b.png",
                "back": "res/HoN-v1/east-yorkshire-regiment/cw/east-yorkshire-regiment/mortar-platoon-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "east-yorkshire-regiment",
              "faction": "CW",
              "cost": 35,
              "platoon": "east-yorkshire-regiment",
              "orders": 0
            }
          }
        }
      }
    },
    "gazette-2": {
      "generic": {
        "rc-plat": {
          "D2-0-G1-D1": {
            "HoN-v1-gazette-2-cw-generic-recruitment-tile_a": {
              "id": "HoN-v1-gazette-2-cw-generic-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/recruitment-tile_b.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-G1-D1",
              "size": NaN,
              "slots": "D2-0-G1-D1",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-gazette-2-cw-generic-ap-shells-option": {
              "id": "HoN-v1-gazette-2-cw-generic-ap-shells-option",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/ap-shells-option.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/ap-shells-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-2-cw-generic-he-shells-option": {
              "id": "HoN-v1-gazette-2-cw-generic-he-shells-option",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/he-shells-option.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/he-shells-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-gazette-2-cw-generic-churchill-crocodile-option_a": {
              "id": "HoN-v1-gazette-2-cw-generic-churchill-crocodile-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/churchill-crocodile-option_b.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/churchill-crocodile-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 95,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-2-cw-generic-sherman-crab-option_a": {
              "id": "HoN-v1-gazette-2-cw-generic-sherman-crab-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/sherman-crab-option_b.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/sherman-crab-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 75,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-2-cw-generic-churchill-ark-mark-1-option_a": {
              "id": "HoN-v1-gazette-2-cw-generic-churchill-ark-mark-1-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-2/cw/generic/churchill-ark-mark-1-option_b.png",
                "back": "res/HoN-v1/gazette-2/cw/generic/churchill-ark-mark-1-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-2",
              "faction": "CW",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "lord-lovat_s-commandos": {
      "lord-lovats-commandos": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-lord-lovats-commandos_a": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-lord-lovats-commandos_a",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-lord-lovats-commandos_b.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-lord-lovats-commandos_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 130,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-infiltrated-option": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-infiltrated-option",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/infiltrated-option.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/infiltrated-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 10,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            },
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-sticky-bomb-option": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-sticky-bomb-option",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/sticky-bomb-option.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/sticky-bomb-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 10,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            },
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-knife-option": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-knife-option",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/knife-option.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/knife-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 15,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            },
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-ferocious-option": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-ferocious-option",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/ferocious-option.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/ferocious-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 10,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-bazooka-option_a": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-bazooka-option_a",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/bazooka-option_b.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/bazooka-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 15,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            },
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-vickers-mg-option_a": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-vickers-mg-option_a",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/vickers-mg-option_b.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/vickers-mg-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 20,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            }
          }
        },
        "rc-hero": {
          "0": {
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-mad-jack-churchill_a": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-mad-jack-churchill_a",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-mad-jack-churchill_b.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-mad-jack-churchill_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 35,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            },
            "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-bill-millin_a": {
              "id": "HoN-v1-lord-lovat_s-commandos-cw-lord-lovats-commandos-recruitment-tile-bill-millin_a",
              "recruit": {
                "front": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-bill-millin_b.png",
                "back": "res/HoN-v1/lord-lovat_s-commandos/cw/lord-lovats-commandos/recruitment-tile-bill-millin_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "lord-lovat_s-commandos",
              "faction": "CW",
              "cost": 20,
              "platoon": "lord-lovats-commandos",
              "orders": 0
            }
          }
        }
      }
    },
    "royal-winnipeg-rifles": {
      "royal-winnipeg-rifles": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-recruitment-tile_a": {
              "id": "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/recruitment-tile_b.png",
                "back": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-v1",
              "box": "royal-winnipeg-rifles",
              "faction": "CW",
              "cost": 95,
              "platoon": "royal-winnipeg-rifles",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-woddsmen-option": {
              "id": "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-woddsmen-option",
              "recruit": {
                "front": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/woddsmen-option.png",
                "back": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/woddsmen-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "royal-winnipeg-rifles",
              "faction": "CW",
              "cost": 15,
              "platoon": "royal-winnipeg-rifles",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-mechanized-piat_a": {
              "id": "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-mechanized-piat_a",
              "recruit": {
                "front": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/mechanized-piat_b.png",
                "back": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/mechanized-piat_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "royal-winnipeg-rifles",
              "faction": "CW",
              "cost": 70,
              "platoon": "royal-winnipeg-rifles",
              "orders": 0
            },
            "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-mechanized-bren_a": {
              "id": "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-mechanized-bren_a",
              "recruit": {
                "front": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/mechanized-bren_b.png",
                "back": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/mechanized-bren_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "royal-winnipeg-rifles",
              "faction": "CW",
              "cost": 75,
              "platoon": "royal-winnipeg-rifles",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-bren-platoon_a": {
              "id": "HoN-v1-royal-winnipeg-rifles-cw-royal-winnipeg-rifles-bren-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/bren-platoon_b.png",
                "back": "res/HoN-v1/royal-winnipeg-rifles/cw/royal-winnipeg-rifles/bren-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "royal-winnipeg-rifles",
              "faction": "CW",
              "cost": 65,
              "platoon": "royal-winnipeg-rifles",
              "orders": 0
            }
          }
        }
      }
    }
  },
  "GE": {
    "army-box-ge": {
      "command": {
        "rc-plat": {
          "M2-M1-0-M1-M2": {
            "HoN-v1-army-box-ge-ge-command-recruitment-tile-divisionsstab_a": {
              "id": "HoN-v1-army-box-ge-ge-command-recruitment-tile-divisionsstab_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/recruitment-tile-divisionsstab_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/recruitment-tile-divisionsstab_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-ge-ge-command-option-airstrike-x1": {
              "id": "HoN-v1-army-box-ge-ge-command-option-airstrike-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-airstrike-x1.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-airstrike-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-directive-x1": {
              "id": "HoN-v1-army-box-ge-ge-command-option-directive-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-directive-x1.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-directive-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-planning": {
              "id": "HoN-v1-army-box-ge-ge-command-option-planning",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-planning.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-planning.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "command",
              "orders": 1
            },
            "HoN-v1-army-box-ge-ge-command-option-smoke": {
              "id": "HoN-v1-army-box-ge-ge-command-option-smoke",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-smoke.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-smoke.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-army-box-ge-ge-command-option-field-artillery-x3": {
              "id": "HoN-v1-army-box-ge-ge-command-option-field-artillery-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-field-artillery-x3.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-field-artillery-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 30,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-guardian": {
              "id": "HoN-v1-army-box-ge-ge-command-option-guardian",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-guardian.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-guardian.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 30,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-battle-plan": {
              "id": "HoN-v1-army-box-ge-ge-command-option-battle-plan",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-battle-plan.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-battle-plan.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 30,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-directive-x3": {
              "id": "HoN-v1-army-box-ge-ge-command-option-directive-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-directive-x3.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-directive-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 40,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-command-option-improvisation": {
              "id": "HoN-v1-army-box-ge-ge-command-option-improvisation",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-improvisation.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-improvisation.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 20,
              "platoon": "command",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-army-box-ge-ge-command-option-granatwerfer-gruppe_a": {
              "id": "HoN-v1-army-box-ge-ge-command-option-granatwerfer-gruppe_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/command/option-granatwerfer-gruppe_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/command/option-granatwerfer-gruppe_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 60,
              "platoon": "command",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-ge-ge-generic-recruitment-tile-fritz_a": {
              "id": "HoN-v1-army-box-ge-ge-generic-recruitment-tile-fritz_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/generic/recruitment-tile-fritz_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/generic/recruitment-tile-fritz_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 0,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-ge-ge-generic-option-sharpshooters": {
              "id": "HoN-v1-army-box-ge-ge-generic-option-sharpshooters",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/generic/option-sharpshooters.png",
                "back": "res/HoN-v1/army-box-ge/ge/generic/option-sharpshooters.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-army-box-ge-ge-generic-option-magnetic-mine": {
              "id": "HoN-v1-army-box-ge-ge-generic-option-magnetic-mine",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/generic/option-magnetic-mine.png",
                "back": "res/HoN-v1/army-box-ge/ge/generic/option-magnetic-mine.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-army-box-ge-ge-generic-option-sd-kfz-251-1_a": {
              "id": "HoN-v1-army-box-ge-ge-generic-option-sd-kfz-251-1_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/generic/option-sd-kfz-251-1_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/generic/option-sd-kfz-251-1_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "panzer-gruppe": {
        "rc-plat": {
          "M1-D1-0-D2": {
            "HoN-v1-army-box-ge-ge-panzer-gruppe-recruitment-tile-panzergruppe_a": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-recruitment-tile-panzergruppe_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/recruitment-tile-panzergruppe_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/recruitment-tile-panzergruppe_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-D2",
              "size": NaN,
              "slots": "M1-D1-0-D2",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 130,
              "platoon": "panzer-gruppe",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-ge-ge-panzer-gruppe-option-fuel": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-option-fuel",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-fuel.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-fuel.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 5,
              "platoon": "panzer-gruppe",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-panzer-gruppe-option-apc-shell": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-option-apc-shell",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-apc-shell.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-apc-shell.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "panzer-gruppe",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-army-box-ge-ge-panzer-gruppe-option-panther-a_a": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-option-panther-a_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-panther-a_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-panther-a_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 80,
              "platoon": "panzer-gruppe",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-panzer-gruppe-option-stug-iv_a": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-option-stug-iv_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-stug-iv_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-stug-iv_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 65,
              "platoon": "panzer-gruppe",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-panzer-gruppe-option-stug-iv-group_a": {
              "id": "HoN-v1-army-box-ge-ge-panzer-gruppe-option-stug-iv-group_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-stug-iv-group_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzer-gruppe/option-stug-iv-group_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 130,
              "platoon": "panzer-gruppe",
              "orders": 0
            }
          }
        }
      },
      "panzergrenadiere": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "HoN-v1-army-box-ge-ge-panzergrenadiere-recruitment-tile-panzergrenadiere_a": {
              "id": "HoN-v1-army-box-ge-ge-panzergrenadiere-recruitment-tile-panzergrenadiere_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/recruitment-tile-panzergrenadiere_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/recruitment-tile-panzergrenadiere_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 65,
              "platoon": "panzergrenadiere",
              "orders": 2
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-army-box-ge-ge-panzergrenadiere-option-panzergrenadiere_a": {
              "id": "HoN-v1-army-box-ge-ge-panzergrenadiere-option-panzergrenadiere_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-panzergrenadiere_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-panzergrenadiere_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 45,
              "platoon": "panzergrenadiere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-panzergrenadiere-option-support-group_a": {
              "id": "HoN-v1-army-box-ge-ge-panzergrenadiere-option-support-group_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-support-group_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-support-group_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 50,
              "platoon": "panzergrenadiere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-panzergrenadiere-option-ambush-group_a": {
              "id": "HoN-v1-army-box-ge-ge-panzergrenadiere-option-ambush-group_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-ambush-group_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/panzergrenadiere/option-ambush-group_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 40,
              "platoon": "panzergrenadiere",
              "orders": 0
            }
          }
        }
      },
      "sturmpioniere": {
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-ge-ge-sturmpioniere-recruitment-tile-oros-snowt_a": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-recruitment-tile-oros-snowt_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/recruitment-tile-oros-snowt_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/recruitment-tile-oros-snowt_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 35,
              "platoon": "sturmpioniere",
              "orders": 0
            }
          }
        },
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "HoN-v1-army-box-ge-ge-sturmpioniere-recruitment-tile-sturmpioniere_a": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-recruitment-tile-sturmpioniere_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/recruitment-tile-sturmpioniere_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/recruitment-tile-sturmpioniere_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 110,
              "platoon": "sturmpioniere",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-tankbuster": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-tankbuster",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-tankbuster.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-tankbuster.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 20,
              "platoon": "sturmpioniere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-goliath": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-goliath",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-goliath.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-goliath.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 15,
              "platoon": "sturmpioniere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-ferocious": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-ferocious",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-ferocious.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-ferocious.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "sturmpioniere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-position": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-position",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-position.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-position.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "sturmpioniere",
              "orders": 0
            },
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-demolition-charge": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-demolition-charge",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-demolition-charge.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-demolition-charge.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 10,
              "platoon": "sturmpioniere",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-schwimmwagen_a": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-schwimmwagen_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-schwimmwagen_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-schwimmwagen_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 25,
              "platoon": "sturmpioniere",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-army-box-ge-ge-sturmpioniere-option-assault-group_a": {
              "id": "HoN-v1-army-box-ge-ge-sturmpioniere-option-assault-group_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-assault-group_b.png",
                "back": "res/HoN-v1/army-box-ge/ge/sturmpioniere/option-assault-group_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-ge",
              "faction": "GE",
              "cost": 75,
              "platoon": "sturmpioniere",
              "orders": 0
            }
          }
        }
      }
    },
    "carentan": {
      "command": {
        "gear": {
          "2": {
            "1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33": {
              "id": "1849302001345581428E251FF46FD43F43D699BE2097B8AD1A4E52FFF33",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/feldkommando/fortified-option.png",
                "back": "res/HoN-v1/carentan/ge/feldkommando/fortified-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 25,
              "platoon": "command",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "ft-vehicle": {
          "1": {
            "HoN-v1-carentan-ge-options-sd-kfz-10-5-option_a": {
              "id": "HoN-v1-carentan-ge-options-sd-kfz-10-5-option_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/options/sd-kfz-10-5-option_b.png",
                "back": "res/HoN-v1/carentan/ge/options/sd-kfz-10-5-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-carentan-ge-options-flak-38-quad-option_a": {
              "id": "HoN-v1-carentan-ge-options-flak-38-quad-option_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/options/flak-38-quad-option_b.png",
                "back": "res/HoN-v1/carentan/ge/options/flak-38-quad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-carentan-ge-options-recruitment-tile-osttruppen-battalion_a": {
              "id": "HoN-v1-carentan-ge-options-recruitment-tile-osttruppen-battalion_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/options/recruitment-tile-osttruppen-battalion_b.png",
                "back": "res/HoN-v1/carentan/ge/options/recruitment-tile-osttruppen-battalion_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 45,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "grenadiere-regiment": {
        "rc-plat": {
          "D2-0-G1-G1": {
            "HoN-v1-carentan-ge-grenadiere-regiment-recruitment-tile-grenadier-regiment-1058_a": {
              "id": "HoN-v1-carentan-ge-grenadiere-regiment-recruitment-tile-grenadier-regiment-1058_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/grenadiere-regiment/recruitment-tile-grenadier-regiment-1058_b.png",
                "back": "res/HoN-v1/carentan/ge/grenadiere-regiment/recruitment-tile-grenadier-regiment-1058_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-G1-G1",
              "size": NaN,
              "slots": "D2-0-G1-G1",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 70,
              "platoon": "grenadiere-regiment",
              "orders": 2
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-carentan-ge-grenadiere-regiment-panzerschreck-group-option_a": {
              "id": "HoN-v1-carentan-ge-grenadiere-regiment-panzerschreck-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/grenadiere-regiment/panzerschreck-group-option_b.png",
                "back": "res/HoN-v1/carentan/ge/grenadiere-regiment/panzerschreck-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 60,
              "platoon": "grenadiere-regiment",
              "orders": 0
            },
            "HoN-v1-carentan-ge-grenadiere-regiment-mg42-group-option_a": {
              "id": "HoN-v1-carentan-ge-grenadiere-regiment-mg42-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/carentan/ge/grenadiere-regiment/mg42-group-option_b.png",
                "back": "res/HoN-v1/carentan/ge/grenadiere-regiment/mg42-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "carentan",
              "faction": "GE",
              "cost": 55,
              "platoon": "grenadiere-regiment",
              "orders": 0
            }
          }
        }
      }
    },
    "civilians-under-fire": {
      "gestapo": {
        "rc-plat": {
          "M2-0-G1-D1": {
            "HoN-v1-civilians-under-fire-ge-gestapo-recruitment-tile-ilda_a": {
              "id": "HoN-v1-civilians-under-fire-ge-gestapo-recruitment-tile-ilda_a",
              "recruit": {
                "front": "res/HoN-v1/civilians-under-fire/ge/gestapo/recruitment-tile-ilda_b.png",
                "back": "res/HoN-v1/civilians-under-fire/ge/gestapo/recruitment-tile-ilda_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-0-G1-D1",
              "size": NaN,
              "slots": "M2-0-G1-D1",
              "source": "HoN-v1",
              "box": "civilians-under-fire",
              "faction": "GE",
              "cost": 65,
              "platoon": "gestapo",
              "orders": 1
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-civilians-under-fire-ge-gestapo-option-opel-blitz_a": {
              "id": "HoN-v1-civilians-under-fire-ge-gestapo-option-opel-blitz_a",
              "recruit": {
                "front": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-opel-blitz_b.png",
                "back": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-opel-blitz_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "civilians-under-fire",
              "faction": "GE",
              "cost": 10,
              "platoon": "gestapo",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-civilians-under-fire-ge-gestapo-option-untersuchung_a": {
              "id": "HoN-v1-civilians-under-fire-ge-gestapo-option-untersuchung_a",
              "recruit": {
                "front": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-untersuchung_b.png",
                "back": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-untersuchung_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "civilians-under-fire",
              "faction": "GE",
              "cost": 75,
              "platoon": "gestapo",
              "orders": 0
            },
            "HoN-v1-civilians-under-fire-ge-gestapo-option-hundestaffel_a": {
              "id": "HoN-v1-civilians-under-fire-ge-gestapo-option-hundestaffel_a",
              "recruit": {
                "front": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-hundestaffel_b.png",
                "back": "res/HoN-v1/civilians-under-fire/ge/gestapo/option-hundestaffel_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "civilians-under-fire",
              "faction": "GE",
              "cost": 75,
              "platoon": "gestapo",
              "orders": 0
            }
          }
        }
      }
    },
    "d-day": {
      "festungskompagnie": {
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "HoN-v1-d-day-ge-festungskompagnie-recruitment-tile_a": {
              "id": "HoN-v1-d-day-ge-festungskompagnie-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/festungskompagnie/recruitment-tile_b.png",
                "back": "res/HoN-v1/d-day/ge/festungskompagnie/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 70,
              "platoon": "festungskompagnie",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-d-day-ge-festungskompagnie-ammo-belt-option": {
              "id": "HoN-v1-d-day-ge-festungskompagnie-ammo-belt-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/festungskompagnie/ammo-belt-option.png",
                "back": "res/HoN-v1/d-day/ge/festungskompagnie/ammo-belt-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 20,
              "platoon": "festungskompagnie",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-d-day-ge-festungskompagnie-mortar-group-option_a": {
              "id": "HoN-v1-d-day-ge-festungskompagnie-mortar-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/festungskompagnie/mortar-group-option_b.png",
                "back": "res/HoN-v1/d-day/ge/festungskompagnie/mortar-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 45,
              "platoon": "festungskompagnie",
              "orders": 0
            },
            "HoN-v1-d-day-ge-festungskompagnie-defense-group-option_a": {
              "id": "HoN-v1-d-day-ge-festungskompagnie-defense-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/festungskompagnie/defense-group-option_b.png",
                "back": "res/HoN-v1/d-day/ge/festungskompagnie/defense-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 45,
              "platoon": "festungskompagnie",
              "orders": 0
            },
            "HoN-v1-d-day-ge-festungskompagnie-hmg-42-group-option_a": {
              "id": "HoN-v1-d-day-ge-festungskompagnie-hmg-42-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/festungskompagnie/hmg-42-group-option_b.png",
                "back": "res/HoN-v1/d-day/ge/festungskompagnie/hmg-42-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 50,
              "platoon": "festungskompagnie",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "gear": {
          "1": {
            "HoN-v1-d-day-ge-generic-artillery-spotter-option_a": {
              "id": "HoN-v1-d-day-ge-generic-artillery-spotter-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/generic/artillery-spotter-option_b.png",
                "back": "res/HoN-v1/d-day/ge/generic/artillery-spotter-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-d-day-ge-generic-7-5cm-ig-18-gun-option_a": {
              "id": "HoN-v1-d-day-ge-generic-7-5cm-ig-18-gun-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/ge/generic/7-5cm-ig-18-gun-option_b.png",
                "back": "res/HoN-v1/d-day/ge/generic/7-5cm-ig-18-gun-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "GE",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "extra-units-us-_-ge": {
      "generic": {
        "ft-vehicle": {
          "1": {
            "HoN-v1-extra-units-us-_-ge-ge-generic-puma-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-ge-generic-puma-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/ge/generic/puma-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/ge/generic/puma-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "GE",
              "cost": 40,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-extra-units-us-_-ge-ge-generic-panzer-ii-luchs-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-ge-generic-panzer-ii-luchs-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/ge/generic/panzer-ii-luchs-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/ge/generic/panzer-ii-luchs-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "GE",
              "cost": 50,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-extra-units-us-_-ge-ge-generic-flammpanzerwagen-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-ge-generic-flammpanzerwagen-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/ge/generic/flammpanzerwagen-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/ge/generic/flammpanzerwagen-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "GE",
              "cost": 40,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-extra-units-us-_-ge-ge-generic-flak-38-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-ge-generic-flak-38-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/ge/generic/flak-38-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/ge/generic/flak-38-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "GE",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "gazette-1": {
      "generic": {
        "gear": {
          "0": {
            "HoN-v1-gazette-1-ge-generic-recruitment-tile-minefield-small": {
              "id": "HoN-v1-gazette-1-ge-generic-recruitment-tile-minefield-small",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/recruitment-tile-minefield-small.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/recruitment-tile-minefield-small.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 50,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-recruitment-tile-minefield-large": {
              "id": "HoN-v1-gazette-1-ge-generic-recruitment-tile-minefield-large",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/recruitment-tile-minefield-large.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/recruitment-tile-minefield-large.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 45,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-gazette-1-ge-generic-10-5-cm-lefh18-option_a": {
              "id": "HoN-v1-gazette-1-ge-generic-10-5-cm-lefh18-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/10-5-cm-lefh18-option_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/10-5-cm-lefh18-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 40,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-minensucher-option_a": {
              "id": "HoN-v1-gazette-1-ge-generic-minensucher-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/minensucher-option_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/minensucher-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-minesweepers-cw-option_a": {
              "id": "HoN-v1-gazette-1-ge-generic-minesweepers-cw-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/minesweepers-cw-option_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/minesweepers-cw-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-75mm-pack-howitzer-m8-option-us_a": {
              "id": "HoN-v1-gazette-1-ge-generic-75mm-pack-howitzer-m8-option-us_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/75mm-pack-howitzer-m8-option-us_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/75mm-pack-howitzer-m8-option-us_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-57mm-at-gun-option_a": {
              "id": "HoN-v1-gazette-1-ge-generic-57mm-at-gun-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/57mm-at-gun-option_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/57mm-at-gun-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 20,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-gazette-1-ge-generic-minesweepers-us-option_a": {
              "id": "HoN-v1-gazette-1-ge-generic-minesweepers-us-option_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/minesweepers-us-option_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/minesweepers-us-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-gazette-1-ge-generic-75mm-pack-howitzer-m8-option-cw_a": {
              "id": "HoN-v1-gazette-1-ge-generic-75mm-pack-howitzer-m8-option-cw_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-1/ge/generic/75mm-pack-howitzer-m8-option-cw_b.png",
                "back": "res/HoN-v1/gazette-1/ge/generic/75mm-pack-howitzer-m8-option-cw_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-1",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "gazette-8": {
      "recruitment-reserve-gebirgsjager-regiment": {
        "rc-plat": {
          "M2-0-G1": {
            "HoN-v1-gazette-8-ge-recruitment-reserve-gebirgsjager-regiment-recruitment-reserve-gebirgsjager-regiment-1_a": {
              "id": "HoN-v1-gazette-8-ge-recruitment-reserve-gebirgsjager-regiment-recruitment-reserve-gebirgsjager-regiment-1_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-8/ge/recruitment-reserve-gebirgsjager-regiment/recruitment-reserve-gebirgsjager-regiment-1_b.png",
                "back": "res/HoN-v1/gazette-8/ge/recruitment-reserve-gebirgsjager-regiment/recruitment-reserve-gebirgsjager-regiment-1_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-0-G1",
              "size": NaN,
              "slots": "M2-0-G1",
              "source": "HoN-v1",
              "box": "gazette-8",
              "faction": "GE",
              "cost": 80,
              "platoon": "recruitment-reserve-gebirgsjager-regiment",
              "orders": 1
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-gazette-8-ge-recruitment-reserve-gebirgsjager-regiment-option-gebirgsjager_a": {
              "id": "HoN-v1-gazette-8-ge-recruitment-reserve-gebirgsjager-regiment-option-gebirgsjager_a",
              "recruit": {
                "front": "res/HoN-v1/gazette-8/ge/recruitment-reserve-gebirgsjager-regiment/option-gebirgsjager_b.png",
                "back": "res/HoN-v1/gazette-8/ge/recruitment-reserve-gebirgsjager-regiment/option-gebirgsjager_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "gazette-8",
              "faction": "GE",
              "cost": 50,
              "platoon": "recruitment-reserve-gebirgsjager-regiment",
              "orders": 0
            }
          }
        }
      }
    },
    "hon-core": {
      "feldkommando": {
        "rc-plat": {
          "M1-D1-0-G2": {
            "HoN-v1-hon-core-ge-feldkommando-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-ge-feldkommando-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/feldkommando/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/ge/feldkommando/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 30,
              "platoon": "feldkommando",
              "orders": 1
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-hon-core-ge-feldkommando-concealed_option": {
              "id": "HoN-v1-hon-core-ge-feldkommando-concealed_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/feldkommando/concealed_option.png",
                "back": "res/HoN-v1/hon-core/ge/feldkommando/concealed_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 10,
              "platoon": "feldkommando",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-feldkommando-bluff_option": {
              "id": "HoN-v1-hon-core-ge-feldkommando-bluff_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/feldkommando/bluff_option.png",
                "back": "res/HoN-v1/hon-core/ge/feldkommando/bluff_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 5,
              "platoon": "feldkommando",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-feldkommando-planning_option": {
              "id": "HoN-v1-hon-core-ge-feldkommando-planning_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/feldkommando/planning_option.png",
                "back": "res/HoN-v1/hon-core/ge/feldkommando/planning_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 10,
              "platoon": "feldkommando",
              "orders": 1
            },
            "HoN-v1-hon-core-ge-feldkommando-mg_nest_option": {
              "id": "HoN-v1-hon-core-ge-feldkommando-mg_nest_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/feldkommando/mg_nest_option.png",
                "back": "res/HoN-v1/hon-core/ge/feldkommando/mg_nest_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 25,
              "platoon": "feldkommando",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "rc-hero": {
          "0": {
            "HoN-v1-hon-core-ge-generic-recruitment_tile_helmut_a": {
              "id": "HoN-v1-hon-core-ge-generic-recruitment_tile_helmut_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_helmut_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_helmut_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 20,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-recruitment_tile_ludwig_a": {
              "id": "HoN-v1-hon-core-ge-generic-recruitment_tile_ludwig_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_ludwig_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_ludwig_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-recruitment_tile_otto_a": {
              "id": "HoN-v1-hon-core-ge-generic-recruitment_tile_otto_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_otto_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/recruitment_tile_otto_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 75,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-hon-core-ge-generic-panzerfaust_option": {
              "id": "HoN-v1-hon-core-ge-generic-panzerfaust_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/panzerfaust_option.png",
                "back": "res/HoN-v1/hon-core/ge/generic/panzerfaust_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 20,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-veteran_option": {
              "id": "HoN-v1-hon-core-ge-generic-veteran_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/veteran_option.png",
                "back": "res/HoN-v1/hon-core/ge/generic/veteran_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-grenade_option": {
              "id": "HoN-v1-hon-core-ge-generic-grenade_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/grenade_option.png",
                "back": "res/HoN-v1/hon-core/ge/generic/grenade_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-ammo_option": {
              "id": "HoN-v1-hon-core-ge-generic-ammo_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/ammo_option.png",
                "back": "res/HoN-v1/hon-core/ge/generic/ammo_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-hon-core-ge-generic-puma_option_a": {
              "id": "HoN-v1-hon-core-ge-generic-puma_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/puma_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/puma_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 40,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-panzer_luchs_option_a": {
              "id": "HoN-v1-hon-core-ge-generic-panzer_luchs_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/panzer_luchs_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/panzer_luchs_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 50,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-zundapp_option_a": {
              "id": "HoN-v1-hon-core-ge-generic-zundapp_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/zundapp_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/zundapp_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-generic-panzer_iv_option_a": {
              "id": "HoN-v1-hon-core-ge-generic-panzer_iv_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/panzer_iv_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/panzer_iv_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 65,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-hon-core-ge-generic-pak40_option_a": {
              "id": "HoN-v1-hon-core-ge-generic-pak40_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/generic/pak40_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/generic/pak40_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "panzergrenadiere-901": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "HoN-v1-hon-core-ge-panzergrenadiere-901-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-901-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 65,
              "platoon": "panzergrenadiere-901",
              "orders": 2
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-hon-core-ge-panzergrenadiere-901-panzergrenadiere_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-901-panzergrenadiere_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/panzergrenadiere_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/panzergrenadiere_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 45,
              "platoon": "panzergrenadiere-901",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-panzergrenadiere-901-panzerschreck_group_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-901-panzerschreck_group_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/panzerschreck_group_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/panzerschreck_group_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 60,
              "platoon": "panzergrenadiere-901",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-panzergrenadiere-901-assault_group_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-901-assault_group_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/assault_group_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-901/assault_group_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 55,
              "platoon": "panzergrenadiere-901",
              "orders": 0
            }
          }
        }
      },
      "panzergrenadiere-902": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "HoN-v1-hon-core-ge-panzergrenadiere-902-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-902-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 70,
              "platoon": "panzergrenadiere-902",
              "orders": 2
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-hon-core-ge-panzergrenadiere-902-mechanisierte_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-902-mechanisierte_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/mechanisierte_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/mechanisierte_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 60,
              "platoon": "panzergrenadiere-902",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-hon-core-ge-panzergrenadiere-902-panzerschreck_group_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-902-panzerschreck_group_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/panzerschreck_group_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/panzerschreck_group_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 50,
              "platoon": "panzergrenadiere-902",
              "orders": 0
            },
            "HoN-v1-hon-core-ge-panzergrenadiere-902-panzergrenadiere_option_a": {
              "id": "HoN-v1-hon-core-ge-panzergrenadiere-902-panzergrenadiere_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/panzergrenadiere_option_b.png",
                "back": "res/HoN-v1/hon-core/ge/panzergrenadiere-902/panzergrenadiere_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "GE",
              "cost": 45,
              "platoon": "panzergrenadiere-902",
              "orders": 0
            }
          }
        }
      }
    },
    "karl-von-croc": {
      "generic": {
        "rc-hero": {
          "0-G1": {
            "HoN-v1-karl-von-croc-ge-generic-recruitment-tile_a": {
              "id": "HoN-v1-karl-von-croc-ge-generic-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/karl-von-croc/ge/generic/recruitment-tile_b.png",
                "back": "res/HoN-v1/karl-von-croc/ge/generic/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0-G1",
              "size": NaN,
              "slots": "0-G1",
              "source": "HoN-v1",
              "box": "karl-von-croc",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "promo-heroes-2014": {
      "generic": {
        "rc-hero": {
          "0": {
            "HoN-v1-promo-heroes-2014-ge-generic-recruitment-tile-siegfried_a": {
              "id": "HoN-v1-promo-heroes-2014-ge-generic-recruitment-tile-siegfried_a",
              "recruit": {
                "front": "res/HoN-v1/promo-heroes-2014/ge/generic/recruitment-tile-siegfried_b.png",
                "back": "res/HoN-v1/promo-heroes-2014/ge/generic/recruitment-tile-siegfried_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "promo-heroes-2014",
              "faction": "GE",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "sainte-m\u00e8re-eglise": {
      "generic": {
        "ft-vehicle": {
          "1": {
            "18493020013455803952FBB636DB8C481E3C6FECD4C2D9461DA42D1898E": {
              "id": "18493020013455803952FBB636DB8C481E3C6FECD4C2D9461DA42D1898E",
              "recruit": {
                "front": "res/HoN-v1/sainte-m\u00e8re-eglise/ge/generic/beutepanzer-r35-option_b",
                "back": "res/HoN-v1/sainte-m\u00e8re-eglise/ge/generic/beutepanzer-r35-option_b"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "sainte-m\u00e8re-eglise",
              "faction": "GE",
              "cost": 40,
              "platoon": "generic",
              "orders": 0
            },
            "1849302001345587180A1D20B7FD6C6F198A9C135F8D18063F1C2C9AC60": {
              "id": "1849302001345587180A1D20B7FD6C6F198A9C135F8D18063F1C2C9AC60",
              "recruit": {
                "front": "res/HoN-v1/sainte-m\u00e8re-eglise/ge/generic/beutepanzer-r35-x2-option_b",
                "back": "res/HoN-v1/sainte-m\u00e8re-eglise/ge/generic/beutepanzer-r35-x2-option_b"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "sainte-m\u00e8re-eglise",
              "faction": "GE",
              "cost": 80,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "ss-panzergrenadiere": {
      "ss-panzergrenadiere": {
        "rc-hero": {
          "0": {
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-recruitment-tile-von-kamptz_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-recruitment-tile-von-kamptz_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/recruitment-tile-von-kamptz_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/recruitment-tile-von-kamptz_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 30,
              "platoon": "ss-panzergrenadiere",
              "orders": 1
            }
          }
        },
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-recruitment-tile_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/recruitment-tile_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 100,
              "platoon": "ss-panzergrenadiere",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-bloodthirsty-option": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-bloodthirsty-option",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/bloodthirsty-option.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/bloodthirsty-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 25,
              "platoon": "ss-panzergrenadiere",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-stummel-option_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-stummel-option_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/stummel-option_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/stummel-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 25,
              "platoon": "ss-panzergrenadiere",
              "orders": 0
            },
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-schwimmwagen_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-schwimmwagen_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/schwimmwagen_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/schwimmwagen_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 25,
              "platoon": "ss-panzergrenadiere",
              "orders": 0
            },
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-ss-assault-group-option_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-ss-assault-group-option_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/ss-assault-group-option_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/ss-assault-group-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 75,
              "platoon": "ss-panzergrenadiere",
              "orders": 0
            },
            "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-ss-panzergrenadiere-option_a": {
              "id": "HoN-v1-ss-panzergrenadiere-ge-ss-panzergrenadiere-ss-panzergrenadiere-option_a",
              "recruit": {
                "front": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/ss-panzergrenadiere-option_b.png",
                "back": "res/HoN-v1/ss-panzergrenadiere/ge/ss-panzergrenadiere/ss-panzergrenadiere-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "ss-panzergrenadiere",
              "faction": "GE",
              "cost": 65,
              "platoon": "ss-panzergrenadiere",
              "orders": 0
            }
          }
        }
      }
    },
    "steiner-kampfgruppe": {
      "steiner-kampfgruppe": {
        "rc-plat": {
          "M1-M1-0-M2-M1": {
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-recruitment-tile_a": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/recruitment-tile_b.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 3,
                "M2": 1,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M1-M1-0-M2-M1",
              "size": NaN,
              "slots": "M1-M1-0-M2-M1",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 105,
              "platoon": "steiner-kampfgruppe",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E": {
              "id": "18493020013455880279503BD4CCB28858A880F3B962110FD573C8E4F6E",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/guardian-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/guardian-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 10,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-planning-option": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-planning-option",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/planning-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/planning-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 10,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-heroic-option": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-heroic-option",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/heroic-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/heroic-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 30,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-veteran-option": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-veteran-option",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/veteran-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/veteran-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 15,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-trigger-happy-option": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-trigger-happy-option",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/trigger-happy-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/trigger-happy-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 10,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-gears-option": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-gears-option",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/gears-option.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/gears-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 20,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-75cm-ig-18-gun-option_a": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-75cm-ig-18-gun-option_a",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/75cm-ig-18-gun-option_b.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/75cm-ig-18-gun-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 25,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-mg42-hmg-option_a": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-mg42-hmg-option_a",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/mg42-hmg-option_b.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/mg42-hmg-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 20,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-granatwerfer-8cm-option_a": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-granatwerfer-8cm-option_a",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/granatwerfer-8cm-option_b.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/granatwerfer-8cm-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 20,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            },
            "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-panzerschreck-option_a": {
              "id": "HoN-v1-steiner-kampfgruppe-ge-steiner-kampfgruppe-panzerschreck-option_a",
              "recruit": {
                "front": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/panzerschreck-option_b.png",
                "back": "res/HoN-v1/steiner-kampfgruppe/ge/steiner-kampfgruppe/panzerschreck-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "steiner-kampfgruppe",
              "faction": "GE",
              "cost": 20,
              "platoon": "steiner-kampfgruppe",
              "orders": 0
            }
          }
        }
      }
    },
    "wittmanns-tigers": {
      "wittmanns-tigers": {
        "rc-plat": {
          "D2-0-D1-M1": {
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-recruitment-tile_a": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/recruitment-tile_b.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-0-D1-M1",
              "size": NaN,
              "slots": "D2-0-D1-M1",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 110,
              "platoon": "wittmanns-tigers",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-artillery-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-artillery-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/artillery-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/artillery-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 15,
              "platoon": "wittmanns-tigers",
              "orders": 0
            },
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-intrepid-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-intrepid-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/intrepid-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/intrepid-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 15,
              "platoon": "wittmanns-tigers",
              "orders": 0
            },
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-he-shell-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-he-shell-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/he-shell-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/he-shell-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 10,
              "platoon": "wittmanns-tigers",
              "orders": 0
            },
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-apc-shell-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-apc-shell-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/apc-shell-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/apc-shell-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 10,
              "platoon": "wittmanns-tigers",
              "orders": 0
            },
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-fuel-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-fuel-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/fuel-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/fuel-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 5,
              "platoon": "wittmanns-tigers",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-blitzkrieg-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-blitzkrieg-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/blitzkrieg-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/blitzkrieg-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 30,
              "platoon": "wittmanns-tigers",
              "orders": 0
            },
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-field-artillery-x2-option": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-field-artillery-x2-option",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/field-artillery-x2-option.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/field-artillery-x2-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 25,
              "platoon": "wittmanns-tigers",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-tiger-i-option_a": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-tiger-i-option_a",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/tiger-i-option_b.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/tiger-i-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 90,
              "platoon": "wittmanns-tigers",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-88mm-flak-36-option_a": {
              "id": "HoN-v1-wittmanns-tigers-ge-wittmanns-tigers-88mm-flak-36-option_a",
              "recruit": {
                "front": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/88mm-flak-36-option_b.png",
                "back": "res/HoN-v1/wittmanns-tigers/ge/wittmanns-tigers/88mm-flak-36-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "wittmanns-tigers",
              "faction": "GE",
              "cost": 50,
              "platoon": "wittmanns-tigers",
              "orders": 0
            }
          }
        }
      }
    }
  },
  "US": {
    "army-box-us": {
      "command": {
        "rc-plat": {
          "M2-M1-0-M1-M2": {
            "HoN-v1-army-box-us-us-command-recruitment-high-command_a": {
              "id": "HoN-v1-army-box-us-us-command-recruitment-high-command_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/recruitment-high-command_b.png",
                "back": "res/HoN-v1/army-box-us/us/command/recruitment-high-command_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 2,
                "M2": 2,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2-M1-0-M1-M2",
              "size": NaN,
              "slots": "M2-M1-0-M1-M2",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-us-us-command-option-smoke-x3": {
              "id": "HoN-v1-army-box-us-us-command-option-smoke-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-smoke-x3.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-smoke-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-directive-x1": {
              "id": "HoN-v1-army-box-us-us-command-option-directive-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-directive-x1.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-directive-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-artillery-x1": {
              "id": "HoN-v1-army-box-us-us-command-option-artillery-x1",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-artillery-x1.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-artillery-x1.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 15,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-initiative": {
              "id": "HoN-v1-army-box-us-us-command-option-initiative",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-initiative.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-initiative.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-planning": {
              "id": "HoN-v1-army-box-us-us-command-option-planning",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-planning.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-planning.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 1
            }
          },
          "2": {
            "HoN-v1-army-box-us-us-command-hidden-option": {
              "id": "HoN-v1-army-box-us-us-command-hidden-option",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/hidden-option.png",
                "back": "res/HoN-v1/army-box-us/us/command/hidden-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-directive-x3": {
              "id": "HoN-v1-army-box-us-us-command-option-directive-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-directive-x3.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-directive-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 40,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-field-artillery-x3": {
              "id": "HoN-v1-army-box-us-us-command-option-field-artillery-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-field-artillery-x3.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-field-artillery-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 30,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-battle-plan": {
              "id": "HoN-v1-army-box-us-us-command-option-battle-plan",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-battle-plan.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-battle-plan.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 25,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-command-option-airstrike-x3": {
              "id": "HoN-v1-army-box-us-us-command-option-airstrike-x3",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/command/option-airstrike-x3.png",
                "back": "res/HoN-v1/army-box-us/us/command/option-airstrike-x3.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 20,
              "platoon": "command",
              "orders": 0
            }
          }
        }
      },
      "generic": {
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-us-us-generic-recruitment-sgt-bruno_a": {
              "id": "HoN-v1-army-box-us-us-generic-recruitment-sgt-bruno_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/generic/recruitment-sgt-bruno_b.png",
                "back": "res/HoN-v1/army-box-us/us/generic/recruitment-sgt-bruno_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-us-us-generic-sticky_bomb_option": {
              "id": "HoN-v1-army-box-us-us-generic-sticky_bomb_option",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/generic/sticky_bomb_option.png",
                "back": "res/HoN-v1/army-box-us/us/generic/sticky_bomb_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-generic-option-ammo-belt": {
              "id": "HoN-v1-army-box-us-us-generic-option-ammo-belt",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/generic/option-ammo-belt.png",
                "back": "res/HoN-v1/army-box-us/us/generic/option-ammo-belt.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 20,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "recon-platoon": {
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-us-us-recon-platoon-recruitment-tile-kowalski_a": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-recruitment-tile-kowalski_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/recruitment-tile-kowalski_b.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/recruitment-tile-kowalski_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 15,
              "platoon": "recon-platoon",
              "orders": 0
            }
          }
        },
        "rc-plat": {
          "D1-D1-0-D2": {
            "HoN-v1-army-box-us-us-recon-platoon-recruitment-tile-recon-squadron_a": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-recruitment-tile-recon-squadron_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/recruitment-tile-recon-squadron_b.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/recruitment-tile-recon-squadron_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 60,
              "platoon": "recon-platoon",
              "orders": 1
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-us-us-recon-platoon-option-tricky": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-option-tricky",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/option-tricky.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/option-tricky.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 5,
              "platoon": "recon-platoon",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-army-box-us-us-recon-platoon-option-recon-m20_a": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-option-recon-m20_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-m20_b.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-m20_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 25,
              "platoon": "recon-platoon",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-army-box-us-us-recon-platoon-option-recon-bar_a": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-option-recon-bar_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-bar_b.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-bar_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 25,
              "platoon": "recon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-recon-platoon-option-recon-bazooka_a": {
              "id": "HoN-v1-army-box-us-us-recon-platoon-option-recon-bazooka_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-bazooka_b.png",
                "back": "res/HoN-v1/army-box-us/us/recon-platoon/option-recon-bazooka_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 30,
              "platoon": "recon-platoon",
              "orders": 0
            }
          }
        }
      },
      "sherman-platoon": {
        "rc-plat": {
          "D1-D1-0-D2": {
            "HoN-v1-army-box-us-us-sherman-platoon-recruitment-tile-sherman-squadron_a": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-recruitment-tile-sherman-squadron_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/recruitment-tile-sherman-squadron_b.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/recruitment-tile-sherman-squadron_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-D1-0-D2",
              "size": NaN,
              "slots": "D1-D1-0-D2",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 125,
              "platoon": "sherman-platoon",
              "orders": 0
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-us-us-sherman-platoon-option-apc-shells": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-apc-shells",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-apc-shells.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-apc-shells.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "sherman-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-sherman-platoon-option-ace-driver": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-ace-driver",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-ace-driver.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-ace-driver.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 5,
              "platoon": "sherman-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-sherman-platoon-option-he-shells": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-he-shells",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-he-shells.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-he-shells.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "sherman-platoon",
              "orders": 0
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-army-box-us-us-sherman-platoon-option-m10-a1-squad_a": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-m10-a1-squad_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-m10-a1-squad_b.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-m10-a1-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 120,
              "platoon": "sherman-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-sherman-platoon-option-sherman-76w_a": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-sherman-76w_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-sherman-76w_b.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-sherman-76w_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 70,
              "platoon": "sherman-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-sherman-platoon-option-m10-a1_a": {
              "id": "HoN-v1-army-box-us-us-sherman-platoon-option-m10-a1_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/sherman-platoon/option-m10-a1_b.png",
                "back": "res/HoN-v1/army-box-us/us/sherman-platoon/option-m10-a1_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 60,
              "platoon": "sherman-platoon",
              "orders": 0
            }
          }
        }
      },
      "weapon-platoon": {
        "rc-hero": {
          "0": {
            "HoN-v1-army-box-us-us-weapon-platoon-recruitment-tile-sgt-brady_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-recruitment-tile-sgt-brady_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/recruitment-tile-sgt-brady_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/recruitment-tile-sgt-brady_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 15,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        },
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "HoN-v1-army-box-us-us-weapon-platoon-recruitment-tile-weapon-platoon_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-recruitment-tile-weapon-platoon_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/recruitment-tile-weapon-platoon_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/recruitment-tile-weapon-platoon_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 55,
              "platoon": "weapon-platoon",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-army-box-us-us-weapon-platoon-option-trigger-happy": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-trigger-happy",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-trigger-happy.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-trigger-happy.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "weapon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-weapon-platoon-option-horn-of-plenty_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-horn-of-plenty_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-horn-of-plenty_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-horn-of-plenty_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 20,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-army-box-us-us-weapon-platoon-option-ammo-bearer_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-ammo-bearer_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-ammo-bearer_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-ammo-bearer_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 10,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-army-box-us-us-weapon-platoon-option-mortar-squad_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-mortar-squad_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-mortar-squad_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-mortar-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 30,
              "platoon": "weapon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-weapon-platoon-option-bazooka-squad_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-bazooka-squad_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-bazooka-squad_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-bazooka-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 30,
              "platoon": "weapon-platoon",
              "orders": 0
            },
            "HoN-v1-army-box-us-us-weapon-platoon-option-30-cal-squad_a": {
              "id": "HoN-v1-army-box-us-us-weapon-platoon-option-30-cal-squad_a",
              "recruit": {
                "front": "res/HoN-v1/army-box-us/us/weapon-platoon/option-30-cal-squad_b.png",
                "back": "res/HoN-v1/army-box-us/us/weapon-platoon/option-30-cal-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "army-box-us",
              "faction": "US",
              "cost": 25,
              "platoon": "weapon-platoon",
              "orders": 0
            }
          }
        }
      }
    },
    "d-day": {
      "generic": {
        "gear": {
          "1": {
            "HoN-v1-d-day-us-generic-heroic-option": {
              "id": "HoN-v1-d-day-us-generic-heroic-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/generic/heroic-option.png",
                "back": "res/HoN-v1/d-day/us/generic/heroic-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "us-combat-engineers": {
        "rc-plat": {
          "D2-D1-0-D1-M1": {
            "HoN-v1-d-day-us-us-combat-engineers-recruitment-tile_a": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/recruitment-tile_b.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D2-D1-0-D1-M1",
              "size": NaN,
              "slots": "D2-D1-0-D1-M1",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 100,
              "platoon": "us-combat-engineers",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-d-day-us-us-combat-engineers-grapnel-option": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-grapnel-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/grapnel-option.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/grapnel-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 5,
              "platoon": "us-combat-engineers",
              "orders": 0
            },
            "HoN-v1-d-day-us-us-combat-engineers-position-option": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-position-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/position-option.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/position-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 10,
              "platoon": "us-combat-engineers",
              "orders": 0
            },
            "HoN-v1-d-day-us-us-combat-engineers-shovel-option": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-shovel-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/shovel-option.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/shovel-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 15,
              "platoon": "us-combat-engineers",
              "orders": 0
            },
            "HoN-v1-d-day-us-us-combat-engineers-explosives-m1-option": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-explosives-m1-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/explosives-m1-option.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/explosives-m1-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 10,
              "platoon": "us-combat-engineers",
              "orders": 0
            },
            "HoN-v1-d-day-us-us-combat-engineers-bangalore-option": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-bangalore-option",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/bangalore-option.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/bangalore-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 10,
              "platoon": "us-combat-engineers",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-d-day-us-us-combat-engineers-assault-squad-option_a": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-assault-squad-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/assault-squad-option_b.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/assault-squad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 50,
              "platoon": "us-combat-engineers",
              "orders": 0
            },
            "HoN-v1-d-day-us-us-combat-engineers-support-squad-option_a": {
              "id": "HoN-v1-d-day-us-us-combat-engineers-support-squad-option_a",
              "recruit": {
                "front": "res/HoN-v1/d-day/us/us-combat-engineers/support-squad-option_b.png",
                "back": "res/HoN-v1/d-day/us/us-combat-engineers/support-squad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "d-day",
              "faction": "US",
              "cost": 50,
              "platoon": "us-combat-engineers",
              "orders": 0
            }
          }
        }
      }
    },
    "extra-units-us-_-ge": {
      "generic": {
        "ft-vehicle": {
          "1": {
            "HoN-v1-extra-units-us-_-ge-us-generic-willys-60mm-mortar-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-us-generic-willys-60mm-mortar-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/us/generic/willys-60mm-mortar-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/us/generic/willys-60mm-mortar-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "US",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-extra-units-us-_-ge-us-generic-m16-mgmc-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-us-generic-m16-mgmc-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/us/generic/m16-mgmc-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/us/generic/m16-mgmc-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "US",
              "cost": 35,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-extra-units-us-_-ge-us-generic-greyhound-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-us-generic-greyhound-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/us/generic/greyhound-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/us/generic/greyhound-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "US",
              "cost": 35,
              "platoon": "generic",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-extra-units-us-_-ge-us-generic-m8-scout-option_a": {
              "id": "HoN-v1-extra-units-us-_-ge-us-generic-m8-scout-option_a",
              "recruit": {
                "front": "res/HoN-v1/extra-units-us-_-ge/us/generic/m8-scout-option_b.png",
                "back": "res/HoN-v1/extra-units-us-_-ge/us/generic/m8-scout-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "extra-units-us-_-ge",
              "faction": "US",
              "cost": 50,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "hon-core": {
      "command": {
        "rc-plat": {
          "M1-D1-0-G2": {
            "HoN-v1-hon-core-us-command-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-us-command-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/command/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/us/command/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 0,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 1
              },
              "type": "rc-plat",
              "subtype": "M1-D1-0-G2",
              "size": NaN,
              "slots": "M1-D1-0-G2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 30,
              "platoon": "command",
              "orders": 1
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-hon-core-us-command-bluff_option": {
              "id": "HoN-v1-hon-core-us-command-bluff_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/command/bluff_option.png",
                "back": "res/HoN-v1/hon-core/us/command/bluff_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-hon-core-us-command-improvisation_option": {
              "id": "HoN-v1-hon-core-us-command-improvisation_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/command/improvisation_option.png",
                "back": "res/HoN-v1/hon-core/us/command/improvisation_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 20,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-hon-core-us-command-airstrike_x1_option": {
              "id": "HoN-v1-hon-core-us-command-airstrike_x1_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/command/airstrike_x1_option.png",
                "back": "res/HoN-v1/hon-core/us/command/airstrike_x1_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 0
            },
            "HoN-v1-hon-core-us-command-planning_option": {
              "id": "HoN-v1-hon-core-us-command-planning_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/command/planning_option.png",
                "back": "res/HoN-v1/hon-core/us/command/planning_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 10,
              "platoon": "command",
              "orders": 1
            }
          }
        }
      },
      "generic": {
        "gear": {
          "1": {
            "HoN-v1-hon-core-us-gears-rifle_grenade_option": {
              "id": "HoN-v1-hon-core-us-gears-rifle_grenade_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/rifle_grenade_option.png",
                "back": "res/HoN-v1/hon-core/us/generic/rifle_grenade_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-gears-ammo_option": {
              "id": "HoN-v1-hon-core-us-gears-ammo_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/ammo_option.png",
                "back": "res/HoN-v1/hon-core/us/generic/ammo_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-gears-hedgerow_cutter_option": {
              "id": "HoN-v1-hon-core-us-gears-hedgerow_cutter_option",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/hedgerow_cutter_option.png",
                "back": "res/HoN-v1/hon-core/us/generic/hedgerow_cutter_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            },
            "1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F": {
              "id": "1849302001345628439F0687721AE5176782EE59421A1DDA7BEAEFFD74F",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/grenade_option.png",
                "back": "res/HoN-v1/hon-core/us/generic/grenade_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 5,
              "platoon": "generic",
              "orders": 0
            },
            "18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E": {
              "id": "18493020013456283812047775B2DF4518E944A7801B5D490FE76B3B53E",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/veteran_option.png",
                "back": "res/HoN-v1/hon-core/us/generic/veteran_option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "rc-hero": {
          "0": {
            "HoN-v1-hon-core-us-heroes-recruitment_tile_the_rock_a": {
              "id": "HoN-v1-hon-core-us-heroes-recruitment_tile_the_rock_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/recruitment_tile_the_rock_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/recruitment_tile_the_rock_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-heroes-recruitment_tile_clint_a": {
              "id": "HoN-v1-hon-core-us-heroes-recruitment_tile_clint_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/recruitment_tile_clint_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/recruitment_tile_clint_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 30,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-heroes-recruitment_tile_oddball_a": {
              "id": "HoN-v1-hon-core-us-heroes-recruitment_tile_oddball_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/recruitment_tile_oddball_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/recruitment_tile_oddball_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 75,
              "platoon": "generic",
              "orders": 1
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-hon-core-us-extra-units-willys_50cal_option_a": {
              "id": "HoN-v1-hon-core-us-extra-units-willys_50cal_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/willys_50cal_option_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/willys_50cal_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-extra-units-m8_greyhound_option_a": {
              "id": "HoN-v1-hon-core-us-extra-units-m8_greyhound_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/m8_greyhound_option_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/m8_greyhound_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 35,
              "platoon": "generic",
              "orders": 0
            }
          },
          "2": {
            "HoN-v1-hon-core-us-extra-units-m5_stuart_option_a": {
              "id": "HoN-v1-hon-core-us-extra-units-m5_stuart_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/m5_stuart_option_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/m5_stuart_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 50,
              "platoon": "generic",
              "orders": 0
            },
            "HoN-v1-hon-core-us-extra-units-sherman_m4_option_a": {
              "id": "HoN-v1-hon-core-us-extra-units-sherman_m4_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/sherman_m4_option_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/sherman_m4_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 60,
              "platoon": "generic",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-hon-core-us-extra-units-mortar_option_a": {
              "id": "HoN-v1-hon-core-us-extra-units-mortar_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/generic/mortar_option_b.png",
                "back": "res/HoN-v1/hon-core/us/generic/mortar_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 15,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      },
      "rifle-platoon-22nd": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "HoN-v1-hon-core-us-rifle-platoon-22nd-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-22nd-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 70,
              "platoon": "rifle-platoon-22nd",
              "orders": 2
            }
          }
        },
        "ft-vehicle": {
          "2": {
            "HoN-v1-hon-core-us-rifle-platoon-22nd-mechanized_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-22nd-mechanized_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/mechanized_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/mechanized_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 60,
              "platoon": "rifle-platoon-22nd",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-hon-core-us-rifle-platoon-22nd-bazooka_squad_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-22nd-bazooka_squad_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/bazooka_squad_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/bazooka_squad_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 55,
              "platoon": "rifle-platoon-22nd",
              "orders": 0
            },
            "HoN-v1-hon-core-us-rifle-platoon-22nd-rifle_squad_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-22nd-rifle_squad_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/rifle_squad_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-22nd/rifle_squad_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 50,
              "platoon": "rifle-platoon-22nd",
              "orders": 0
            }
          }
        }
      },
      "rifle-platoon-8th": {
        "rc-plat": {
          "M2*-G1-0-G1-D2": {
            "HoN-v1-hon-core-us-rifle-platoon-8th-recruitment_tile_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-8th-recruitment_tile_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-8th/recruitment_tile_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-8th/recruitment_tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 0,
                "D2": 1,
                "G1": 2,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-G1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-G1-0-G1-D2",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 70,
              "platoon": "rifle-platoon-8th",
              "orders": 2
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-hon-core-us-rifle-platoon-8th-rifle_squad_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-8th-rifle_squad_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-8th/rifle_squad_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-8th/rifle_squad_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 50,
              "platoon": "rifle-platoon-8th",
              "orders": 0
            },
            "HoN-v1-hon-core-us-rifle-platoon-8th-30cal_squad_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-8th-30cal_squad_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-8th/30cal_squad_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-8th/30cal_squad_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 50,
              "platoon": "rifle-platoon-8th",
              "orders": 0
            },
            "HoN-v1-hon-core-us-rifle-platoon-8th-bazooka_squad_option_a": {
              "id": "HoN-v1-hon-core-us-rifle-platoon-8th-bazooka_squad_option_a",
              "recruit": {
                "front": "res/HoN-v1/hon-core/us/rifle-platoon-8th/bazooka_squad_option_b.png",
                "back": "res/HoN-v1/hon-core/us/rifle-platoon-8th/bazooka_squad_option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "hon-core",
              "faction": "US",
              "cost": 55,
              "platoon": "rifle-platoon-8th",
              "orders": 0
            }
          }
        }
      }
    },
    "miller_s-rangers": {
      "millers-rangers": {
        "rc-hero": {
          "0": {
            "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile-doc_a": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile-doc_a",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile-doc_b.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile-doc_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 20,
              "platoon": "millers-rangers",
              "orders": 0
            },
            "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile-jackson_a": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile-jackson_a",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile-jackson_b.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile-jackson_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 20,
              "platoon": "millers-rangers",
              "orders": 0
            }
          }
        },
        "rc-plat": {
          "D1-M1-0-M2": {
            "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile_a": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile_b.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 1,
                "M2": 1,
                "D1": 1,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "D1-M1-0-M2",
              "size": NaN,
              "slots": "D1-M1-0-M2",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 85,
              "platoon": "millers-rangers",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-miller_s-rangers-us-millers-rangers-infiltrated-option": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-infiltrated-option",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/infiltrated-option.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/infiltrated-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 10,
              "platoon": "millers-rangers",
              "orders": 0
            },
            "HoN-v1-miller_s-rangers-us-millers-rangers-courageous-option": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-courageous-option",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/courageous-option.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/courageous-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 10,
              "platoon": "millers-rangers",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "1": {
            "HoN-v1-miller_s-rangers-us-millers-rangers-bazooka-option_a": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-bazooka-option_a",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/bazooka-option_b.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/bazooka-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 15,
              "platoon": "millers-rangers",
              "orders": 0
            },
            "HoN-v1-miller_s-rangers-us-millers-rangers-30cal-option_a": {
              "id": "HoN-v1-miller_s-rangers-us-millers-rangers-30cal-option_a",
              "recruit": {
                "front": "res/HoN-v1/miller_s-rangers/us/millers-rangers/30cal-option_b.png",
                "back": "res/HoN-v1/miller_s-rangers/us/millers-rangers/30cal-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "miller_s-rangers",
              "faction": "US",
              "cost": 15,
              "platoon": "millers-rangers",
              "orders": 0
            }
          }
        }
      }
    },
    "promo-heroes-2014": {
      "generic": {
        "rc-hero": {
          "0": {
            "HoN-v1-promo-heroes-2014-us-generic-recruitment-tile-bill-furlong_a": {
              "id": "HoN-v1-promo-heroes-2014-us-generic-recruitment-tile-bill-furlong_a",
              "recruit": {
                "front": "res/HoN-v1/promo-heroes-2014/us/generic/recruitment-tile-bill-furlong_b.png",
                "back": "res/HoN-v1/promo-heroes-2014/us/generic/recruitment-tile-bill-furlong_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "promo-heroes-2014",
              "faction": "US",
              "cost": 25,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    },
    "us-rangers": {
      "us-rangers": {
        "rc-hero": {
          "0": {
            "HoN-v1-us-rangers-us-us-rangers-recruitment-tile-pepper_a": {
              "id": "HoN-v1-us-rangers-us-us-rangers-recruitment-tile-pepper_a",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/recruitment-tile-pepper_b.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/recruitment-tile-pepper_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-hero",
              "subtype": "0",
              "size": NaN,
              "slots": "0",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 25,
              "platoon": "us-rangers",
              "orders": 0
            }
          }
        },
        "rc-plat": {
          "M2*-D1-0-D1-D2": {
            "HoN-v1-us-rangers-us-us-rangers-recruitment-tile_a": {
              "id": "HoN-v1-us-rangers-us-us-rangers-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/recruitment-tile_b.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 2,
                "D2": 1,
                "G1": 0,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-D1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-D1-D2",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 80,
              "platoon": "us-rangers",
              "orders": 2
            }
          }
        },
        "gear": {
          "1": {
            "HoN-v1-us-rangers-us-us-rangers-gears-x5": {
              "id": "HoN-v1-us-rangers-us-us-rangers-gears-x5",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/gears-x5.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/gears-x5.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 20,
              "platoon": "us-rangers",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-us-rangers-us-us-rangers-rangers-squad_a": {
              "id": "HoN-v1-us-rangers-us-us-rangers-rangers-squad_a",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/rangers-squad_b.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/rangers-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 60,
              "platoon": "us-rangers",
              "orders": 0
            },
            "HoN-v1-us-rangers-us-us-rangers-support-squad_a": {
              "id": "HoN-v1-us-rangers-us-us-rangers-support-squad_a",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/support-squad_b.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/support-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 60,
              "platoon": "us-rangers",
              "orders": 0
            },
            "HoN-v1-us-rangers-us-us-rangers-ambush-squad_a": {
              "id": "HoN-v1-us-rangers-us-us-rangers-ambush-squad_a",
              "recruit": {
                "front": "res/HoN-v1/us-rangers/us/us-rangers/ambush-squad_b.png",
                "back": "res/HoN-v1/us-rangers/us/us-rangers/ambush-squad_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rangers",
              "faction": "US",
              "cost": 50,
              "platoon": "us-rangers",
              "orders": 0
            }
          }
        }
      }
    },
    "us-rifle-platoon-12th-regiment": {
      "us-rifle-platoon-12th-regiment": {
        "rc-plat": {
          "M2*-D1-0-G1-D2": {
            "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-recruitment-tile_a": {
              "id": "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-recruitment-tile_a",
              "recruit": {
                "front": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/recruitment-tile_b.png",
                "back": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/recruitment-tile_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 1,
                "D1": 1,
                "D2": 1,
                "G1": 1,
                "G2": 0
              },
              "type": "rc-plat",
              "subtype": "M2*-D1-0-G1-D2",
              "size": NaN,
              "slots": "M2*-D1-0-G1-D2",
              "source": "HoN-v1",
              "box": "us-rifle-platoon-12th-regiment",
              "faction": "US",
              "cost": 70,
              "platoon": "us-rifle-platoon-12th-regiment",
              "orders": 2
            }
          }
        },
        "ft-vehicle": {
          "1": {
            "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-halftrack-option_a": {
              "id": "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-halftrack-option_a",
              "recruit": {
                "front": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/halftrack-option_b.png",
                "back": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/halftrack-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-vehicle",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rifle-platoon-12th-regiment",
              "faction": "US",
              "cost": 30,
              "platoon": "us-rifle-platoon-12th-regiment",
              "orders": 0
            }
          }
        },
        "ft-inf": {
          "2": {
            "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-ambush-squad-option_a": {
              "id": "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-ambush-squad-option_a",
              "recruit": {
                "front": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/ambush-squad-option_b.png",
                "back": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/ambush-squad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rifle-platoon-12th-regiment",
              "faction": "US",
              "cost": 40,
              "platoon": "us-rifle-platoon-12th-regiment",
              "orders": 0
            },
            "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-support-squad-option_a": {
              "id": "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-support-squad-option_a",
              "recruit": {
                "front": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/support-squad-option_b.png",
                "back": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/support-squad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rifle-platoon-12th-regiment",
              "faction": "US",
              "cost": 50,
              "platoon": "us-rifle-platoon-12th-regiment",
              "orders": 0
            },
            "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-rifle-squad-option_a": {
              "id": "HoN-v1-us-rifle-platoon-12th-regiment-us-us-rifle-platoon-12th-regiment-rifle-squad-option_a",
              "recruit": {
                "front": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/rifle-squad-option_b.png",
                "back": "res/HoN-v1/us-rifle-platoon-12th-regiment/us/us-rifle-platoon-12th-regiment/rifle-squad-option_b.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "ft-inf",
              "subtype": "2",
              "size": 2.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "us-rifle-platoon-12th-regiment",
              "faction": "US",
              "cost": 50,
              "platoon": "us-rifle-platoon-12th-regiment",
              "orders": 0
            }
          }
        }
      }
    }
  },
  "NEUTRAL": {
    "karl-von-croc": {
      "generic": {
        "gear": {
          "1": {
            "HoN-v1-karl-von-croc-neutral-generic-geballte-ladung-option": {
              "id": "HoN-v1-karl-von-croc-neutral-generic-geballte-ladung-option",
              "recruit": {
                "front": "res/HoN-v1/karl-von-croc/neutral/generic/geballte-ladung-option.png",
                "back": "res/HoN-v1/karl-von-croc/neutral/generic/geballte-ladung-option.png"
              },
              "contents": [],
              "available_slots": {
                "M1": 0,
                "M2": 0,
                "D1": 0,
                "D2": 0,
                "G1": 0,
                "G2": 0
              },
              "type": "gear",
              "subtype": "1",
              "size": 1.0,
              "slots": "nan",
              "source": "HoN-v1",
              "box": "karl-von-croc",
              "faction": "NEUTRAL",
              "cost": 10,
              "platoon": "generic",
              "orders": 0
            }
          }
        }
      }
    }
  }
};