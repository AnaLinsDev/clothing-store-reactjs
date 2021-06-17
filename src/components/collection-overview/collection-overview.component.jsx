import React from 'react';
import './collection-overview-styles.scss'
import PreviewColletion from '../preview-collection/preview-collection-component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

const CollectionOverview = ({collections}) => (
    <div className = 'collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
            <PreviewColletion key={id} {...otherCollectionProps}/>))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })
  
  
export default connect(mapStateToProps)(CollectionOverview)
