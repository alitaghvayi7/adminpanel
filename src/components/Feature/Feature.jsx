import './feature.css';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Feature({arrowType}) {
  return (
    <div className='featureItem'>
        <div className="featureTitle">Revanue</div>
        <div className="featurePriceInfo">
            <span className="featurePrice">$2,145</span>
            <span className="featureState">-11.4
                {arrowType === 'negative' && <ArrowDownwardOutlinedIcon className={`featureIcon negative`}/>}
                {arrowType === 'positive' && <ArrowUpwardIcon className={`featureIcon positive`}/>}
            </span>
        </div>
        <div className="featureDesc">
        Compared to last month
        </div>
    </div>
  )
}
