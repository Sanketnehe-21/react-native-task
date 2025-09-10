import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter App</Text>

            <Text style={styles.count}>{count}</Text>

            <View style={styles.buttons}>
                <TouchableOpacity style={[styles.button, { backgroundColor: "#ef4444" }]} onPress={() => setCount(count - 1)}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, { backgroundColor: "#10b981" }]} onPress={() => setCount(count + 1)}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.stats}>
                <Text>Positive: {count > 0 ? count : 0}</Text>
                <Text>Negative: {count < 0 ? Math.abs(count) : 0}</Text>
            </View>

            <TouchableOpacity style={[styles.resetButton]} onPress={() => setCount(0)}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    count: {
        fontSize: 50,
        fontWeight: "bold",
        marginVertical: 20,
    },
    buttons: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 20,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 28,
        color: "white",
        fontWeight: "700",
    },
    stats: {
        marginVertical: 20,
        alignItems: "center",
    },
    resetButton: {
        backgroundColor: "#6b7280",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    resetText: {
        color: "white",
        fontWeight: "600",
    },
});
