import { /* Form */ Input, Button, DatePicker } from "antd";
const { RangePicker } = DatePicker;

export function Schedule() {
  return (
    <div>
      <h2 className="m-2">Registrar Horario</h2>
      <div className="todo-list container flex items-center">
        <div className="flex">
          <Input placeholder="Nombre" className="m-2" />
          <RangePicker className="full-width m-2" />
        </div>
        <Button type="primary" className="m-2" ghost>
          Registrar
        </Button>
      </div>
    </div>
  );
}
