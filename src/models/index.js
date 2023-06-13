import Emprestimo from "./Emprestimo";
import Usuario from "./Usuario";

(async () => {
  await Usuario.sync({ force: true });
  await Emprestimo.sync({ force: true });
})();
