import PropTypes from "prop-types";
import { FaDumbbell, FaUser } from "react-icons/fa";
import { MdEmail, MdSportsBasketball } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdPriceChange } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { GrStorage } from "react-icons/gr";
import { BiSolidCustomize } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import swal from "sweetalert";

const UpdateEquipmentForm = ({ product }) => {
  const { user } = useContext(AuthContext);
  const UpdateEquipmentHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name") || "";
    const eqName = form.get("eqName");
    const eqImage = form.get("eqImage");
    const eqCategory = form.get("eqCategory");
    const eqPrice = form.get("eqPrice");
    const eqRating = form.get("eqRating");
    const eqDelivery = form.get("eqDelivery");
    const eqStock = form.get("eqStock");
    const eqCustom = form.get("eqCustom");
    const eqDescription = form.get("eqDescription");

    const equipment = {
      email,
      name,
      eqName,
      eqImage,
      eqCategory,
      eqPrice,
      eqRating,
      eqDelivery,
      eqStock,
      eqCustom,
      eqDescription,
    };
    // console.log(equipment);

    // Send Data to Backend
    fetch(
      `https://faisasportsserver.vercel.app/equipment/update_info/${product._id}`,
      {
        method: "PUT",
        body: JSON.stringify(equipment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        swal(
          "Equipment Add Successful",
          "You Successfully Added an Equipment",
          "success"
        );
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="flex justify-center item-center min-h-screen flex-col ">
        <h2 className="text-3xl font-bold mb-8 text-center  my-4">
          Updata Your Equipment Information
        </h2>
        <form
          className="grid grid-cols-2 gap-4 max-w-screen-md mx-auto mb-12"
          onSubmit={UpdateEquipmentHandler}
        >
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
            <input
              type="email"
              className="grow"
              value={user.email}
              name="email"
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              className="grow"
              value={user.displayName || ""}
              name="name"
              readOnly
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 ">
            <FaDumbbell />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Name"
              name="eqName"
              defaultValue={product.eqName}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdSportsBasketball />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Image URL"
              name="eqImage"
              defaultValue={product.eqImage}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCategoryAlt />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Category"
              name="eqCategory"
              defaultValue={product.eqCategory}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdPriceChange />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Price"
              name="eqPrice"
              defaultValue={product.eqPrice}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdGeneratingTokens />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Ratings"
              name="eqRating"
              defaultValue={product.eqRating}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <GiDeliveryDrone />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Delivery Time"
              name="eqDelivery"
              defaultValue={product.eqDelivery}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <GrStorage />
            <input
              type="text"
              className="grow"
              placeholder="Equipment Stock Status"
              defaultValue={product.eqStock}
              name="eqStock"
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <BiSolidCustomize />
            <input
              type="text"
              className="grow"
              placeholder="Customize Equipment"
              defaultValue={product.eqCustom}
              name="eqCustom"
            />
          </label>
          <label className="input input-bordered flex items-start p-4 gap-2 col-span-2 min-h-20">
            <BiSolidCustomize />
            <textarea
              className="grow"
              placeholder="Write Your Equipment Description"
              cols={"3"}
              defaultValue={product.eqDescription}
              name="eqDescription"
            ></textarea>
          </label>

          <button type="submit" className="btn btn-primary col-span-2">
            Update Your Equipment
          </button>
        </form>
      </div>
    </>
  );
};

UpdateEquipmentForm.propTypes = {
  product: PropTypes.object,
};

export default UpdateEquipmentForm;
