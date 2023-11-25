import os
import json
from pathlib import Path


def get_file_info(folders):
    file_info = {}
    for folder in folders:
        for root, dirs, files in os.walk(folder):
            for dir in dirs:
                if dir not in ["HoBR", "HoN-v1", "HoN-v2", "SoN"]:
                    path = os.path.join(root, dir)
                    dirs_path = path.replace(" ", "-").lower()
                    Path(path).rename(Path(dirs_path))
        for root, dirs, files in os.walk(folder):
            for file in files:
                path = os.path.join(root, file)
                file_path = (
                    path.replace(" ", "-")
                    .replace(".a", "_a")
                    .replace(".b", "_b")
                    .lower()
                )
                Path(path).rename(Path(file_path))

    for folder in folders:
        for root, dirs, files in os.walk(folder):
            for file in files:
                if file.lower().endswith((".jpg", ".png")):
                    file_path = os.path.join(root, file)
                    file_size = os.path.getsize(file_path)
                    file_path = file_path.replace("\\", "/").replace("res-old", "res")

                    if file_size in file_info:
                        file_info[file_size].append(file_path)
                    else:
                        file_info[file_size] = [file_path]

    return file_info


def create_json(file_info, output_filename):
    with open(output_filename, "w") as json_file:
        json.dump(file_info, json_file, indent=2)


def process_folders(folders):
    file_info = get_file_info(folders)

    _file_info_def = {}
    file_info_2plus = {}

    for key, value in file_info.items():
        if len(value) > 1:
            if len(value) > 2:
                file_info_2plus[key] = value
            else:
                _file_info_def[key] = value

    file_info_def = {}
    for key, value in _file_info_def.items():
        file_info_def[value[0]] = value[1]

    create_json(file_info_def, "tools/file_info_def.json")
    create_json(file_info_2plus, "tools/file_info_2plus.json")


if __name__ == "__main__":
    process_folders(["res-old", "res/HoN-v1"])
