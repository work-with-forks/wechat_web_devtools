'use strict';!function(require,directRequire){async function a(){const a=global.windowMap.get('MAIN').window,b=document.createElement('input');return b.style.display='none',b.setAttribute('type','file'),b.setAttribute('accept','image/*'),a.document.body.appendChild(b),b.click(),new Promise((c)=>{b.addEventListener('change',()=>{a.document.body.removeChild(b),c({success:!0,filePath:b.value})}),b.addEventListener('cancel',()=>{a.document.body.removeChild(b),c({success:!1})})})}const b=require('fs'),c=require('react'),d=require('redux'),e=require('url'),f=require('querystring'),g=require('./fc137838572a83604db39acff8e909e0.js'),h=require('./eadce02c750c875a10680bcfedadec88.js'),i=require('./a8c87029da0fa06e986298d447ab0fe2.js'),j=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),k=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),l=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),m=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),n=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),o=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),p=require('./f171257bbcaef547a3cf27266ccb0db2.js'),q=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),r=require('./15ba1827c7f6564a45df6bd44da3a977.js'),{connect:s}=require('react-redux'),t=require('./common/locales/index.js');class u extends c.Component{componentDidMount(){this._cancalLocaleListener=t.onChangeLocale(()=>this.forceUpdate())}componentDidUpdate(a){this.props.show!==a.show&&this.props.show&&this.currentItemMark&&this.currentItemMark.scrollIntoViewIfNeeded&&this.currentItemMark.scrollIntoViewIfNeeded()}componentWillUnmount(){this._cancalLocaleListener()}onAddCustomCompile(){this.props.setCustomCompile({show:this.props.compileType,id:-1}),this.props.toggleClickKey(h.NONE)}onSelect(a){this.props.selectCompileCondiction(a)}onEditItemClick(a,b){b.stopPropagation(),this.props.setCustomCompile({show:this.props.compileType,id:a}),this.props.toggleClickKey(h.NONE)}async onQrcodeCompile(){const c=await a();if(c.success){const a=c.filePath;r({url:`${p.jsDecodeQRCodeURL}`,method:'post',body:b.readFileSync(a),needToken:1,needAppID:1}).then((a)=>{const b=a.body;if(b.result||b.path){const a=b.path?decodeURIComponent(b.path):'';if(b.is_self_wxa){const c=e.parse(a),d=f.parse(c.query||'',null,null,{decodeURIComponent:(a)=>a});return this.props.compile({origin:q.COMPILE_ORIGIN.BUTTON,condiction:{pathName:(c.pathname||'').replace(/\.html$/,''),scene:'WX_CODE'==b.scan_type?1047:1011,query:d}})}if(!1===b.is_self_wxa)return this.props.showError(t.config.COMPILE_CONDITION_APPID_ERR);if(0==b.result.indexOf('https://open.weixin.qq.com/sns/getexpappinfo')){let a=e.parse(b.result),c=f.parse(a.query);return c.appid==this.props.project.appid?(a=e.parse(c.path||''),c=f.parse(a.query||'',null,null,{decodeURIComponent:(a)=>a}),this.props.compile({origin:q.COMPILE_ORIGIN.BUTTON,condiction:{pathName:(a.pathname||'').replace(/\.html$/,''),scene:1011,query:c}})):void this.props.showError(t.config.COMPILE_CONDITION_APPID_ERR)}return this.props.showError(t.config.COMPILE_CONDITION_PROGRAM_ERR)}return this.props.showError(t.config.COMPILE_CONDITION_ERR)}).catch((a)=>{this.props.showError(t.config.COMPILE_CONDITION_ERR_WITH_DETAIL.format(a))})}}render(){const a=this.props,b=a.list.map((b,d)=>c.createElement('div',{className:'ui-dropdown-item',key:d,onClick:this.onSelect.bind(this,d)},c.createElement('div',{className:'ui-dropdown-item-hd'},a.current==d?c.createElement('i',{className:'ui-icon-tick',ref:(a)=>this.currentItemMark=a}):null),c.createElement('div',{className:'ui-dropdown-item-bd'},c.createElement('span',null,b.name)),c.createElement('div',{className:'ui-dropdown-item-ft',onClick:this.onEditItemClick.bind(this,d)},c.createElement('span',{className:'ui-dropdown-opr'},c.createElement('i',{className:'ui-icon-pencil'})))));return c.createElement('div',{className:'ui-popover',style:{top:this.props.top,left:this.props.left,display:a.show?'':'none'}},c.createElement('div',{className:'ui-dropdown'},c.createElement('div',{className:'ui-dropdown-item',onClick:this.onSelect.bind(this,-1)},c.createElement('div',{className:'ui-dropdown-item-hd'},-1==a.current?c.createElement('i',{className:'ui-icon-tick'}):null),c.createElement('div',{className:'ui-dropdown-item-bd'},c.createElement('span',null,t.config.TOOLBAR_ORDINARY_COMPILATION))),c.createElement('div',{className:'ui-dropdown-divider'}),c.createElement('div',{style:{maxHeight:'300px',overflowY:'auto'}},b),c.createElement('div',{className:'ui-dropdown-divider',style:b&&0<b.length?{}:o.displayNone}),c.createElement('div',{className:'ui-dropdown-item',onClick:this.onAddCustomCompile.bind(this)},c.createElement('div',{className:'ui-dropdown-item-hd'},c.createElement('i',{className:'ui-icon-plus'})),c.createElement('div',{className:'ui-dropdown-item-bd'},c.createElement('span',null,t.config.TOOLBAR_ADD_COMPILATION_MODE))),c.createElement('div',{className:'ui-dropdown-item',onClick:this.onQrcodeCompile.bind(this)},c.createElement('div',{className:'ui-dropdown-item-hd'},c.createElement('i',{className:'ui-icon-qrcode'})),c.createElement('div',{className:'ui-dropdown-item-bd'},c.createElement('span',null,t.config.TOOLBAR_QR_CODE_COMPILATION)))))}}module.exports=s((a)=>{const b=a.toolbar.clickKey==h.COMPILECONDICTION,c=a.project.current||{},d=c.compileType,e=c.condiction&&c.condiction[d]||{},f=e.current,g=e.list||[];return{compileType:d,show:b,current:f,list:g,project:c}},(a)=>({toggleClickKey:l.bindActionCreators(g.toggleClickKey,a),setCustomCompile:l.bindActionCreators(i.setCustomCompile,a),selectCompileCondiction:l.bindActionCreators(m.selectCompileCondiction,a),showError:l.bindActionCreators(j.showError,a),compile:l.bindActionCreators(k.compileImmediate,a)}))(u)}(require('lazyload'),require);