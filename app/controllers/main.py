from flask import render_template, request, jsonify
from app import app

## CRIAR PAGINA PARA SE LOGAR
@app.route('/login', methods=('GET', 'POST'))
def login():
        return render_template('index.html')

@app.route('/Conteudo-vs-Pacotes')
def ppp():
        return render_template('ppp.html')
@app.route('/Home', methods=('GET', 'POST'))
@app.route('/', methods=('GET', 'POST'))
def home():
        
        return render_template('index.html')

@app.route('/noticiosos', methods=('GET' , 'POST'))
def noticiosos():
        return render_template('noticiosos.html')

@app.route('/bpro-terminal', methods=('GET' , 'POST'))
def bpro_terminal():
        return render_template('bcpro.html')

@app.route('/bpro-web', methods=('GET' , 'POST'))
def bpro_web():
        return render_template('bcpro.html')

@app.route('/bpro-wallboard', methods=('GET' , 'POST'))
def bpro_wallboard():
        return render_template('bcpro.html')

@app.route('/bagro-terminal', methods=('GET' , 'POST'))
def bagro_terminal():
        return render_template('bcagro.html')

@app.route('/bagro-web', methods=('GET' , 'POST'))
def bagro_web():
        return render_template('bcagro.html')

@app.route('/bagro-wallboard', methods=('GET' , 'POST'))
def bagro_wallboard():
        return render_template('bcagro.html')


@app.route('/bpol', methods=('GET' , 'POST'))
def bpol():
        return render_template('bpro.html')

@app.route('/TradingNews', methods=('GET' , 'POST'))
def tradingnews():
        return render_template('bpro.html')



