import React, {
  useState,
  useCallback,
} from 'react';
import {
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';

const Profile = () => {
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState('Hello, I am Green Coder. Welcome to my profile!');
  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState(bio);
  const [showModal, setShowModal] = useState(false);
  const [objectUrl, setObjectUrl] = useState(null);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setObjectUrl(url);
      setImage(file);
    } else {
      console.error('Please select an image file.');
    }
  }, []);

  const handleModalClose = useCallback(() => {
    setShowModal(false);
    if (objectUrl) {
      URL.revokeObjectURL(objectUrl);
    }
    setImage(null);
  }, [objectUrl]);

  const handleEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    setBio(newBio);
    setIsEditing(false);
  }, [newBio]);

  return ( <
    Container className = "mt-5" >
    <
    Row className = "justify-content-center" >
    <
    Col xs = {
      12
    }
    md = {
      6
    } >
    <
    div className = "text-center mb-3" >
    <
    Image src = {
      objectUrl || image || 'https://via.placeholder.com/150'
    }
    alt = "Profile"
    roundedCircle fluid style = {
      {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        color: '#1EEC73'
      }
    }
    className = "mb-3" /
    >
    <
    Button variant = "secondary"
    onClick = {
      () => setShowModal(true)
    } >
    Change Picture <
    /Button> <
    /div>

    <
    div className = "mt-3 text-center" > {
      isEditing ? ( <
        Form.Control as = "textarea"
        rows = {
          3
        }
        value = {
          newBio
        }
        onChange = {
          (e) => setNewBio(e.target.value)
        }
        />
      ) : ( <
        p > {
          bio
        } < /p>
      )
    } <
    /div>

    <
    div className = "mt-3 text-center" > {
      isEditing ? ( <
        Button variant = "success"
        onClick = {
          handleSave
        } >
        Save Changes <
        /Button>
      ) : ( <
        Button variant = "primary"
        onClick = {
          handleEdit
        } >
        Edit Profile <
        /Button>
      )
    } <
    /div>

    {
      /* Modal for image upload */ } <
    Modal show = {
      showModal
    }
    onHide = {
      handleModalClose
    } >
    <
    Modal.Header closeButton >
    <
    Modal.Title > Upload New Profile Picture < /Modal.Title> <
    /Modal.Header> <
    Modal.Body >
    <
    Form >
    <
    Form.Group controlId = "formFile" >
    <
    Form.Label > Select an image < /Form.Label> <
    Form.Control type = "file"
    onChange = {
      handleImageChange
    }
    /> <
    /Form.Group> <
    /Form> <
    /Modal.Body> <
    Modal.Footer >
    <
    Button variant = "secondary"
    onClick = {
      () => setShowModal(false)
    } >
    Close <
    /Button> <
    /Modal.Footer> <
    /Modal> <
    /Col> <
    /Row> <
    /Container>
  );
};

export default Profile;