import pandas as pd
import json

data = pd.read_csv("res/recruitment_data.csv")
conversionsData = json.load(open("tools/archive/file_info_2plus.json"))
newConversionsData = {}

for key, value in conversionsData.items():
    i = 1
    newValue = value[i]
    while "steam" in newValue:
        i += 1
        newValue = value[i]

    if (i - 1) == len(value):
        for j in range(i):
            newConversionsData[value[j]] = value[i]

conversionsData = json.load(open("tools/archive/file_info_def.json"))
newConversionsData.update(conversionsData)

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
        if str(row[item]).lower() in newConversionsData:
            data.at[index, item] = newConversionsData[str(row[item]).lower()]

    if str(row["img_recruit"]).lower() in newConversionsData:
        pathSplit = newConversionsData[str(row["img_recruit"]).lower()].split("/")
        recruit_name = pathSplit[-1][:-4].replace(".a", "")
        platoonKey = pathSplit[-2]
        faction = pathSplit[-3]
        box = pathSplit[-4]
        source = pathSplit[-5]

        data.at[index, "id"] = (
            source + "-" + box + "-" + faction + "-" + platoonKey + "-" + recruit_name
        )
        data.at[index, "source"] = source
        data.at[index, "box"] = box
        data.at[index, "faction"] = faction.upper()
        data.at[index, "platoon"] = platoonKey

data.to_csv("new_data.csv", index=False)
