from flask import Flask, render_template

app = Flask(__name__);

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/button/<int:n>')
def button_border(n: int):
    return render_template(f'/button/button{n}.html')

if __name__ == "__main__":
    app.run(debug=False, host="0.0.0.0")