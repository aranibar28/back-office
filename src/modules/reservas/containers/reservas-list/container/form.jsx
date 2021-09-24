import { Form, Input, Button, DatePicker } from "antd";

export function FormContainer() {
  const { RangePicker } = DatePicker;

  return (
    <div className="flex mt-0 text-center">
      <Form.Item
        label="Reserva"
        name="reserva"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el tema",
          },
        ]}
      >
        <Input placeholder="Ingresa reserva" className="full-width" />
      </Form.Item>
      <Form.Item
        label="Fecha"
        name="date"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el rango de fecha",
          },
        ]}
      >
        <RangePicker className="full-width" />
      </Form.Item>
      <Button className="ml-4" type="primary" htmlType="submit">
        Registrar
      </Button>
    </div>
  );
}
