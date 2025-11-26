import os
import shutil
from sklearn.model_selection import train_test_split

def split_dataset(dataset_dir, train_dir, val_dir, test_dir, test_size=0.2, val_size=0.2):
    """
    Split the dataset into train, validation, and test sets.
    """
    if not os.path.exists(train_dir):
        os.makedirs(train_dir)
    if not os.path.exists(val_dir):
        os.makedirs(val_dir)
    if not os.path.exists(test_dir):
        os.makedirs(test_dir)

    classes = os.listdir(dataset_dir)
    for cls in classes:
        cls_path = os.path.join(dataset_dir, cls)
        if os.path.isdir(cls_path):
            images = os.listdir(cls_path)
            train_images, temp_images = train_test_split(images, test_size=test_size + val_size, random_state=42)
            val_images, test_images = train_test_split(temp_images, test_size=test_size / (test_size + val_size), random_state=42)

            # Copy to train
            train_cls_dir = os.path.join(train_dir, cls)
            os.makedirs(train_cls_dir, exist_ok=True)
            for img in train_images:
                shutil.copy(os.path.join(cls_path, img), os.path.join(train_cls_dir, img))

            # Copy to val
            val_cls_dir = os.path.join(val_dir, cls)
            os.makedirs(val_cls_dir, exist_ok=True)
            for img in val_images:
                shutil.copy(os.path.join(cls_path, img), os.path.join(val_cls_dir, img))

            # Copy to test
            test_cls_dir = os.path.join(test_dir, cls)
            os.makedirs(test_cls_dir, exist_ok=True)
            for img in test_images:
                shutil.copy(os.path.join(cls_path, img), os.path.join(test_cls_dir, img))

if __name__ == "__main__":
    split_dataset("../dataset", "../dataset/train", "../dataset/val", "../dataset/test")
