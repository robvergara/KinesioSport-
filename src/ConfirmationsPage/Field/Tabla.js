export function Tablas({ tabla }) {
  return (
    <>
      <table class="table">
        <tbody>
          {tabla.map((c, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{c.titulo}</td>
              <td>
                <div class="input-group input-group-sm">
                  <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </td>
            </tr>
          ))}

          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}

// export default Tablas;
