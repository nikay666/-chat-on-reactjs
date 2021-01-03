import React from 'react'
import PropTypes from 'prop-types'
import { formatDistanceStrict } from 'date-fns'
import { ru } from 'date-fns/esm/locale'

const Time = ({date}) => {

    return (
        <>
      { formatDistanceStrict(date, new Date(), {addSuffix: true,locale: ru })  }
       </>
    )
}

Time.propTypes = {
    date: PropTypes.object.isRequired
}

export default Time
