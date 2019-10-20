module.exports = function api( options ) {
  
    var valid_ops = { sum:'sum', product:'product' }
  
    this.add( 'role:api,path:calculate', function( msg, respond ) {
      var operation = msg.args.params.operation
      var left = msg.args.query.left
      var right = msg.args.query.right
      console.log(left,right)
      respond();
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