import React from 'react';

// import bootstrap from 'bootstrap'; とすると、 import の単位が大きすぎて jquery も要求される
// Module not found: Can't resolve 'jquery' in
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
    return (
        <>
            <div className="container-fluid">
                <h4>Events form</h4>
                <form>
                    <div className="form-group">
                        {/* htmlFor で対応させることで、 Title の文字をクリックしても input がアクティブになる */}
                        <label htmlFor="formEventTitle">Title</label>
                        <input className="form-control" id="formEventTitle" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEventBody">Body</label>
                        <textarea className="form-control" id="formEventBody" />
                    </div>
                    <button className="btn btn-primary">Create Event</button>
                    <button className="btn btn-danger">
                        Delete All Events
                    </button>
                </form>
                <h4>All Events</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
};

export default App;
