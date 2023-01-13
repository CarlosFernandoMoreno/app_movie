import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
       <div class="card">
        <div class="card-header">
            Header
        </div>
        <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
        </div>
        <div class="card-footer text-muted">
            Footer
        </div>
       </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
