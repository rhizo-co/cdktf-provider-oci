# `containerengineNodePool` Submodule <a name="`containerengineNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineNodePool <a name="ContainerengineNodePool" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool oci_containerengine_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePool(scope: Construct, id: string, config: ContainerengineNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig">ContainerengineNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig">ContainerengineNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels">putInitialNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails">putNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings">putNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails">putNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig">putNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails">putNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels">resetInitialNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion">resetKubernetesVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails">resetNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings">resetNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId">resetNodeImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName">resetNodeImageName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata">resetNodeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails">resetNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig">resetNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails">resetNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet">resetQuantityPerSubnet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey">resetSshPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialNodeLabels` <a name="putInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels"></a>

```typescript
public putInitialNodeLabels(value: IResolvable | ContainerengineNodePoolInitialNodeLabels[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]

---

##### `putNodeConfigDetails` <a name="putNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails"></a>

```typescript
public putNodeConfigDetails(value: ContainerengineNodePoolNodeConfigDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---

##### `putNodeEvictionNodePoolSettings` <a name="putNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings"></a>

```typescript
public putNodeEvictionNodePoolSettings(value: ContainerengineNodePoolNodeEvictionNodePoolSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---

##### `putNodePoolCyclingDetails` <a name="putNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails"></a>

```typescript
public putNodePoolCyclingDetails(value: ContainerengineNodePoolNodePoolCyclingDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---

##### `putNodeShapeConfig` <a name="putNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig"></a>

```typescript
public putNodeShapeConfig(value: ContainerengineNodePoolNodeShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---

##### `putNodeSourceDetails` <a name="putNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails"></a>

```typescript
public putNodeSourceDetails(value: ContainerengineNodePoolNodeSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerengineNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialNodeLabels` <a name="resetInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels"></a>

```typescript
public resetInitialNodeLabels(): void
```

##### `resetKubernetesVersion` <a name="resetKubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion"></a>

```typescript
public resetKubernetesVersion(): void
```

##### `resetNodeConfigDetails` <a name="resetNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails"></a>

```typescript
public resetNodeConfigDetails(): void
```

##### `resetNodeEvictionNodePoolSettings` <a name="resetNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings"></a>

```typescript
public resetNodeEvictionNodePoolSettings(): void
```

##### `resetNodeImageId` <a name="resetNodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId"></a>

```typescript
public resetNodeImageId(): void
```

##### `resetNodeImageName` <a name="resetNodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName"></a>

```typescript
public resetNodeImageName(): void
```

##### `resetNodeMetadata` <a name="resetNodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata"></a>

```typescript
public resetNodeMetadata(): void
```

##### `resetNodePoolCyclingDetails` <a name="resetNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails"></a>

```typescript
public resetNodePoolCyclingDetails(): void
```

##### `resetNodeShapeConfig` <a name="resetNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig"></a>

```typescript
public resetNodeShapeConfig(): void
```

##### `resetNodeSourceDetails` <a name="resetNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails"></a>

```typescript
public resetNodeSourceDetails(): void
```

##### `resetQuantityPerSubnet` <a name="resetQuantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet"></a>

```typescript
public resetQuantityPerSubnet(): void
```

##### `resetSshPublicKey` <a name="resetSshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey"></a>

```typescript
public resetSshPublicKey(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineNodePool.ContainerengineNodePool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineNodePool.ContainerengineNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineNodePool.ContainerengineNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

containerengineNodePool.ContainerengineNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerengineNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerengineNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels">initialNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails">nodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings">nodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails">nodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig">nodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource">nodeSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails">nodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput">initialNodeLabelsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput">kubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput">nodeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput">nodeEvictionNodePoolSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput">nodeImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput">nodeImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput">nodeMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput">nodePoolCyclingDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput">nodeShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput">nodeShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput">nodeSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput">quantityPerSubnetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId">nodeImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName">nodeImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata">nodeMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape">nodeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet">quantityPerSubnet</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `initialNodeLabels`<sup>Required</sup> <a name="initialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels"></a>

```typescript
public readonly initialNodeLabels: ContainerengineNodePoolInitialNodeLabelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `nodeConfigDetails`<sup>Required</sup> <a name="nodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails"></a>

```typescript
public readonly nodeConfigDetails: ContainerengineNodePoolNodeConfigDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a>

---

##### `nodeEvictionNodePoolSettings`<sup>Required</sup> <a name="nodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings"></a>

```typescript
public readonly nodeEvictionNodePoolSettings: ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a>

---

##### `nodePoolCyclingDetails`<sup>Required</sup> <a name="nodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails"></a>

```typescript
public readonly nodePoolCyclingDetails: ContainerengineNodePoolNodePoolCyclingDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes"></a>

```typescript
public readonly nodes: ContainerengineNodePoolNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a>

---

##### `nodeShapeConfig`<sup>Required</sup> <a name="nodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig"></a>

```typescript
public readonly nodeShapeConfig: ContainerengineNodePoolNodeShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a>

---

##### `nodeSource`<sup>Required</sup> <a name="nodeSource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource"></a>

```typescript
public readonly nodeSource: ContainerengineNodePoolNodeSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a>

---

##### `nodeSourceDetails`<sup>Required</sup> <a name="nodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails"></a>

```typescript
public readonly nodeSourceDetails: ContainerengineNodePoolNodeSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialNodeLabelsInput`<sup>Optional</sup> <a name="initialNodeLabelsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput"></a>

```typescript
public readonly initialNodeLabelsInput: IResolvable | ContainerengineNodePoolInitialNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]

---

##### `kubernetesVersionInput`<sup>Optional</sup> <a name="kubernetesVersionInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput"></a>

```typescript
public readonly kubernetesVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeConfigDetailsInput`<sup>Optional</sup> <a name="nodeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput"></a>

```typescript
public readonly nodeConfigDetailsInput: ContainerengineNodePoolNodeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---

##### `nodeEvictionNodePoolSettingsInput`<sup>Optional</sup> <a name="nodeEvictionNodePoolSettingsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput"></a>

```typescript
public readonly nodeEvictionNodePoolSettingsInput: ContainerengineNodePoolNodeEvictionNodePoolSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---

##### `nodeImageIdInput`<sup>Optional</sup> <a name="nodeImageIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput"></a>

```typescript
public readonly nodeImageIdInput: string;
```

- *Type:* string

---

##### `nodeImageNameInput`<sup>Optional</sup> <a name="nodeImageNameInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput"></a>

```typescript
public readonly nodeImageNameInput: string;
```

- *Type:* string

---

##### `nodeMetadataInput`<sup>Optional</sup> <a name="nodeMetadataInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput"></a>

```typescript
public readonly nodeMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodePoolCyclingDetailsInput`<sup>Optional</sup> <a name="nodePoolCyclingDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput"></a>

```typescript
public readonly nodePoolCyclingDetailsInput: ContainerengineNodePoolNodePoolCyclingDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---

##### `nodeShapeConfigInput`<sup>Optional</sup> <a name="nodeShapeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput"></a>

```typescript
public readonly nodeShapeConfigInput: ContainerengineNodePoolNodeShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---

##### `nodeShapeInput`<sup>Optional</sup> <a name="nodeShapeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput"></a>

```typescript
public readonly nodeShapeInput: string;
```

- *Type:* string

---

##### `nodeSourceDetailsInput`<sup>Optional</sup> <a name="nodeSourceDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput"></a>

```typescript
public readonly nodeSourceDetailsInput: ContainerengineNodePoolNodeSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---

##### `quantityPerSubnetInput`<sup>Optional</sup> <a name="quantityPerSubnetInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput"></a>

```typescript
public readonly quantityPerSubnetInput: number;
```

- *Type:* number

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput"></a>

```typescript
public readonly sshPublicKeyInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerengineNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeImageId`<sup>Required</sup> <a name="nodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId"></a>

```typescript
public readonly nodeImageId: string;
```

- *Type:* string

---

##### `nodeImageName`<sup>Required</sup> <a name="nodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName"></a>

```typescript
public readonly nodeImageName: string;
```

- *Type:* string

---

##### `nodeMetadata`<sup>Required</sup> <a name="nodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata"></a>

```typescript
public readonly nodeMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeShape`<sup>Required</sup> <a name="nodeShape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape"></a>

```typescript
public readonly nodeShape: string;
```

- *Type:* string

---

##### `quantityPerSubnet`<sup>Required</sup> <a name="quantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet"></a>

```typescript
public readonly quantityPerSubnet: number;
```

- *Type:* number

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineNodePoolConfig <a name="ContainerengineNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolConfig: containerengineNodePool.ContainerengineNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape">nodeShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels">initialNodeLabels</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]</code> | initial_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails">nodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | node_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings">nodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | node_eviction_node_pool_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId">nodeImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName">nodeImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata">nodeMetadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails">nodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | node_pool_cycling_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig">nodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | node_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails">nodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | node_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet">quantityPerSubnet</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}.

---

##### `nodeShape`<sup>Required</sup> <a name="nodeShape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape"></a>

```typescript
public readonly nodeShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialNodeLabels`<sup>Optional</sup> <a name="initialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels"></a>

```typescript
public readonly initialNodeLabels: IResolvable | ContainerengineNodePoolInitialNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]

initial_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#initial_node_labels ContainerengineNodePool#initial_node_labels}

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}.

---

##### `nodeConfigDetails`<sup>Optional</sup> <a name="nodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails"></a>

```typescript
public readonly nodeConfigDetails: ContainerengineNodePoolNodeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

node_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_config_details ContainerengineNodePool#node_config_details}

---

##### `nodeEvictionNodePoolSettings`<sup>Optional</sup> <a name="nodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings"></a>

```typescript
public readonly nodeEvictionNodePoolSettings: ContainerengineNodePoolNodeEvictionNodePoolSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

node_eviction_node_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_eviction_node_pool_settings ContainerengineNodePool#node_eviction_node_pool_settings}

---

##### `nodeImageId`<sup>Optional</sup> <a name="nodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId"></a>

```typescript
public readonly nodeImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}.

---

##### `nodeImageName`<sup>Optional</sup> <a name="nodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName"></a>

```typescript
public readonly nodeImageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}.

---

##### `nodeMetadata`<sup>Optional</sup> <a name="nodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata"></a>

```typescript
public readonly nodeMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}.

---

##### `nodePoolCyclingDetails`<sup>Optional</sup> <a name="nodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails"></a>

```typescript
public readonly nodePoolCyclingDetails: ContainerengineNodePoolNodePoolCyclingDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

node_pool_cycling_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_cycling_details ContainerengineNodePool#node_pool_cycling_details}

---

##### `nodeShapeConfig`<sup>Optional</sup> <a name="nodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig"></a>

```typescript
public readonly nodeShapeConfig: ContainerengineNodePoolNodeShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

node_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape_config ContainerengineNodePool#node_shape_config}

---

##### `nodeSourceDetails`<sup>Optional</sup> <a name="nodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails"></a>

```typescript
public readonly nodeSourceDetails: ContainerengineNodePoolNodeSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

node_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_source_details ContainerengineNodePool#node_source_details}

---

##### `quantityPerSubnet`<sup>Optional</sup> <a name="quantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet"></a>

```typescript
public readonly quantityPerSubnet: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}.

---

##### `sshPublicKey`<sup>Optional</sup> <a name="sshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey"></a>

```typescript
public readonly sshPublicKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineNodePoolTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#timeouts ContainerengineNodePool#timeouts}

---

### ContainerengineNodePoolInitialNodeLabels <a name="ContainerengineNodePoolInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolInitialNodeLabels: containerengineNodePool.ContainerengineNodePoolInitialNodeLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}.

---

### ContainerengineNodePoolNodeConfigDetails <a name="ContainerengineNodePoolNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeConfigDetails: containerengineNodePool.ContainerengineNodePoolNodeConfigDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs">placementConfigs</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]</code> | placement_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails">nodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | node_pool_pod_network_option_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}. |

---

##### `placementConfigs`<sup>Required</sup> <a name="placementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs"></a>

```typescript
public readonly placementConfigs: IResolvable | ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]

placement_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#placement_configs ContainerengineNodePool#placement_configs}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `isPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}.

---

##### `nodePoolPodNetworkOptionDetails`<sup>Optional</sup> <a name="nodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails"></a>

```typescript
public readonly nodePoolPodNetworkOptionDetails: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

node_pool_pod_network_option_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_pod_network_option_details ContainerengineNodePool#node_pool_pod_network_option_details}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails: containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType">cniType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds">podNsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds">podSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}. |

---

##### `cniType`<sup>Required</sup> <a name="cniType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType"></a>

```typescript
public readonly cniType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}.

---

##### `maxPodsPerNode`<sup>Optional</sup> <a name="maxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}.

---

##### `podNsgIds`<sup>Optional</sup> <a name="podNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds"></a>

```typescript
public readonly podNsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}.

---

##### `podSubnetIds`<sup>Optional</sup> <a name="podSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds"></a>

```typescript
public readonly podSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigs <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeConfigDetailsPlacementConfigs: containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig">preemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | preemptible_node_config block. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}.

---

##### `faultDomains`<sup>Optional</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}.

---

##### `preemptibleNodeConfig`<sup>Optional</sup> <a name="preemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig"></a>

```typescript
public readonly preemptibleNodeConfig: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

preemptible_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemptible_node_config ContainerengineNodePool#preemptible_node_config}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig: containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction"></a>

```typescript
public readonly preemptionAction: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemption_action ContainerengineNodePool#preemption_action}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction: containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume">isPreserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}.

---

##### `isPreserveBootVolume`<sup>Optional</sup> <a name="isPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume"></a>

```typescript
public readonly isPreserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}.

---

### ContainerengineNodePoolNodeEvictionNodePoolSettings <a name="ContainerengineNodePoolNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeEvictionNodePoolSettings: containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration">evictionGraceDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration">isForceDeleteAfterGraceDuration</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}. |

---

##### `evictionGraceDuration`<sup>Optional</sup> <a name="evictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration"></a>

```typescript
public readonly evictionGraceDuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}.

---

##### `isForceDeleteAfterGraceDuration`<sup>Optional</sup> <a name="isForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration"></a>

```typescript
public readonly isForceDeleteAfterGraceDuration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}.

---

### ContainerengineNodePoolNodePoolCyclingDetails <a name="ContainerengineNodePoolNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodePoolCyclingDetails: containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled">isNodeCyclingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge">maximumSurge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable">maximumUnavailable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}. |

---

##### `isNodeCyclingEnabled`<sup>Optional</sup> <a name="isNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled"></a>

```typescript
public readonly isNodeCyclingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}.

---

##### `maximumSurge`<sup>Optional</sup> <a name="maximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge"></a>

```typescript
public readonly maximumSurge: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}.

---

##### `maximumUnavailable`<sup>Optional</sup> <a name="maximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable"></a>

```typescript
public readonly maximumUnavailable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}.

---

### ContainerengineNodePoolNodes <a name="ContainerengineNodePoolNodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodes: containerengineNodePool.ContainerengineNodePoolNodes = { ... }
```


### ContainerengineNodePoolNodesError <a name="ContainerengineNodePoolNodesError" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodesError: containerengineNodePool.ContainerengineNodePoolNodesError = { ... }
```


### ContainerengineNodePoolNodeShapeConfig <a name="ContainerengineNodePoolNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeShapeConfig: containerengineNodePool.ContainerengineNodePoolNodeShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}.

---

### ContainerengineNodePoolNodeSource <a name="ContainerengineNodePoolNodeSource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeSource: containerengineNodePool.ContainerengineNodePoolNodeSource = { ... }
```


### ContainerengineNodePoolNodeSourceDetails <a name="ContainerengineNodePoolNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolNodeSourceDetails: containerengineNodePool.ContainerengineNodePoolNodeSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}. |

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}.

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}.

---

##### `bootVolumeSizeInGbs`<sup>Optional</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs"></a>

```typescript
public readonly bootVolumeSizeInGbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}.

---

### ContainerengineNodePoolTimeouts <a name="ContainerengineNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

const containerengineNodePoolTimeouts: containerengineNodePool.ContainerengineNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineNodePoolInitialNodeLabelsList <a name="ContainerengineNodePoolInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get"></a>

```typescript
public get(index: number): ContainerengineNodePoolInitialNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineNodePoolInitialNodeLabels[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>[]

---


### ContainerengineNodePoolInitialNodeLabelsOutputReference <a name="ContainerengineNodePoolInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineNodePoolInitialNodeLabels;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels">ContainerengineNodePoolInitialNodeLabels</a>

---


### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode">resetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds">resetPodNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds">resetPodSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxPodsPerNode` <a name="resetMaxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode"></a>

```typescript
public resetMaxPodsPerNode(): void
```

##### `resetPodNsgIds` <a name="resetPodNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds"></a>

```typescript
public resetPodNsgIds(): void
```

##### `resetPodSubnetIds` <a name="resetPodSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds"></a>

```typescript
public resetPodSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput">cniTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput">maxPodsPerNodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput">podNsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput">podSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">cniType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">podNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">podSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cniTypeInput`<sup>Optional</sup> <a name="cniTypeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput"></a>

```typescript
public readonly cniTypeInput: string;
```

- *Type:* string

---

##### `maxPodsPerNodeInput`<sup>Optional</sup> <a name="maxPodsPerNodeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput"></a>

```typescript
public readonly maxPodsPerNodeInput: number;
```

- *Type:* number

---

##### `podNsgIdsInput`<sup>Optional</sup> <a name="podNsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput"></a>

```typescript
public readonly podNsgIdsInput: string[];
```

- *Type:* string[]

---

##### `podSubnetIdsInput`<sup>Optional</sup> <a name="podSubnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput"></a>

```typescript
public readonly podSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `cniType`<sup>Required</sup> <a name="cniType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```typescript
public readonly cniType: string;
```

- *Type:* string

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```typescript
public readonly maxPodsPerNode: number;
```

- *Type:* number

---

##### `podNsgIds`<sup>Required</sup> <a name="podNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```typescript
public readonly podNsgIds: string[];
```

- *Type:* string[]

---

##### `podSubnetIds`<sup>Required</sup> <a name="podSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```typescript
public readonly podSubnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails">putNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs">putPlacementConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled">resetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails">resetNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodePoolPodNetworkOptionDetails` <a name="putNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails"></a>

```typescript
public putNodePoolPodNetworkOptionDetails(value: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---

##### `putPlacementConfigs` <a name="putPlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs"></a>

```typescript
public putPlacementConfigs(value: IResolvable | ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetIsPvEncryptionInTransitEnabled` <a name="resetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```typescript
public resetIsPvEncryptionInTransitEnabled(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetNodePoolPodNetworkOptionDetails` <a name="resetNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails"></a>

```typescript
public resetNodePoolPodNetworkOptionDetails(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">nodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs">placementConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput">isPvEncryptionInTransitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput">nodePoolPodNetworkOptionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput">placementConfigsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodePoolPodNetworkOptionDetails`<sup>Required</sup> <a name="nodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```typescript
public readonly nodePoolPodNetworkOptionDetails: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a>

---

##### `placementConfigs`<sup>Required</sup> <a name="placementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```typescript
public readonly placementConfigs: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="isPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```typescript
public readonly isPvEncryptionInTransitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nodePoolPodNetworkOptionDetailsInput`<sup>Optional</sup> <a name="nodePoolPodNetworkOptionDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput"></a>

```typescript
public readonly nodePoolPodNetworkOptionDetailsInput: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `placementConfigsInput`<sup>Optional</sup> <a name="placementConfigsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput"></a>

```typescript
public readonly placementConfigsInput: IResolvable | ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```typescript
public readonly isPvEncryptionInTransitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeConfigDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get"></a>

```typescript
public get(index: number): ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>[]

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig">putPreemptibleNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains">resetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig">resetPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreemptibleNodeConfig` <a name="putPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig"></a>

```typescript
public putPreemptibleNodeConfig(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId"></a>

```typescript
public resetCapacityReservationId(): void
```

##### `resetFaultDomains` <a name="resetFaultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains"></a>

```typescript
public resetFaultDomains(): void
```

##### `resetPreemptibleNodeConfig` <a name="resetPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig"></a>

```typescript
public resetPreemptibleNodeConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">preemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput">faultDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput">preemptibleNodeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preemptibleNodeConfig`<sup>Required</sup> <a name="preemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```typescript
public readonly preemptibleNodeConfig: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput"></a>

```typescript
public readonly capacityReservationIdInput: string;
```

- *Type:* string

---

##### `faultDomainsInput`<sup>Optional</sup> <a name="faultDomainsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput"></a>

```typescript
public readonly faultDomainsInput: string[];
```

- *Type:* string[]

---

##### `preemptibleNodeConfigInput`<sup>Optional</sup> <a name="preemptibleNodeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput"></a>

```typescript
public readonly preemptibleNodeConfigInput: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineNodePoolNodeConfigDetailsPlacementConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs">ContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction">putPreemptionAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPreemptionAction` <a name="putPreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction"></a>

```typescript
public putPreemptionAction(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput">preemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```typescript
public readonly preemptionAction: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a>

---

##### `preemptionActionInput`<sup>Optional</sup> <a name="preemptionActionInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput"></a>

```typescript
public readonly preemptionActionInput: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume">resetIsPreserveBootVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsPreserveBootVolume` <a name="resetIsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume"></a>

```typescript
public resetIsPreserveBootVolume(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput">isPreserveBootVolumeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">isPreserveBootVolume</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPreserveBootVolumeInput`<sup>Optional</sup> <a name="isPreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput"></a>

```typescript
public readonly isPreserveBootVolumeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `isPreserveBootVolume`<sup>Required</sup> <a name="isPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```typescript
public readonly isPreserveBootVolume: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference <a name="ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration">resetEvictionGraceDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration">resetIsForceDeleteAfterGraceDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvictionGraceDuration` <a name="resetEvictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration"></a>

```typescript
public resetEvictionGraceDuration(): void
```

##### `resetIsForceDeleteAfterGraceDuration` <a name="resetIsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration"></a>

```typescript
public resetIsForceDeleteAfterGraceDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput">evictionGraceDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput">isForceDeleteAfterGraceDurationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">evictionGraceDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">isForceDeleteAfterGraceDuration</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evictionGraceDurationInput`<sup>Optional</sup> <a name="evictionGraceDurationInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput"></a>

```typescript
public readonly evictionGraceDurationInput: string;
```

- *Type:* string

---

##### `isForceDeleteAfterGraceDurationInput`<sup>Optional</sup> <a name="isForceDeleteAfterGraceDurationInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput"></a>

```typescript
public readonly isForceDeleteAfterGraceDurationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `evictionGraceDuration`<sup>Required</sup> <a name="evictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```typescript
public readonly evictionGraceDuration: string;
```

- *Type:* string

---

##### `isForceDeleteAfterGraceDuration`<sup>Required</sup> <a name="isForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```typescript
public readonly isForceDeleteAfterGraceDuration: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeEvictionNodePoolSettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---


### ContainerengineNodePoolNodePoolCyclingDetailsOutputReference <a name="ContainerengineNodePoolNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled">resetIsNodeCyclingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge">resetMaximumSurge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable">resetMaximumUnavailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsNodeCyclingEnabled` <a name="resetIsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled"></a>

```typescript
public resetIsNodeCyclingEnabled(): void
```

##### `resetMaximumSurge` <a name="resetMaximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge"></a>

```typescript
public resetMaximumSurge(): void
```

##### `resetMaximumUnavailable` <a name="resetMaximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable"></a>

```typescript
public resetMaximumUnavailable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput">isNodeCyclingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput">maximumSurgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput">maximumUnavailableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">isNodeCyclingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge">maximumSurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">maximumUnavailable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isNodeCyclingEnabledInput`<sup>Optional</sup> <a name="isNodeCyclingEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput"></a>

```typescript
public readonly isNodeCyclingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumSurgeInput`<sup>Optional</sup> <a name="maximumSurgeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput"></a>

```typescript
public readonly maximumSurgeInput: string;
```

- *Type:* string

---

##### `maximumUnavailableInput`<sup>Optional</sup> <a name="maximumUnavailableInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput"></a>

```typescript
public readonly maximumUnavailableInput: string;
```

- *Type:* string

---

##### `isNodeCyclingEnabled`<sup>Required</sup> <a name="isNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```typescript
public readonly isNodeCyclingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumSurge`<sup>Required</sup> <a name="maximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```typescript
public readonly maximumSurge: string;
```

- *Type:* string

---

##### `maximumUnavailable`<sup>Required</sup> <a name="maximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```typescript
public readonly maximumUnavailable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodePoolCyclingDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---


### ContainerengineNodePoolNodesErrorList <a name="ContainerengineNodePoolNodesErrorList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodesErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get"></a>

```typescript
public get(index: number): ContainerengineNodePoolNodesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerengineNodePoolNodesErrorOutputReference <a name="ContainerengineNodePoolNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodesError;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a>

---


### ContainerengineNodePoolNodeShapeConfigOutputReference <a name="ContainerengineNodePoolNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus"></a>

```typescript
public resetOcpus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---


### ContainerengineNodePoolNodesList <a name="ContainerengineNodePoolNodesList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get"></a>

```typescript
public get(index: number): ContainerengineNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerengineNodePoolNodeSourceDetailsOutputReference <a name="ContainerengineNodePoolNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs">resetBootVolumeSizeInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootVolumeSizeInGbs` <a name="resetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```typescript
public resetBootVolumeSizeInGbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">bootVolumeSizeInGbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="bootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```typescript
public readonly bootVolumeSizeInGbsInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `bootVolumeSizeInGbs`<sup>Required</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```typescript
public readonly bootVolumeSizeInGbs: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---


### ContainerengineNodePoolNodeSourceList <a name="ContainerengineNodePoolNodeSourceList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get"></a>

```typescript
public get(index: number): ContainerengineNodePoolNodeSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerengineNodePoolNodeSourceOutputReference <a name="ContainerengineNodePoolNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodeSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a>

---


### ContainerengineNodePoolNodesOutputReference <a name="ContainerengineNodePoolNodesOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error">error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId">nodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error"></a>

```typescript
public readonly error: ContainerengineNodePoolNodesErrorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId"></a>

```typescript
public readonly nodePoolId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineNodePoolNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a>

---


### ContainerengineNodePoolTimeoutsOutputReference <a name="ContainerengineNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerengineNodePool } from 'rhizo-co-terraform-provider-oci'

new containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

---



