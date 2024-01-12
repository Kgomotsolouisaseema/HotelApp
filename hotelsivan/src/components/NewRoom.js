import { useState, useEffect } from "react";
import { db } from "./firebase";
// function from Firebase Storage to get the download URL of an uploaded file.
import { getDownloadURL } from "firebase/storage";
// Import collection and addDoc functions from Firebase Firestore to add documents to a collection.
import { collection, addDoc , deleteDoc , doc } from "firebase/firestore";
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
  //2 states for other images
  const [subImages, setSubImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([])

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

    async function handleOtherUpload() {
      // const imageUrlArray =[];
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
        console.log('image: ', subImages);
        for(let image of subImages ){
          const id = uuidv4();
          const metadata ={
            constentType : 'image/png'
          };
          console.log(image);
          const subImageRef = ref(storage, `hotelImages/${roomNum}/${id} `);
          const uploadTask = uploadBytes(subImageRef, image);
          uploadTask.then(async() => {
           await getDownloadURL(subImageRef).then((url) => {
              //  imageUrlArray.push(url)
              setUploadedImages(images => [...images, url])
  
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
        }
      
      
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error uploading image!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    };
 

    //Deleting Rooms according thier ID 
    const deleteroom = ()=>{
      const deleteRoom = document.querySelector('.delete');
    deleteRoom.addEventListener('submit',(e) => {
      e.preventDefault();

      const docRef = doc(db , 'roomTypes' ,deleteRoom.id.value)
      deleteDoc(docRef)
      .then(()=>{
        deleteRoom.reset()
      })
      .catch((error)=>{
        console.error("error on delete function" , error)
      });
    });

    }
    

  const handleNewRoom = async (e) => {
    e.preventDefault();
    console.log(uploadedImages)
    // //FUNCTION TO STORE DATA TO FIREBASE ,  this stores all the information that comes with the room type .
    try {

      const docRef = await addDoc(collection(db, "roomTypes"), {
        room_type: roomType,
        roomNum: roomNum,
        roomDescription: roomDescription,
        num_Beds: num_Beds,
        price: price,
        totalOccupants: totalOccupants,
        imageURL: imageURL,
        uploadedImages : uploadedImages
         //subimage is the object , storing it with url stores the url of the image
      });
      console.log(docRef);
      setUploadedImages([]);
      
     
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
        <br/>

        <label>Insert Main Image: </label>
        <input
          type="file"
          className="form-control"
          onChange={(event) => setImageUpload(event.target.files[0])}
        />
        <button className="btn btn-primary" onClick={handleUpload}>
          UPLOAD
        </button>
        <br/>
        <label>Insert Sub Room Images: </label>
        <input
          type="file"
          className="form-control"
          multiple 
          onChange={(event) => setSubImages(event.target.files)}
        />
      
        <button className="btn btn-primary" onClick={handleOtherUpload}>
          UPLOAD
        </button>
        <br />

        <button className="btn btn-success" onClick={handleNewRoom}>
          SAVE NEW ROOM
        </button>
      </div>
     
      <div className="container mt-5">
    <form class="delete">
        <div class="form-group">
            <label for="id">Room ID :</label>
            <input type="text" class="form-control" name="id" required />
        </div>
        <button class="btn btn-danger"onClick={deleteroom}>Delete Room</button>
    </form>
    </div>
     
    </div>
  ); 
};
export default NewRoom;


