import { useState, useEffect } from "react";
import { db } from "./firebase";
// function from Firebase Storage to get the download URL of an uploaded file.
import { getDownloadURL } from "firebase/storage";
// Import collection and addDoc functions from Firebase Firestore to add documents to a collection.
import { collection, addDoc } from "firebase/firestore";
// functions from Firebase Storage to upload files.
import { ref, uploadBytes } from "firebase/storage";

//importing the initialized storage from the Firebase setup
import { storage } from "./firebase";

//Importing popups for loading
import { v4 as uuidv4, v4 } from "uuid"; //Import v4 from the uuid library and use it to randomise characters
import Swal from "sweetalert2";

const NewRoom = () => {
  //Declaration of variables to contain input data
  const [roomType, setRoomType] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [num_Beds, setNoOfBeds] = useState("");
  const [price, setRoomPrice] = useState(0);
  const [totalOccupants, setTotalOccupants] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [roomNum, setRoomNum] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [subImages, setSubImages] = useState([]);

  //function to upload all room images to firestore to the Firebase storage cloud
  const handleUpload = () => {
    // const id = uuidv4();
    try {
      const imageRef = ref(
        storage,
        `hotelImages/${roomNum}/${imageUpload.name + v4()}`
      );
      const uploadImage = uploadBytes(imageRef, imageUpload).then(() => {
        getDownloadURL(imageRef).then((url) => {
          setImageURL(url);

          Swal.fire({
            icon: "success",
            title: "Uploaded!",
            text: "Image has been uploaded.",
            showConfirmButton: false,
            timer: 3000,
          });
        });
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Error uploading image!",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };
    //FUNTCION TO HANDLE Sub Images in the rooms gallery

    function handleOtherUpload() {
      try {
        if (subImages.length === 0) {
          Swal.fire({
            icon: "error",
            title: "No subimage selected!",
            text: "Please select a subimage to upload.",
            showConfirmButton: false,
            timer: 2000,
          });
          return;
        }
        
        const subImageFile = subImages[0]; // Get the first subimage file from the array
        //Generate a uniquie identifier for the subimage
        const subImageName = subImages.name + v4();
        //create a reference to the subimage in the firebase storage
        const subImageRef = ref(
          storage,
          `hotelImages/${roomNum}/${subImageName} `
        );
        //upload the subimage to firebase storage
        const uploadTask = uploadBytes(subImageRef, subImageFile);
        //set un eventListener to get the download URL when the upload is complete
        uploadTask.then(() => {
          getDownloadURL(subImageRef).then((url) => {
            //set the subimage URL state
            setSubImages(url);
            //update the subimage with the URL 
            // setSubImages((prevSubImages)=> [...prevSubImages , url]);

            //Display a success message
            Swal.fire({
              icon: "success",
              title: "Uploaded!",
              text: "Image has been uploaded.",
              showConfirmButton: false,
              timer: 2000,
            });
          });
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error uploading image!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    };
 

  const handleNewRoom = async (e) => {
    e.preventDefault();
    //FUNCTION TO STORE DATA TO FIREBASE ,  this stores all the information that comes with the room type .
    try {

      const docRef = await addDoc(collection(db, "roomTypes"), {
        room_type: roomType,
        roomNum: roomNum,
        roomDescription: roomDescription,
        num_Beds: num_Beds,
        price: price,
        totalOccupants: totalOccupants,
        imageURL: imageURL,
        subImages: subImages, //subimage is the object , storing it with url stores the url of the image
      });
      console.log(docRef);
     
      // SUCCESS POP-UP
      Swal.fire({
        icon: "success",
        title: "Saved!",
        text: "Successfully added new room.",
        showConfirmButton: false,
        timer: 1000,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  
  return (
    <div className="container-roomform">
      <div className="box">
        <h3> Add New Room Here:</h3>

        <select
          className="form-select"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option value="">Select room type..</option>
          <option value="Economy">Economy</option>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Room Number"
          value={roomNum}
          onChange={(event) => setRoomNum(event.target.value)}
        />

        <select
          className="form-select"
          value={roomDescription}
          onChange={(e) => setRoomDescription(e.target.value)}
        >
          <option value="">Select room description</option>
          <option value="Standard Room ">Double</option>
          <option value="Economy Room ">Queen</option>
          <option value="Deluxe Room ">Suite</option>
        </select>

        <input
          type="number"
          className="form-control"
          placeholder="Number of beds"
          onChange={(event) => setNoOfBeds(event.target.value)}
        />

        <input
          type="number"
          className="form-control"
          placeholder="Price"
          onChange={(event) => setRoomPrice(event.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Number of occupants"
          onChange={(event) => setTotalOccupants(event.target.value)}
        />

        <label>Insert Main Image: </label>
        <input
          type="file"
          className="form-control"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button className="btn btn-primary" onClick={handleUpload}>
          UPLOAD
        </button>

        <label>Insert Sub Room Images: </label>
        <input
          type="file"
          className="form-control"
          multiple 
          onChange={(event) => setSubImages([event.target.files[0]])}
        />
        <button className="btn btn-primary" onClick={handleOtherUpload}>
          UPLOAD
        </button>

        <button className="btn btn-success" onClick={handleNewRoom}>
          SAVE NEW ROOM
        </button>
      </div>
    </div>
  ); 
};
export default NewRoom;