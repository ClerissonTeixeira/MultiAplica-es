import "./StyleToDo.css";
import Trash from "../../assets/lixeira.png";

function ToDO() {
  const users = [
    {
      id: "0001",
      nome: "Rodolfo",
      age: 33,
      email: "rod@gmail.com",
    },
    {
      id: "0002",
      nome: "Aline",
      age: 41,
      email: "Aline@gmail.com",
    },
  ];

  return (
    <div className="ToDo">
      <div className="todo-container">
        <form>
          <h1>To DO</h1>
          <input name="nome" type="text" />
          <button className="buttCadastro" type="button">
            {" "}
            + Add Tarefa
          </button>
        </form>
        <div className="user-list-scroll">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="tarefa-info">
                <input type="checkbox" className="tarefa-checkbox" />
                <p>Tarefa: {user.nome}</p>
              </div>
              <button className="butExcluir">
                <img src={Trash} className="trash-icon" alt="Excluir usuário" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDO;
