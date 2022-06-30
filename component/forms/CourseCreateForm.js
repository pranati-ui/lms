import { Select, Button, Avatar,Badge } from "antd";
const { Option } = Select;
const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
  preview,
  uploadButtonText,
  handleImageRemove =(f)=>f,
  editPage= false,
}) => {
  console.log("uploadButtonText", uploadButtonText);
  const children = [];
  for (let i = 449.0; i <= 3000.0; i++) {
    children.push(<Option key={i.toFixed(2)}>INR{i.toFixed(2)}</Option>);
  }
  return (
   <>
   {values && (<form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-3 "
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          name="description"
          cols="4"
          rows="4"
          value={values.description}
          className="form-control mb-3"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <Select
              style={{ width: "100%" }}
              size="large"
              value={values.paid}
              onChange={(v) => setValues({ ...values, paid:v,price:0 })}
            >
              <Option value={true}> Paid </Option>
              <Option value={false}> Free </Option>
            </Select>
          </div>
        </div>
        {values.paid && (
          <div className="form-group">
            <Select
              defaultValue="INR 499.00"
              style={{ width: "20%" }}
              onChange={(v) => setValues({ ...values, price: v })}
              tokenSeparators={[,]}
              size="large"
            >
              {children}
            </Select>
          </div>
        )}
        <div className="form-group">
          <input
            type="text"
            name="category"
            className="form-control mt-2"
            placeholder="Category"
            value={values.category}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left mb-2 mt-3">
              {uploadButtonText}
              <input
              type="file"
              name="image"
              onChange={handleImage}
              accept="image/*"
              hidden
            />
            </label>
           
          </div>
        </div>
        {preview && (<Badge count ="X" onClick={handleImageRemove} className="pointer">
        <Avatar width={200} src={preview} />
        </Badge>
        )}
        
        {editPage && values.image && (<Avatar width={200} src={values.image.Location} />)}
      </div>
      <div className="row">
        <div className="col">
          <Button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-success"
            type="primary"
            loading={values.loading}
            size="large"
            shape="round"
           
          >
            {values.loading ? "Saving..." : "Save & Continue"}
          </Button>
        </div>
      </div>
    </form>
    )} 
    </>
  );
};
export default CourseCreateForm;
