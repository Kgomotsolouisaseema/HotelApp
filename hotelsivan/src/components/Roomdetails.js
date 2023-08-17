import Modal from "react-modal";

function Roomdetails({ isOpen, closeModal, room }) {
    console.log({ closeModal});

  return (
    // <div>
    //  {room && (
    //     <div>

    //       <h2>{room.room_type}</h2>
    //       <p>{room.roomDescription}</p>

    //     </div>
    //   )}
    //   <button onClick={onRequestClose}>Close</button>
    // </div>
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
  
      ariaHideApp={false}
      contentLabel="Selected Option"
    >

      {room && (
        <div>
          <h2 >{room.room_type}</h2>
          <p>{room.roomDescription}</p>
        
        </div>
      )}
      <button onClick={ closeModal}>Close</button>
    </Modal>
  );
}

export default Roomdetails;
