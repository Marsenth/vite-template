import {
  Button,
  DragAndDropFiles,
  Form,
  Input,
  MainButton,
  NumberInput,
  RichTextarea,
  Select
} from 'ui';
import { useEffect, useState } from 'react';

const options = [
  {
    label: 'Publicado',
    value: 'PUBLISHED',
    visible: true
  },
  {
    label: 'Pausado',
    value: 'PAUSED',
    visible: true
  },
  {
    label: 'En borrador',
    value: 'DRAFT',
    visible: false
  },
];

export const ProductForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);
  const [updating, setUpdating] = useState(false);
  const form = Form.useForm();

  const handleSubmit = (publish?: boolean) => {
    const errors = form.validate();

    if (!errors) {
      if (publish) {
        setPublishing(true) 
      } else {
        setUpdating(true);
      }

      const values = form.getValues();
      console.log('values', values);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Form form={form}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          <Form.Item {...{
            Component: Input,
            label: 'Título de publicación',
            name: 'title',
            rules: [{ required: true }]
          }}/>

          <Form.Item {...{
            Component: Input,
            label: 'Nombre del producto',
            name: 'name',
            rules: [{ required: true }]
          }}/>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5">
          <Form.Item {...{
            Component: NumberInput,
            componentClassName: 'h-10',
            label: 'Precio',
            name: 'price'
          }}/>

          <Form.Item {...{
            Component: NumberInput,
            componentClassName: 'h-10',
            label: 'Stock',
            name: 'stock'
          }}/>

          <Form.Item {...{
            Component: Select,
            label: 'Estado',
            name: 'status',
            options,
            required: true
          }}/>
        </div>

        <Form.Item {...{
          Component: RichTextarea,
          label: 'Descripción de publicación',
          name: 'publicationDescription'
        }}/>

        <Form.Item {...{
          Component: RichTextarea,
          label: 'Descripción del prodducto',
          name: 'description'
        }}/>
        
        <Form.Item {...{
          Component: DragAndDropFiles,
          label: 'Selecciona las imágenes del producto',
          name: 'images',
        }}/>

        <div className="flex flex-wrap md:justify-end justify-center items-center my-5 sm:flex-row flex-col">
          <Button {...{ disabled: isLoading, loading: updating, text: 'Actualizar', onClick: () => handleSubmit(false) }}/>
          <MainButton {...{ disabled: isLoading, loading: publishing, className: 'sm:ml-4 sm:mt-0 ml-0 mt-3', text: 'Publicar', onClick: () => handleSubmit(true) }}/>
        </div>
      </Form>
    </>
  );
}