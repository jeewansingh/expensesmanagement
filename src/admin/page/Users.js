function Users() {
  return (
    <>
      <div class="container">
        <h2>Category List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Code</th>
              <th>Rank</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category 1</td>
              <td>CAT001</td>
              <td>1</td>
              <td>Active</td>
              <td>
                <a href="#" class="edit-link">
                  Edit
                </a>{" "}
                |
                <a href="#" class="delete-link">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>Category 2</td>
              <td>CAT002</td>
              <td>2</td>
              <td>Inactive</td>
              <td>
                <a href="#" class="edit-link">
                  Edit
                </a>{" "}
                |
                <a href="#" class="delete-link">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Users;
