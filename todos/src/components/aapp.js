
import ImageUploadForm from '@/components/ImageUploadForm';





// components/ProductForm.js
import React from 'react';
import { Formik, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
  id: Yup.number().required('Required'),
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  images: Yup.array().of(Yup.string()).required('At least one image is required'),
});

const ProductForm = ({ onSubmit }) => {
    return (
      <Formik
        initialValues={{ id: '', name: '', description: '', images: [] }}
        validationSchema={ProductSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await fetch('/api/products/create', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
  
            if (response.ok) {
              resetForm();
              onSubmit(values);
            } else {
              console.error('Error creating product:', await response.text());
            }
          } catch (error) {
            console.error('Error creating product:', error.message);
          }
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <Field type="number" name="id" />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <Field type="text" name="description" />
          </div>

          <div>
            <label htmlFor="images">Images:</label>
            <FieldArray
              name="images"
              render={(arrayHelpers) => (
                <div>
                  {values.images.map((image, index) => (
                    <div key={index}>
                      <input
                        type="text"
                        name={`images[${index}]`}
                        value={values.images[index]}
                        readOnly
                      />
                      <button type="button" onClick={() => arrayHelpers.remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <ImageUploadForm onImageUpload={(imageUrl) => setFieldValue('images', [...values.images, imageUrl])} />
                </div>
              )}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default ProductForm;
