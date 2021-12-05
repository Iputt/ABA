<template>
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>户型图@3x</title>
    <defs>
        <linearGradient x1="25.7378583%" y1="76.419064%" x2="98.2064372%" y2="1.7193134%" id="linearGradient-1">
            <stop stop-color="#94E2DE" stop-opacity="0.7" offset="0%"></stop>
            <stop stop-color="#94BFE0" stop-opacity="0.2" offset="48.2663307%"></stop>
            <stop stop-color="#94A1E2" stop-opacity="0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="61.5385544%" y1="37.5796714%" x2="0.55545354%" y2="99.5316083%" id="linearGradient-2">
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="30.9029354%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="52.0917953%" cy="39.3319967%" fx="52.0917953%" fy="39.3319967%" r="208.138202%" gradientTransform="translate(0.520918,0.393320),scale(0.277776,1.000000),rotate(24.352396),translate(-0.520918,-0.393320)" id="radialGradient-3">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="52.0917953%" cy="39.3319967%" fx="52.0917953%" fy="39.3319967%" r="201.987922%" gradientTransform="translate(0.520918,0.393320),scale(0.288064,1.000000),rotate(25.144531),translate(-0.520918,-0.393320)" id="radialGradient-4">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="52.0917953%" cy="39.3319967%" fx="52.0917953%" fy="39.3319967%" r="183.79959%" gradientTransform="translate(0.520918,0.393320),scale(0.324072,1.000000),rotate(27.836524),translate(-0.520918,-0.393320)" id="radialGradient-5">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
            <stop stop-color="#FFFFFF" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="2.54657406e-13%" y1="50%" x2="100%" y2="49.9998454%" id="linearGradient-6">
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="30.685451%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="70.4134288%"></stop>
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="2.54657406e-13%" y1="50%" x2="100%" y2="49.9990339%" id="linearGradient-7">
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="30.685451%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="70.4134288%"></stop>
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="2.54657406e-13%" y1="50%" x2="100%" y2="49.9996845%" id="linearGradient-8">
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="30.685451%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="70.4134288%"></stop>
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="2.54657406e-13%" y1="50%" x2="100%" y2="49.9999734%" id="linearGradient-9">
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="30.685451%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="70.4134288%"></stop>
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="2.54657406e-13%" y1="50%" x2="100%" y2="49.9995706%" id="linearGradient-10">
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="30.685451%"></stop>
            <stop stop-color="#1EFFF4" stop-opacity="0.8" offset="70.4134288%"></stop>
            <stop stop-color="#03D8FF" stop-opacity="0.8" offset="100%"></stop>
        </linearGradient>
        <linearGradient id="highlight-quiet" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#48EBE3" stop-opacity="0.8"></stop>
          <stop offset="100%" stop-color="#3CCAE4" stop-opacity="0.8"></stop>
        </linearGradient>
    </defs>
    <polygon class="polygon" :style="polygonStyle(polygon.id)" v-for="polygon in polygons" fill="rgba(255,255,255,0)" stroke="#ffffff" stroke-width="6" opacity="0.4" :points="polygon.points">
    </polygon>                        
    <text v-for="point in centerPoints" style="text-anchor: middle" font-family="PingFangSC-Regular, PingFang SC" font-size="14.4" font-weight="normal" fill="#FFFFFF" fill-opacity="0.9">
        <tspan :x="point.X" :y="point.Y">{{point.name}}</tspan>
        <tspan :x="point.X" :y="point.Y" dy="18">11.9m²</tspan>
    </text> 
    <g id="目标点" :transform="viewerStyle">
      <path d="M1.56781031,0.762077339 C8.31578346,2.46256028 14.3252776,5.94919813 19.0723302,10.6978518 C23.8195435,15.4466662 27.3042299,21.4575818 29.0023738,28.2064063 L29.0023738,28.2064063 L1.56781031,28.2218334 Z" id="矩形" stroke="url(#linearGradient-2)" stroke-width="1.2" fill="url(#linearGradient-1)"></path>
      <ellipse id="椭圆形" fill="#FFFFFF" cx="3" cy="26.3677626" rx="3" ry="3.00230947"></ellipse>
    </g>               
</svg>
</template>

<script lang='ts'>
import { defineComponent, reactive, onMounted, nextTick, computed, ref } from 'vue'
import useMousePosition from '../hooks/useMousePosition'

export default defineComponent({
  name: 'FloorPlan', 
  props: {
  },
  setup(){
    let sourceData = reactive([
      {"ID":"Cnaa4fWU","Name":"玄关","Polygon":[{"X":-534.0,"Y":-59.0},{"X":-670.0,"Y":-59.0},{"X":-670.0,"Y":96.0},{"X":-534.0,"Y":96.0}]},
      {"ID":"iTvzINKs","Name":"客餐厅","Polygon":[{"X":-37.0,"Y":-581.0},{"X":-534.0,"Y":-581.0},{"X":-534.0,"Y":96.0},{"X":-37.0,"Y":96.0}]},
      {"ID":"rLsN9372","Name":"过道","Polygon":[{"X":446.0,"Y":-305.0},{"X":321.0,"Y":-305.0},{"X":321.0,"Y":-21.0},{"X":-37.0,"Y":-21.0},{"X":-37.0,"Y":84.0},{"X":446.0,"Y":84.0}]},
      {"ID":"QHVF2z8P","Name":"衣帽间","Polygon":[{"X":321.0,"Y":-305.0},{"X":-37.0,"Y":-305.0},{"X":-37.0,"Y":-21.0},{"X":321.0,"Y":-21.0}]},
      {"ID":"dvXiP3AN","Name":"次卧","Polygon":[{"X":755.0,"Y":-627.0},{"X":-16.0,"Y":-627.0},{"X":-16.0,"Y":-305.0},{"X":446.0,"Y":-305.0},{"X":446.0,"Y":-90.0},{"X":806.0,"Y":-90.0},{"X":806.0,"Y":-598.0},{"X":755.0,"Y":-598.0}]},
      {"ID":"6eiwYo9U","Name":"主卧","Polygon":[{"X":806.0,"Y":-90.0},{"X":446.0,"Y":-90.0},{"X":446.0,"Y":464.0},{"X":806.0,"Y":464.0}]},
      {"ID":"UssYkwu7","Name":"主卫","Polygon":[{"X":446.0,"Y":84.0},{"X":242.0,"Y":84.0},{"X":242.0,"Y":440.9999},{"X":446.0,"Y":440.99985}]},
      {"ID":"bykHmibl","Name":"卫生间","Polygon":[{"X":242.0,"Y":84.0},{"X":-16.0,"Y":84.0},{"X":-16.0,"Y":440.9999},{"X":242.0,"Y":440.9999}]},
      {"ID":"iCk5L1rD","Name":"餐厅","Polygon":[{"X":-241.0,"Y":96.0},{"X":-534.0,"Y":96.0},{"X":-534.0,"Y":441.0001},{"X":-241.0,"Y":441.0}]},
      {"ID":"dgx9Gnp2","Name":"厨房","Polygon":[{"X":-16.0,"Y":96.0},{"X":-241.0,"Y":96.0},{"X":-241.0,"Y":441.0},{"X":-16.0,"Y":440.9999}]},
      {"ID":"4SSsGV0a","Name":"楼梯","Polygon":[{"X":-534.0,"Y":96.0},{"X":-693.0,"Y":96.0},{"X":-693.0,"Y":233.0},{"X":-534.0,"Y":233.0}]},
      {"ID":"wzMvsOqd","Name":"储物间","Polygon":[{"X":-693.0,"Y":96.0},{"X":-793.0,"Y":96.0},{"X":-793.0,"Y":172.0},{"X":-693.0,"Y":172.0}]},
      {"ID":"zpIcIWSn","Name":"楼梯1","Polygon":[{"X":-693.0,"Y":172.0},{"X":-815.0,"Y":172.0},{"X":-815.0,"Y":348.0},{"X":-534.0,"Y":348.0},{"X":-534.0,"Y":233.0},{"X":-693.0,"Y":233.0}]},
      // {"ID":"tn9JqDsI","Name":"过道","Polygon":[{"X":-562.0,"Y":57.0},{"X":-805.0,"Y":57.0},{"X":-805.0,"Y":186.0},{"X":-699.0,"Y":186.0},{"X":-699.0,"Y":252.0},{"X":-562.0,"Y":252.0}]},
      // {"ID":"TnoEbVnI","Name":"生活阳台","Polygon":[{"X":259.0,"Y":-360.0},{"X":-805.0,"Y":-360.0},{"X":-805.0,"Y":57.0},{"X":-562.0,"Y":57.0},{"X":-562.0,"Y":628.0},{"X":-20.0,"Y":628.0},{"X":-20.0,"Y":607.0},{"X":259.0,"Y":607.0}]}
    ]);
    let polygons: any = reactive([]); //polygon图形集合
    let centerPoints: any = reactive([]); //polygon质心坐标
    let highlight = ref('') //高亮房间ID
    let {x, y} = useMousePosition();

    onMounted(() => {
      handleSourceData();
      highlight.value = 'dvXiP3AN'
    })

    let viewerStyle: any = computed(() => {
      let _x = x.value || 800;
      let _y = y.value || 646;
      return `translate(${_x}, ${_y}) rotate(${_x - _y})`
    })

    /**
     * polygon样式计算
     */
    let polygonStyle: any = computed(() => {
      return (id: string) => {
        if(highlight.value === id){
          return{
            fill: 'url(#highlight-quiet)',
          }
        }
      }
    })

    /**
     * 处理房间尺寸信息
     */
    const handleSourceData = () => {
      sourceData.forEach(item => {
        let copyPolygon: any = [];
        let polygon = {
          id: '',
          name: '',
          points: '',
          center: {X: 0,Y: 0}
        }
        let center = {
          X: 0,
          Y: 0,
          name: ''
        }
        polygon.id = item.ID;
        polygon.name = item.Name;
        let points:number[] = [];
        item.Polygon.forEach(_point => {
          let vertor = toScreenPosition(_point);
          copyPolygon.push(vertor);
          points.push(vertor.X);
          points.push(vertor.Y);
        })
        let _cen = getPolygonAreaCenter(copyPolygon)
        center.X = _cen.X;
        center.Y = _cen.Y;
        center.name = item.Name;
        centerPoints.push(center);
        polygon.points = points.join(' ');
        polygons.push(polygon);
        console.log("polygons.push", polygons)
      })
    }

    /**
     * 计算线段、多边形中点坐标
     * 待优化
     */
    const computedCenter = (arrays: any) => {
      let yArrays: any = [];
      let xArrays: any = [];
      arrays.forEach((item: any) => {
        yArrays.push(item.Y);
        xArrays.push(item.X);
      });
      return {
        X: (Math.max(...xArrays) + Math.min(...xArrays)) / 2,
        Y: (Math.max(...yArrays) + Math.min(...yArrays)) / 2,
      };
    };

    /**
     * 转为屏幕坐标
     * @param point
     * @return {[number, number]}
     */
    const toScreenPosition = (point : any) => {
      let widthHalf = window.innerWidth / 2; //此处应使用画布长和宽
      let heightHalf = window.innerHeight / 2;
      let rx = point.X * 0.4 + widthHalf;
      let ry = heightHalf - point.Y * 0.4;
      return {X: rx, Y: ry};
    };

    /**
     * 计算中心点与两个相邻点位构成的区域
     */
    const computedArea = (p0: any, p1: any, p2: any) => {
      let _area = p0.X * p1.Y + p1.X * p2.Y + p2.X * p0.Y - p1.X * p0.Y - p2.X * p1.Y - p0.X * p2.Y;
      return _area / 2;
    }
    
    /**
     * 计算polygon质心
     */
    function getPolygonAreaCenter(points: any) {
        let sum_x = 0;
        let sum_y = 0;
        let sum_area = 0;
        let p1 = points[1];
        for (let i = 2; i < points.length; i++) {
            let p2 = points[i];
            let area = computedArea(points[0],p1,p2) ;
            sum_area += area ;
            sum_x += (points[0].X + p1.X + p2.X) * area;
            sum_y += (points[0].Y + p1.Y + p2.Y) * area;
            p1 = p2 ;
        }
        var xx = sum_x / sum_area / 3;
        var yy = sum_y / sum_area / 3;
        return {X: xx, Y: yy}
    }


    return {
      polygons,
      centerPoints,
      polygonStyle,
      viewerStyle
    }
  }
})
</script>

<style scoped>
.polygon{
  fill: rgba(255,255,255, 0);
  transition-duration: 3s;
  transition-property: all;
  transition-timing-function: ease;
  transition-delay: 1s;
  /* transition: all 2s ease 0s; */
}
.polygon:hover{
  fill:url(#highlight-quiet);
}
</style>
