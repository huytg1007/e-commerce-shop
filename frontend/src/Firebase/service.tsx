import { removeDoubleSlashes } from '../Helpers/CommonMethod';
import { db, auth } from './config';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


export const uploadImage = async (file: any): Promise<string> => {
  if (!file) return "";

  try {
    const userId = auth.currentUser?.uid;
    const user = localStorage.getItem("user");
    // console.log(userId)
    // console.log(user)

    if (!userId && !user) throw new Error("User not authenticated");

    // 1. Upload the image to Firebase Storage
    // console.log(file)
    const fileName = removeDoubleSlashes(file.name);
    console.log(fileName)
    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + fileName);

    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!' + snapshot);
    });

    // 2. Get the download URL of the uploaded image
    var fixUrl = "";
    await getDownloadURL(ref(storage, 'images/' + fileName))
      .then(async(url) => {
        // `url` is the download URL for 'images/fileName}'
        // and ?alt=media to url to make it work
        fixUrl = url + '?alt=media';
      })
    .catch((error) => {
      console.log(error);
    });
    console.log("Upload Image To Firebase Storage successfully!");
    return fixUrl;

  } catch (error) {
    console.error("Error Upload image: ", error);
    return "";
  }
};

export const changeAvatar = async (fixUrl: string, curRoomId: string) => {
  try {
    // 3. Update the user's document in Firestore with the new avatar URL
    const userDocRef = db.collection('rooms').doc(curRoomId); // Adjust the collection path as needed
    await userDocRef.update({
      avatar: fixUrl,
    });
    console.log("Avatar updated successfully!");

  } catch (error) {
    console.error("Error updating avatar: ", error);
  }
};

