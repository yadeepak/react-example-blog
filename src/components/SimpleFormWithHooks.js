import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "../redux/action";
export function SimpleFormWithHooks() {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state);
  console.log(blogs);
  const [data, setData] = useState({ title: "", description: "" });
  useEffect(() => {
    console.log("useeffect");
    setData({ ...data, title: data.title + data.description });
    // return () =>{
    //     console.log("compont un mounted");
    // }
  }, [data.description]);

  useEffect(async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list?limit=10");
    console.log(data);
    dispatch(
      addBlog({
        title: "sdf2",
        description: "sdfh",
      })
    );
  }, []);
  
  useEffect(() => {}, [data.description]);

  return (
    <form>
      <input
        value={data.title || user.name}
        onChange={(e) =>
          setData((prevState) => ({ ...prevState, title: e.target.value }))
        }
      />{" "}
      <br />
      <br />
      <textarea
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      ></textarea>
      <br />
      <input type="submit" />
    </form>
  );
}
