module.exports = function api( options ) {
  
    var valid_ops = { sum:'sum', product:'product' }
  
    this.add( 'role:api,path:calculate', function( msg, respond ) {
      var operation = msg.args.params.operation
      var left = msg.args.query.left
      var right = msg.args.query.right
      var total= left+right //error, de esta manera no suma
      console.log(left,right)
      respond({"left":left,
               "right": right,
               "total": total  
    });
    //   this.act( 'role:math', {
    //     cmd:   valid_ops[operation],
    //     left:  left,
    //     right: right,
    //   }, respond )
    })
  
    
    this.add( 'init:api', function( msg, respond ) {
      this.act('role:web',{routes:{
        prefix: '/api',
        pin:    'role:api,path:*',
        map: {
          calculate: { GET:true, suffix:'/:operation' }
        }
      }}, respond )
    })
  
  //Petición: http://localhost:3000/api/calculate/sum?left=2&right=3

  }