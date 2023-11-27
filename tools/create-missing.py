import pandas as pd
import os


# Create DataFrame
def generate_missing_data(folders, usedImages):
    # Sample data
    data = {
        "id": [],
        "_img_recruit": [],
        "_img_recruit_back": [],
        "_img_1": [],
        "_img_1_back": [],
        "_img_2": [],
        "_img_2_back": [],
        "_img_3": [],
        "_img_3_back": [],
        "_img_4": [],
        "_img_4_back": [],
        "_img_5": [],
        "_img_5_back": [],
        "type": [],
        "subtype": [],
        "size": [],
        "slots": [],
        "cost": [],
        "orders": [],
        "source": [],
        "box": [],
        "faction": [],
        "platoon": [],
        "img_recruit": [],
        "img_recruit_back": [],
        "img_1": [],
        "img_1_back": [],
        "img_2": [],
        "img_2_back": [],
        "img_3": [],
        "img_3_back": [],
        "img_4": [],
        "img_4_back.1": [],
        "img_5": [],
        "img_5_back": [],
    }
    df = pd.DataFrame(data)
    blacklist = {}

    for folder in folders:
        for root, dirs, files in os.walk(folder):
            for root, dirs, files in os.walk(folder):
                for file in files:
                    if file.lower().endswith((".jpg", ".png")):
                        file_path = os.path.join(root, file)
                        file_path = file_path.replace("\\", "/")
                        if file_path not in usedImages:
                            if file_path not in blacklist:
                                pathSplit = file_path.split("/")
                                recruitID = pathSplit[-1][:-4].replace(".a", "")
                                platoonKey = pathSplit[-2]
                                faction = pathSplit[-3]
                                box = pathSplit[-4]
                                source = pathSplit[-5]
                                new_row = {
                                    "id": (
                                        source
                                        + "-"
                                        + box
                                        + "-"
                                        + faction
                                        + "-"
                                        + platoonKey
                                        + "-"
                                        + recruitID
                                    ),
                                    "source": source,
                                    "box": box,
                                    "faction": faction.upper(),
                                    "platoon": platoonKey,
                                    "img_recruit": file_path,
                                    "type": "zzzz TODO",
                                }
                                blacklist[file_path] = True

                                # Look for Backside
                                if file_path[-6:-4] == "_b":
                                    continue

                                if file_path[-6:-4] == "_a":
                                    back_path = file_path[:-6] + "_b" + file_path[-4:]
                                    new_row["img_recruit_back"] = back_path
                                    blacklist[back_path] = True

                                # Look for platoon signs:
                                if (
                                    "recruitment-tile" in recruitID
                                    or "recruitment_tile" in recruitID
                                ):
                                    new_row["rc-plat"] = "recruit"

                                df.loc[len(df)] = new_row
    return df


def main(toSearch, oldPath, newPath, skipOld=False):
    usedImages = {}
    if not skipOld:
        oldData = pd.read_csv(oldPath)
        for index, row in oldData.iterrows():
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
                if not pd.isnull(row[item]):
                    usedImages[row[item]] = True
    newData = generate_missing_data(toSearch, usedImages)
    newData.to_csv(newPath, index=False)


main(
    ["res/HoN-v2", "res/SoN"],
    "res/recruitment_data.csv",
    "res/new_recruitment_data.csv",
    True,
)
