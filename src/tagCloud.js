/**
 * Lightweight 3D Tag Cloud
 * Renders a sphere of tags that rotates based on mouse position.
 */
export class TagCloud {
    constructor(container, texts, options = {}) {
        this.container = container;
        this.texts = texts;
        this.config = {
            radius: options.radius || 150,
            maxSpeed: options.maxSpeed || 0.5,
            initSpeed: options.initSpeed || 0.2,
            ...options
        };

        this.items = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.active = false;

        this.init();
    }

    init() {
        this.container.style.position = 'relative';
        this.container.style.width = `${this.config.radius * 2}px`;
        this.container.style.height = `${this.config.radius * 2}px`;
        this.container.style.margin = '0 auto';
        // Clear static content
        this.container.innerHTML = '';

        // Create tags
        this.texts.forEach((text, index) => {
            const el = document.createElement('span');
            el.textContent = text;
            el.className = 'tag-cloud-item';
            this.container.appendChild(el);

            // Distribute points on a sphere (Fibonacci Sphere)
            const phi = Math.acos(-1 + (2 * index) / this.texts.length);
            const theta = Math.sqrt(this.texts.length * Math.PI) * phi;

            this.items.push({
                el,
                x: this.config.radius * Math.cos(theta) * Math.sin(phi),
                y: this.config.radius * Math.sin(theta) * Math.sin(phi),
                z: this.config.radius * Math.cos(phi)
            });
        });

        // Event listeners for mouse interaction
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));

        // Start animation loop
        this.animate();
    }

    handleMouseMove(e) {
        const rect = this.container.getBoundingClientRect();
        // Calculate mouse position relative to center of container
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Normalize speed based on distance from center
        this.mouseX = (x / rect.width) * 2;
        this.mouseY = (y / rect.height) * 2;
    }

    rotate(item, xRot, yRot) {
        // Rotation Matrix logic
        const sinX = Math.sin(xRot);
        const cosX = Math.cos(xRot);
        const sinY = Math.sin(yRot);
        const cosY = Math.cos(yRot);

        let y = item.y * cosX - item.z * sinX;
        let z = item.z * cosX + item.y * sinX;
        item.y = y;
        item.z = z;

        let x = item.x * cosY - item.z * sinY;
        z = item.z * cosY + item.x * sinY;
        item.x = x;
        item.z = z;
    }

    animate() {
        // Calculate rotation speed based on mouse
        const xRot = this.mouseY * this.config.maxSpeed * 0.05;
        const yRot = -this.mouseX * this.config.maxSpeed * 0.05; // Invert X for natural feel

        this.items.forEach(item => {
            this.rotate(item, xRot || 0.005, yRot || 0.005); // Default slow rotation

            // Perspective projection
            const perspective = this.config.radius * 2; // Distance of camera
            const scale = perspective / (perspective - item.z);
            const alpha = (item.z + this.config.radius) / (2 * this.config.radius);

            item.el.style.transform = `translate3d(${item.x}px, ${item.y}px, 0) scale(${scale})`;
            item.el.style.opacity = Math.max(0.1, alpha + 0.2); // Fade items at back
            item.el.style.zIndex = Math.floor(scale * 100);
            item.el.style.filter = `blur(${(1 - alpha) * 2}px)`; // Blur items at back
        });

        requestAnimationFrame(() => this.animate());
    }
}
