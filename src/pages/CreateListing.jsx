import { useState, useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

function CreateListing() {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/sign-in');
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const onSubmit = (e) => { 
    e.preventDefault()
   }

   const onMutate = (e) => {
    // 
    }

  if (loading) {
    return <Spinner />;
  }
  return <div className='profile'>
    <header>
    <p class="pageHeader">Create a Listing</p>
    </header>
    <main>
      <form onSubmit={onSubmit}>
        <label className='formLabel'>Sell / Rent</label>
        <div className="formButtons">
          <button 
            type='button' 
            className={type === 'sale' ? 'formButtonActive' : 'formButton'} 
            id='type'
            value='sale'
            onClick={onMutate}
          >
            Sell
          </button>
          <button 
            type='button' 
            className={type === 'rent' ? 'formButtonActive' : 'formButton'} 
            id='type'
            value='rent'
            onClick={onMutate}
          >
            Rent
          </button>
        </div>
        <input 
            className='formInputName'
            type='button' 
            id='name'
            value={name}
            onChange={onMutate}
            maxLength='32'
            minLength='10'
            required
        />
        <div className="formRooms flex">
          <div>
            <label className="formLabel">Bedrooms</label>
            <input 
              className='formInputSmall' 
              type="number" 
              id='bedrooms' 
              value={bedrooms} 
              onChange={onMutate} 
              min='1' 
              max='50' 
              required
            />
          </div>
          <div>
            <label className="formLabel">Bathrooms</label>
            <input 
              className='formInputSmall' 
              type="number" 
              id='bathrooms' 
              value={bathrooms} 
              onChange={onMutate} 
              min='1' 
              max='50' 
              required
            />
          </div>
        </div>
          

      </form>
    </main>

  </div>;
}
export default CreateListing;
