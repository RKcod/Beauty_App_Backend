#!/bin/sh
# Use this script to test if a given TCP host/port are available

echoerr() {
    if [ "$WAITFORIT_QUIET" -ne 1 ]; then
        echo "$@" 1>&2
    fi
}

usage() {
    cat << USAGE >&2
Usage:
    $0 host:port [-s] [-t timeout] [-- command args]
    -h HOST | --host=HOST       Host or IP under test
    -p PORT | --port=PORT       TCP port under test
                                Alternatively, specify host and port as host:port
    -s | --strict               Only execute subcommand if the test succeeds
    -q | --quiet                Don't output any status messages
    -t TIMEOUT | --timeout=TIMEOUT
                                Timeout in seconds, zero for no timeout
    -- COMMAND ARGS             Execute command with args after the test finishes
USAGE
    exit 1
}

wait_for() {
    if [ "$WAITFORIT_TIMEOUT" -gt 0 ]; then
        echoerr "$0: waiting $WAITFORIT_TIMEOUT seconds for $WAITFORIT_HOST:$WAITFORIT_PORT"
    else
        echoerr "$0: waiting for $WAITFORIT_HOST:$WAITFORIT_PORT without a timeout"
    fi
    start_ts=$(date +%s)
    while true; do
        nc -z "$WAITFORIT_HOST" "$WAITFORIT_PORT"
        result=$?
        if [ $result -eq 0 ]; then
            end_ts=$(date +%s)
            echoerr "$0: $WAITFORIT_HOST:$WAITFORIT_PORT is available after $((end_ts - start_ts)) seconds"
            break
        fi
        sleep 1
    done
    return $result
}

# Parse arguments
WAITFORIT_HOST=""
WAITFORIT_PORT=""
WAITFORIT_TIMEOUT=15
WAITFORIT_QUIET=0
WAITFORIT_STRICT=0
WAITFORIT_CLI=""

while [ $# -gt 0 ]; do
    case "$1" in
        *:* )
            WAITFORIT_HOST=$(echo "$1" | cut -d: -f1)
            WAITFORIT_PORT=$(echo "$1" | cut -d: -f2)
            shift
            ;;
        -q | --quiet)
            WAITFORIT_QUIET=1
            shift
            ;;
        -s | --strict)
            WAITFORIT_STRICT=1
            shift
            ;;
        -h | --host)
            WAITFORIT_HOST="$2"
            shift 2
            ;;
        -p | --port)
            WAITFORIT_PORT="$2"
            shift 2
            ;;
        -t | --timeout)
            WAITFORIT_TIMEOUT="$2"
            shift 2
            ;;
        --)
            shift
            WAITFORIT_CLI="$@"
            break
            ;;
        *)
            echoerr "Unknown argument: $1"
            usage
            ;;
    esac
done

if [ -z "$WAITFORIT_HOST" ] || [ -z "$WAITFORIT_PORT" ]; then
    echoerr "Error: you need to provide a host and port to test."
    usage
fi

wait_for
result=$?

if [ -n "$WAITFORIT_CLI" ]; then
    if [ $result -ne 0 ] && [ $WAITFORIT_STRICT -eq 1 ]; then
        echoerr "$0: strict mode, refusing to execute subprocess"
        exit $result
    fi
    exec $WAITFORIT_CLI
else
    exit $result
fi
