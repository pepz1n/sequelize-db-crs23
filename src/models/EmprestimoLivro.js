import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Emprestimo from "./Emprestimo";
import Livro from "./Livro";

const EmprestimoLivro = sequelize.define(
  'emprestimo_livros',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

Emprestimo.belongsToMany(Livro, {
  through: EmprestimoLivro, //tabela/modelo associativa
  as: 'livros', //'Livros'
  foreignKey: {
    name: 'idEmprestimo',
    field: 'id_emprestimo',
    allowNull: false
  }
});

Livro.belongsToMany(Emprestimo, {
  through: EmprestimoLivro,
  as: 'emprestimos',
  foreignKey: {
    name: 'idLivro',
    field: 'id_livro',
    allowNull: false
  }
});

export default EmprestimoLivro;
