import React from "react";
import { useForm } from "react-hook-form";
import "./AddEvent.css";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.error(errors);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "c52aaab726332e238f3d9d23a75a804e");
    imageData.append("image", e.target.files[0]);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imageData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.display_url);
      });
  };

  //   const styles = {
  //     container: {
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     },
  //     form: {
  //       display: "flex",
  //       flexDirection: "column",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     },
  //     input: {
  //       width: "100px",
  //       height: "40px",
  //       borderRadius: "5px",
  //       border: "1px solid #ccc",
  //       padding: "0 10px",
  //       margin: "10px 0",
  //     },
  //   };
  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="allInput">
            <input name="title" {...register("name")} placeholder="Your Name" />
            <br />
            <input
              name="description"
              {...register("title")}
              placeholder="Title"
            />
            <br />

            <input name="date" {...register("date")} placeholder="Date" />
            <br />

            <input
              name="location"
              {...register("location")}
              placeholder="Location"
            />
            <br />

            <input
              name="category"
              {...register("category")}
              placeholder="Category"
            />
            <br />

            <input
              name="volunteers"
              {...register("volunteers")}
              placeholder="Volunteers Name"
            />
            <br />

            <input name="email" {...register("email")} placeholder="Email" />
            <br />

            <input name="phone" {...register("phone")} placeholder="Phone" />
            <br />

            <input
              name="image"
              {...register("image")}
              type="file"
              placeholder="Image"
              onChange={handleImageUpload}
            />
            <br />
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddEvent;