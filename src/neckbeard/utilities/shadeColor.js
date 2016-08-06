/**
 * shadeColor
 *
 * @param  {String} percent (0.10 lighter or -0.10 darker)
 * @param  {String} color hex or RGB
 * @param  {String} color2 hex or RGB (optional) for blending colors
 * @return {String}
 */
export default function shadeColor(p,c0,c1) {
    console.log(p,c0,c1)
    let n=p<0?p*-1:p,u=Math.round,w=parseInt
    if(c0.length>7) {
        let f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2])
        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
    } else{
        let f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF
        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
    }
}
