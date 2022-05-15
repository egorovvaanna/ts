import axios from "axios";

export async function fetchItems( url, setItems) {
  
    try {
      const response = await axios.get(
        url
      );
      setItems(response.data);
    } catch (e) {
      alert(e);
    }
  }
