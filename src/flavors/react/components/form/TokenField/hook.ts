import { useState, useEffect, useRef } from 'react'

function inputtedValueIsValid(value) {
  const numberValue = Number(value)
  const isNaN = Number.isNaN(numberValue)
  return !isNaN
}

export default function useTokenInput({
  size,
  onCompleteToken,
  onChange,
  onChangeTimer,
  timer,
}) {
  const rootElementRef = useRef(null)
  const [tokenMap, setTokenMap] = useState(_getDefaultTokens())
  const [timerTime, setTimerTime] = useState(timer)

  useEffect(_handleValueEvents, [tokenMap])
  useEffect(_handleStartTimer, [])
  useEffect(_handleTimerUpdate, [timerTime])

  function _handleValueEvents() {
    const tokenValueArray =
      Object.keys(tokenMap).map((key) => tokenMap[key]) || []
    const stringField = tokenValueArray.join('')
    const isTokenValid = stringField.length === size
    if (!!onChange) onChange(stringField)

    if (!!isTokenValid && !!onCompleteToken) {
      onCompleteToken(stringField)
    }
  }

  function _handleStartTimer() {
    let interval
    if (!!timer && typeof timer === 'number') {
      interval = setInterval(() => {
        setTimerTime((currentTime) => {
          const reachedTheLimit = currentTime === 0
          if (reachedTheLimit) {
            return timer
          } else {
            return currentTime - 1
          }
        })
      }, 1000)
    }
    return () => !!interval && clearInterval(interval)
  }

  function _handleTimerUpdate() {
    if (!!onChangeTimer) onChangeTimer(timerTime)

    if (timerTime === 0) {
      setTokenMap(_getDefaultTokens())
      _resetFocus()
    }
  }

  function _getDefaultTokens() {
    return [...Array(size)].reduce((acc, _, i) => ({ ...acc, [i]: '' }), {})
  }

  function _goToNextInput(i) {
    const nextItem = rootElementRef.current.querySelector(
      `[data-token-i='${i + 1}']`
    )
    if (!!nextItem) nextItem.focus()
  }

  function _resetFocus() {
    const firstItem = rootElementRef.current.querySelector(`[data-token-i='0']`)
    firstItem.focus()
  }

  function onKeyUpHandler(e, i) {
    const hasBackspacePressed = e.which === 8 || e.key === 'Backspace'
    if (hasBackspacePressed) {
      setTokenMap({ ...tokenMap, [i]: '' })
      const previousItem = rootElementRef.current.querySelector(
        `[data-token-i='${i - 1}']`
      )
      if (!!previousItem) previousItem.focus()
    }
  }

  function onChangeNumber(e) {
    e.preventDefault()
    let value = e?.target?.value
    const isNumberValid = inputtedValueIsValid(value)
    const isEmpty = value === ''

    if (isNumberValid) {
      let firstEmptyIndex = Object.keys(tokenMap).findIndex(
        (index) => tokenMap[index] === ''
      )

      if (value.length > 1) {
        firstEmptyIndex = firstEmptyIndex - 1
        value = value[value.length - 1]
      }

      if (firstEmptyIndex < 0) return

      setTokenMap({ ...tokenMap, [firstEmptyIndex]: value })
      if (!isEmpty) _goToNextInput(firstEmptyIndex)
    }
  }

  function onPasteNumber(e) {
    e.preventDefault()
    const value = e.clipboardData.getData('Text')
    const isNumberValid = inputtedValueIsValid(value)

    if (isNumberValid) {
      const arrValue = value.split('').slice(0, size)
      setTokenMap({ ..._getDefaultTokens(), ...arrValue })

      _goToNextInput(arrValue.length - 1)
    } else {
      setTokenMap(_getDefaultTokens())
    }
  }

  return {
    onKeyUpHandler,
    onChangeNumber,
    onPasteNumber,
    tokenMap,
    rootElementRef,
  }
}
