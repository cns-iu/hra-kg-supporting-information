#!/bin/bash

wc -c | awk '{print sprintf("%.0f MB", $1 / (1024 * 1024))}'
