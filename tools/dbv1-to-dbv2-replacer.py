import pandas as pd
import json

data = pd.read_csv("res-old/recruitment_data.csv")
conversionsData = json.load(open("tools/file_info_def.json"))

for index, row in data.iterrows():
    for item in [
        "img_recruit",
        "img_recruit_back",
        "img_1",
        "img_1_back",
        "img_2",
        "img_2_back",
        "img_3",
        "img_3_back",
        "img_4",
        "img_4_back",
        "img_5",
        "img_5_back",
    ]:
        if row[item] in conversionsData:
            data.at[index, item] = conversionsData[row[item]]

    if row["img_recruit"] in conversionsData:
        pathSplit = conversionsData[row["img_recruit"]].split("/")

        recruit_name = pathSplit[-1].lower()[:-4].replace(".a", "")
        platoonKey = pathSplit[-2].lower().replace(" ", "-")
        faction = pathSplit[-3].upper()
        box = pathSplit[-4].lower().replace(" ", "-")
        source = pathSplit[-5]

        data.at[index, "id"] = (
            source + "-" + box + "-" + faction + "-" + platoonKey + "-" + recruit_name
        ).lower()
        data.at[index, "source"] = source
        data.at[index, "box"] = box
        data.at[index, "faction"] = faction
        data.at[index, "platoon"] = platoonKey

data.to_csv("new_data.csv", index=False)
