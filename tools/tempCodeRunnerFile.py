import pandas as pd
import json

data = pd.read_csv("res/recruitment_data.csv")

output = {}

pre_typing = """
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
"""

for _, row in data.iterrows():
    faction, box, platoon, type_, subtype, id_ = (
        row["faction"],
        row["box"],
        row["platoon"],
        row["type"],
        row["subtype"],
        row["id"],
    )

    nested_dict = output
    for key in [faction, box, platoon, type_, subtype]:
        nested_dict = nested_dict.setdefault(key, {})

    img_contents = [
        {"front": row[f"img_{i}"], "back": row[f"img_{i}_back"]}
        for i in range(1, 6)
        if not pd.isnull(row[f"img_{i}"]) and pd.isnull(row[f"img_{i}_back"])
    ]

    row_slots = str(row["slots"])
    available_slots = {
        "M1": row_slots.count("M1"),
        "M2": row_slots.count("M2"),
        "D1": row_slots.count("D1"),
        "D2": row_slots.count("D2"),
        "G1": row_slots.count("G1"),
        "G2": row_slots.count("G2"),
    }

    nested_dict[id_] = {
        "id": id_,
        "recruit": {"front": row["img_recruit_back"], "back": row["img_recruit_back"]},
        "contents": img_contents,
        "available_slots": available_slots,
        "type": type_,
        "subtype": subtype,
        "size": row["size"],
        "slots": str(row["slots"]),
        "source": row["source"],
        "box": box,
        "faction": faction,
        "cost": row["cost"],
        "platoon": platoon,
        "orders": row["orders"],
    }

output_json = json.dumps(output, indent=2)

with open("src/ts/dataBase.ts", "w") as ts_file:
    ts_file.write(f"{pre_typing} export const dataBase: Database = {output_json};")
