import React from 'react'
import ImageCard from '../ImageComps/ImageCard';
import styles from './ContentGridGallery.module.scss'
export default function ContentGridGallery(props) {
    let {images} = props;

    //  Convert images to valid data structure
    images = grid_layout_mixer(images);

    return (
        <div className={styles.gridcon}>
            {
                images.map((img,i) => {

                    const gird_style = {
                        display: 'grid',
                        gridArea: `${i+1} / 1 / auto / auto`
                    }

                    if(img.length == 2){
                        return (
                            <div key={i} style={gird_style}>
                                <div className={styles.gridholder}>
                                    {
                                        img.map((image,i) => {
                                            return (
                                                <div className={styles.gridrow} key={i}>
                                                    <div className={styles.imagecon}>
                                                        <ImageCard src={image} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    }else{
                        return (
                            <div key={i} style={gird_style}>
                                <div className={styles.gridrow}>
                                    <div className={styles.imagecon}>
                                        <ImageCard src={img[0]} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

//  Convert flat array into group array
function grid_layout_mixer(sets){
    const total = sets.length, res = [];
    for(let i = 0; i<total; i++){
        if( i%4 != 3 ){
            const tem = [sets[i]];
            if( i%4 == 2 && (total > (i+1))){
                tem.push(sets[i+1]);
            }
            res.push(tem);
        }
    }
    return res;
}
