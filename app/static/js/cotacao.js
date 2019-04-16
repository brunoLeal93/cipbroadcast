function format(d){
        return 'teste'
    }

$(document).ready(function() {

    var table = $('#tb_cot').DataTable({
        "language":{
                "search": "Procurar:",
                "paginate":{
                        "first":      "Primeira",
                        "last":       "Última",
                        "next":       "Próxima",
                        "previous":   "Anterior"
                    },
               "info": "Mostrando de _START_ a _END_ de _TOTAL_",
               "lengthMenu":     "Mostrando _MENU_ Linhas",
            },

        "ajax": $SCRIPT_ROOT + "/cotVisuPrin",
        "columns": [

                    { "data": "_id" },
                    {
                        "data": "mercados",
                        "render": function(data){
                                    var strMerc = '';
                                    var i = 0;
                                    var tam=data.length;
                                    var urlBase = "{{ url_for('cotacao', merc = 'XXXX') }}";
                                    for(i=0; i < tam ; i++){

                                        if( i == tam-1){

                                            strMerc = strMerc+"<a href=\""+urlBase.replace('XXXX', data[i]) +"\">"+data[i]+"</a>";
                                        }else{
                                            strMerc = strMerc+"<a href=\""+urlBase.replace('XXXX', data[i]) +"\">"+data[i]+"</a> | ";
                                        }
                                    };

                                    return strMerc;
                                }
                    },
                    { "data": "tp_instr",
                        "render": function(data){
                                    var strInstr = '';
                                    var i = 0;
                                    var tam=data.length;
                                    for(i=0; i < tam ; i++){

                                        if( i == tam-1){
                                            strInstr = strInstr +'<a href="{{url_for(cotacao, tpInst=data[i])}}">'+data[i]+'</a>';
                                        }else{
                                            strInstr = strInstr +'<a href="{{url_for(cotacao, tpInst=data[i])}}">'+data[i]+'</a> | ';
                                        }
                                    };

                                    return strInstr;
                                }
                    }

                ],
        "order": [[0, 'asc']]
    });

    $('#tb_cot tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );

            if ( row.child.isShown() ) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            }
            else {
                // Open this row
                row.child( format(row.data()) ).show();
                tr.addClass('shown');
            }
    } );

} );