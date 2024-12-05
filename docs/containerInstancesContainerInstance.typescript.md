# `containerInstancesContainerInstance` Submodule <a name="`containerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerInstancesContainerInstance <a name="ContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstance(scope: Construct, id: string, config: ContainerInstancesContainerInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig">ContainerInstancesContainerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers">putContainers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets">putImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig">putShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics">putVnics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy">resetContainerRestartPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain">resetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds">resetGracefulShutdownTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets">resetImagePullSecrets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainers` <a name="putContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers"></a>

```typescript
public putContainers(value: IResolvable | ContainerInstancesContainerInstanceContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]

---

##### `putDnsConfig` <a name="putDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig"></a>

```typescript
public putDnsConfig(value: ContainerInstancesContainerInstanceDnsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `putImagePullSecrets` <a name="putImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets"></a>

```typescript
public putImagePullSecrets(value: IResolvable | ContainerInstancesContainerInstanceImagePullSecrets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putImagePullSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]

---

##### `putShapeConfig` <a name="putShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig"></a>

```typescript
public putShapeConfig(value: ContainerInstancesContainerInstanceShapeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerInstancesContainerInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `putVnics` <a name="putVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics"></a>

```typescript
public putVnics(value: IResolvable | ContainerInstancesContainerInstanceVnics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVnics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]

---

##### `putVolumes` <a name="putVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | ContainerInstancesContainerInstanceVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]

---

##### `resetContainerRestartPolicy` <a name="resetContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetContainerRestartPolicy"></a>

```typescript
public resetContainerRestartPolicy(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetDnsConfig"></a>

```typescript
public resetDnsConfig(): void
```

##### `resetFaultDomain` <a name="resetFaultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFaultDomain"></a>

```typescript
public resetFaultDomain(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetGracefulShutdownTimeoutInSeconds` <a name="resetGracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetGracefulShutdownTimeoutInSeconds"></a>

```typescript
public resetGracefulShutdownTimeoutInSeconds(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImagePullSecrets` <a name="resetImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetImagePullSecrets"></a>

```typescript
public resetImagePullSecrets(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumes` <a name="resetVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerInstancesContainerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount">containerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers">containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets">imagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics">vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount">volumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes">volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput">containerRestartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput">faultDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput">gracefulShutdownTimeoutInSecondsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput">imagePullSecretsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput">shapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput">vnicsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy">containerRestartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerCount`<sup>Required</sup> <a name="containerCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerCount"></a>

```typescript
public readonly containerCount: number;
```

- *Type:* number

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containers"></a>

```typescript
public readonly containers: ContainerInstancesContainerInstanceContainersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList">ContainerInstancesContainerInstanceContainersList</a>

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ContainerInstancesContainerInstanceDnsConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference">ContainerInstancesContainerInstanceDnsConfigOutputReference</a>

---

##### `imagePullSecrets`<sup>Required</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```typescript
public readonly imagePullSecrets: ContainerInstancesContainerInstanceImagePullSecretsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList">ContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: ContainerInstancesContainerInstanceShapeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference">ContainerInstancesContainerInstanceShapeConfigOutputReference</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerInstancesContainerInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference">ContainerInstancesContainerInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnics"></a>

```typescript
public readonly vnics: ContainerInstancesContainerInstanceVnicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList">ContainerInstancesContainerInstanceVnicsList</a>

---

##### `volumeCount`<sup>Required</sup> <a name="volumeCount" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumeCount"></a>

```typescript
public readonly volumeCount: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumes"></a>

```typescript
public readonly volumes: ContainerInstancesContainerInstanceVolumesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList">ContainerInstancesContainerInstanceVolumesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `containerRestartPolicyInput`<sup>Optional</sup> <a name="containerRestartPolicyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicyInput"></a>

```typescript
public readonly containerRestartPolicyInput: string;
```

- *Type:* string

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | ContainerInstancesContainerInstanceContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.dnsConfigInput"></a>

```typescript
public readonly dnsConfigInput: ContainerInstancesContainerInstanceDnsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomainInput"></a>

```typescript
public readonly faultDomainInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gracefulShutdownTimeoutInSecondsInput`<sup>Optional</sup> <a name="gracefulShutdownTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSecondsInput"></a>

```typescript
public readonly gracefulShutdownTimeoutInSecondsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imagePullSecretsInput`<sup>Optional</sup> <a name="imagePullSecretsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.imagePullSecretsInput"></a>

```typescript
public readonly imagePullSecretsInput: IResolvable | ContainerInstancesContainerInstanceImagePullSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]

---

##### `shapeConfigInput`<sup>Optional</sup> <a name="shapeConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeConfigInput"></a>

```typescript
public readonly shapeConfigInput: ContainerInstancesContainerInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerInstancesContainerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---

##### `vnicsInput`<sup>Optional</sup> <a name="vnicsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.vnicsInput"></a>

```typescript
public readonly vnicsInput: IResolvable | ContainerInstancesContainerInstanceVnics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | ContainerInstancesContainerInstanceVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerRestartPolicy`<sup>Required</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```typescript
public readonly containerRestartPolicy: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```typescript
public readonly gracefulShutdownTimeoutInSeconds: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerInstancesContainerInstanceConfig <a name="ContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceConfig: containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]</code> | containers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig">shapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics">vnics</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]</code> | vnics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy">containerRestartPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | dns_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain">faultDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds">gracefulShutdownTimeoutInSeconds</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets">imagePullSecrets</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]</code> | image_pull_secrets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]</code> | volumes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#availability_domain ContainerInstancesContainerInstance#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#compartment_id ContainerInstancesContainerInstance#compartment_id}.

---

##### `containers`<sup>Required</sup> <a name="containers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containers"></a>

```typescript
public readonly containers: IResolvable | ContainerInstancesContainerInstanceContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#containers ContainerInstancesContainerInstance#containers}

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape ContainerInstancesContainerInstance#shape}.

---

##### `shapeConfig`<sup>Required</sup> <a name="shapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.shapeConfig"></a>

```typescript
public readonly shapeConfig: ContainerInstancesContainerInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#shape_config ContainerInstancesContainerInstance#shape_config}

---

##### `vnics`<sup>Required</sup> <a name="vnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.vnics"></a>

```typescript
public readonly vnics: IResolvable | ContainerInstancesContainerInstanceVnics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]

vnics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vnics ContainerInstancesContainerInstance#vnics}

---

##### `containerRestartPolicy`<sup>Optional</sup> <a name="containerRestartPolicy" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.containerRestartPolicy"></a>

```typescript
public readonly containerRestartPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#container_restart_policy ContainerInstancesContainerInstance#container_restart_policy}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ContainerInstancesContainerInstanceDnsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#dns_config ContainerInstancesContainerInstance#dns_config}

---

##### `faultDomain`<sup>Optional</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#fault_domain ContainerInstancesContainerInstance#fault_domain}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `gracefulShutdownTimeoutInSeconds`<sup>Optional</sup> <a name="gracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.gracefulShutdownTimeoutInSeconds"></a>

```typescript
public readonly gracefulShutdownTimeoutInSeconds: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#graceful_shutdown_timeout_in_seconds ContainerInstancesContainerInstance#graceful_shutdown_timeout_in_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#id ContainerInstancesContainerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imagePullSecrets`<sup>Optional</sup> <a name="imagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.imagePullSecrets"></a>

```typescript
public readonly imagePullSecrets: IResolvable | ContainerInstancesContainerInstanceImagePullSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]

image_pull_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_pull_secrets ContainerInstancesContainerInstance#image_pull_secrets}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#state ContainerInstancesContainerInstance#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerInstancesContainerInstanceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeouts ContainerInstancesContainerInstance#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceConfig.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | ContainerInstancesContainerInstanceVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volumes ContainerInstancesContainerInstance#volumes}

---

### ContainerInstancesContainerInstanceContainers <a name="ContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainers: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl">imageUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments">arguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks">healthChecks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]</code> | health_checks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled">isResourcePrincipalDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig">resourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | resource_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext">securityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | security_context block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts">volumeMounts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]</code> | volume_mounts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}. |

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#image_url ContainerInstancesContainerInstance#image_url}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#arguments ContainerInstancesContainerInstance#arguments}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#environment_variables ContainerInstancesContainerInstance#environment_variables}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `healthChecks`<sup>Optional</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.healthChecks"></a>

```typescript
public readonly healthChecks: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]

health_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_checks ContainerInstancesContainerInstance#health_checks}

---

##### `isResourcePrincipalDisabled`<sup>Optional</sup> <a name="isResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.isResourcePrincipalDisabled"></a>

```typescript
public readonly isResourcePrincipalDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_resource_principal_disabled ContainerInstancesContainerInstance#is_resource_principal_disabled}.

---

##### `resourceConfig`<sup>Optional</sup> <a name="resourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.resourceConfig"></a>

```typescript
public readonly resourceConfig: ContainerInstancesContainerInstanceContainersResourceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

resource_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#resource_config ContainerInstancesContainerInstance#resource_config}

---

##### `securityContext`<sup>Optional</sup> <a name="securityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.securityContext"></a>

```typescript
public readonly securityContext: ContainerInstancesContainerInstanceContainersSecurityContext;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

security_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context ContainerInstancesContainerInstance#security_context}

---

##### `volumeMounts`<sup>Optional</sup> <a name="volumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: IResolvable | ContainerInstancesContainerInstanceContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_mounts ContainerInstancesContainerInstance#volume_mounts}

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#working_directory ContainerInstancesContainerInstance#working_directory}.

---

### ContainerInstancesContainerInstanceContainersHealthChecks <a name="ContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersHealthChecks: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction">failureAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]</code> | headers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds">initialDelayInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails">statusDetails</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold">successThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}. |

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#health_check_type ContainerInstancesContainerInstance#health_check_type}.

---

##### `command`<sup>Optional</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#command ContainerInstancesContainerInstance#command}.

---

##### `failureAction`<sup>Optional</sup> <a name="failureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_action ContainerInstancesContainerInstance#failure_action}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#failure_threshold ContainerInstancesContainerInstance#failure_threshold}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.headers"></a>

```typescript
public readonly headers: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecksHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#headers ContainerInstancesContainerInstance#headers}

---

##### `initialDelayInSeconds`<sup>Optional</sup> <a name="initialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.initialDelayInSeconds"></a>

```typescript
public readonly initialDelayInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#initial_delay_in_seconds ContainerInstancesContainerInstance#initial_delay_in_seconds}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#interval_in_seconds ContainerInstancesContainerInstance#interval_in_seconds}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#port ContainerInstancesContainerInstance#port}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status ContainerInstancesContainerInstance#status}.

---

##### `statusDetails`<sup>Optional</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#status_details ContainerInstancesContainerInstance#status_details}.

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#success_threshold ContainerInstancesContainerInstance#success_threshold}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#timeout_in_seconds ContainerInstancesContainerInstance#timeout_in_seconds}.

---

### ContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersHealthChecksHeaders: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#value ContainerInstancesContainerInstance#value}.

---

### ContainerInstancesContainerInstanceContainersResourceConfig <a name="ContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersResourceConfig: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs">memoryLimitInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit">vcpusLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}. |

---

##### `memoryLimitInGbs`<sup>Optional</sup> <a name="memoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.memoryLimitInGbs"></a>

```typescript
public readonly memoryLimitInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_limit_in_gbs ContainerInstancesContainerInstance#memory_limit_in_gbs}.

---

##### `vcpusLimit`<sup>Optional</sup> <a name="vcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig.property.vcpusLimit"></a>

```typescript
public readonly vcpusLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#vcpus_limit ContainerInstancesContainerInstance#vcpus_limit}.

---

### ContainerInstancesContainerInstanceContainersSecurityContext <a name="ContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersSecurityContext: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled">isNonRootUserCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly">isRootFileSystemReadonly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser">runAsUser</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType">securityContextType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}. |

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.capabilities"></a>

```typescript
public readonly capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#capabilities ContainerInstancesContainerInstance#capabilities}

---

##### `isNonRootUserCheckEnabled`<sup>Optional</sup> <a name="isNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isNonRootUserCheckEnabled"></a>

```typescript
public readonly isNonRootUserCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_non_root_user_check_enabled ContainerInstancesContainerInstance#is_non_root_user_check_enabled}.

---

##### `isRootFileSystemReadonly`<sup>Optional</sup> <a name="isRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.isRootFileSystemReadonly"></a>

```typescript
public readonly isRootFileSystemReadonly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_root_file_system_readonly ContainerInstancesContainerInstance#is_root_file_system_readonly}.

---

##### `runAsGroup`<sup>Optional</sup> <a name="runAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_group ContainerInstancesContainerInstance#run_as_group}.

---

##### `runAsUser`<sup>Optional</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#run_as_user ContainerInstancesContainerInstance#run_as_user}.

---

##### `securityContextType`<sup>Optional</sup> <a name="securityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext.property.securityContextType"></a>

```typescript
public readonly securityContextType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#security_context_type ContainerInstancesContainerInstance#security_context_type}.

---

### ContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersSecurityContextCapabilities: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities">addCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities">dropCapabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}. |

---

##### `addCapabilities`<sup>Optional</sup> <a name="addCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.addCapabilities"></a>

```typescript
public readonly addCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#add_capabilities ContainerInstancesContainerInstance#add_capabilities}.

---

##### `dropCapabilities`<sup>Optional</sup> <a name="dropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities.property.dropCapabilities"></a>

```typescript
public readonly dropCapabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#drop_capabilities ContainerInstancesContainerInstance#drop_capabilities}.

---

### ContainerInstancesContainerInstanceContainersVolumeMounts <a name="ContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceContainersVolumeMounts: containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition">partition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath">subPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#mount_path ContainerInstancesContainerInstance#mount_path}.

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_name ContainerInstancesContainerInstance#volume_name}.

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_read_only ContainerInstancesContainerInstance#is_read_only}.

---

##### `partition`<sup>Optional</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#partition ContainerInstancesContainerInstance#partition}.

---

##### `subPath`<sup>Optional</sup> <a name="subPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#sub_path ContainerInstancesContainerInstance#sub_path}.

---

### ContainerInstancesContainerInstanceDnsConfig <a name="ContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceDnsConfig: containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers">nameservers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options">options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches">searches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}. |

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nameservers ContainerInstancesContainerInstance#nameservers}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#options ContainerInstancesContainerInstance#options}.

---

##### `searches`<sup>Optional</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig.property.searches"></a>

```typescript
public readonly searches: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#searches ContainerInstancesContainerInstance#searches}.

---

### ContainerInstancesContainerInstanceImagePullSecrets <a name="ContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceImagePullSecrets: containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint">registryEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType">secretType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}. |

---

##### `registryEndpoint`<sup>Required</sup> <a name="registryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.registryEndpoint"></a>

```typescript
public readonly registryEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#registry_endpoint ContainerInstancesContainerInstance#registry_endpoint}.

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_type ContainerInstancesContainerInstance#secret_type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#password ContainerInstancesContainerInstance#password}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#secret_id ContainerInstancesContainerInstance#secret_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#username ContainerInstancesContainerInstance#username}.

---

### ContainerInstancesContainerInstanceShapeConfig <a name="ContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceShapeConfig: containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus">ocpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}. |

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#ocpus ContainerInstancesContainerInstance#ocpus}.

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#memory_in_gbs ContainerInstancesContainerInstance#memory_in_gbs}.

---

### ContainerInstancesContainerInstanceTimeouts <a name="ContainerInstancesContainerInstanceTimeouts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceTimeouts: containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#create ContainerInstancesContainerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#delete ContainerInstancesContainerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#update ContainerInstancesContainerInstance#update}.

---

### ContainerInstancesContainerInstanceVnics <a name="ContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceVnics: containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned">isPublicIpAssigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#subnet_id ContainerInstancesContainerInstance#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#defined_tags ContainerInstancesContainerInstance#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#display_name ContainerInstancesContainerInstance#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#freeform_tags ContainerInstancesContainerInstance#freeform_tags}.

---

##### `hostnameLabel`<sup>Optional</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#hostname_label ContainerInstancesContainerInstance#hostname_label}.

---

##### `isPublicIpAssigned`<sup>Optional</sup> <a name="isPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.isPublicIpAssigned"></a>

```typescript
public readonly isPublicIpAssigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#is_public_ip_assigned ContainerInstancesContainerInstance#is_public_ip_assigned}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#nsg_ids ContainerInstancesContainerInstance#nsg_ids}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#private_ip ContainerInstancesContainerInstance#private_ip}.

---

##### `skipSourceDestCheck`<sup>Optional</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#skip_source_dest_check ContainerInstancesContainerInstance#skip_source_dest_check}.

---

### ContainerInstancesContainerInstanceVolumes <a name="ContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceVolumes: containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore">backingStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs">configs</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]</code> | configs block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#name ContainerInstancesContainerInstance#name}.

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#volume_type ContainerInstancesContainerInstance#volume_type}.

---

##### `backingStore`<sup>Optional</sup> <a name="backingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.backingStore"></a>

```typescript
public readonly backingStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#backing_store ContainerInstancesContainerInstance#backing_store}.

---

##### `configs`<sup>Optional</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes.property.configs"></a>

```typescript
public readonly configs: IResolvable | ContainerInstancesContainerInstanceVolumesConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]

configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#configs ContainerInstancesContainerInstance#configs}

---

### ContainerInstancesContainerInstanceVolumesConfigs <a name="ContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

const containerInstancesContainerInstanceVolumesConfigs: containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName">fileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}. |

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#data ContainerInstancesContainerInstance#data}.

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#file_name ContainerInstancesContainerInstance#file_name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/container_instances_container_instance#path ContainerInstancesContainerInstance#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecksHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]

---


### ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecksHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>

---


### ContainerInstancesContainerInstanceContainersHealthChecksList <a name="ContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]

---


### ContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="ContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction">resetFailureAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds">resetInitialDelayInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails">resetStatusDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecksHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]

---

##### `resetCommand` <a name="resetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetFailureAction` <a name="resetFailureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureAction"></a>

```typescript
public resetFailureAction(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHeaders` <a name="resetHeaders" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```

##### `resetInitialDelayInSeconds` <a name="resetInitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetInitialDelayInSeconds"></a>

```typescript
public resetInitialDelayInSeconds(): void
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetIntervalInSeconds"></a>

```typescript
public resetIntervalInSeconds(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStatusDetails` <a name="resetStatusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetStatusDetails"></a>

```typescript
public resetStatusDetails(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput">failureActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput">healthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput">initialDelayInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput">statusDetailsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">failureAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">healthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">initialDelayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```typescript
public readonly headers: ContainerInstancesContainerInstanceContainersHealthChecksHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeadersList">ContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `failureActionInput`<sup>Optional</sup> <a name="failureActionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureActionInput"></a>

```typescript
public readonly failureActionInput: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecksHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksHeaders">ContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>[]

---

##### `healthCheckTypeInput`<sup>Optional</sup> <a name="healthCheckTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckTypeInput"></a>

```typescript
public readonly healthCheckTypeInput: string;
```

- *Type:* string

---

##### `initialDelayInSecondsInput`<sup>Optional</sup> <a name="initialDelayInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSecondsInput"></a>

```typescript
public readonly initialDelayInSecondsInput: number;
```

- *Type:* number

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSecondsInput"></a>

```typescript
public readonly intervalInSecondsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `statusDetailsInput`<sup>Optional</sup> <a name="statusDetailsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetailsInput"></a>

```typescript
public readonly statusDetailsInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `failureAction`<sup>Required</sup> <a name="failureAction" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```typescript
public readonly failureAction: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `healthCheckType`<sup>Required</sup> <a name="healthCheckType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```typescript
public readonly healthCheckType: string;
```

- *Type:* string

---

##### `initialDelayInSeconds`<sup>Required</sup> <a name="initialDelayInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```typescript
public readonly initialDelayInSeconds: number;
```

- *Type:* number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>

---


### ContainerInstancesContainerInstanceContainersList <a name="ContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>[]

---


### ContainerInstancesContainerInstanceContainersOutputReference <a name="ContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks">putHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig">putResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext">putSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts">putVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks">resetHealthChecks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled">resetIsResourcePrincipalDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig">resetResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext">resetSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts">resetVolumeMounts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory">resetWorkingDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthChecks` <a name="putHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks"></a>

```typescript
public putHealthChecks(value: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putHealthChecks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]

---

##### `putResourceConfig` <a name="putResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig"></a>

```typescript
public putResourceConfig(value: ContainerInstancesContainerInstanceContainersResourceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putResourceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `putSecurityContext` <a name="putSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext"></a>

```typescript
public putSecurityContext(value: ContainerInstancesContainerInstanceContainersSecurityContext): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putSecurityContext.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `putVolumeMounts` <a name="putVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts"></a>

```typescript
public putVolumeMounts(value: IResolvable | ContainerInstancesContainerInstanceContainersVolumeMounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]

---

##### `resetArguments` <a name="resetArguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetCommand` <a name="resetCommand" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetCommand"></a>

```typescript
public resetCommand(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHealthChecks` <a name="resetHealthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetHealthChecks"></a>

```typescript
public resetHealthChecks(): void
```

##### `resetIsResourcePrincipalDisabled` <a name="resetIsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetIsResourcePrincipalDisabled"></a>

```typescript
public resetIsResourcePrincipalDisabled(): void
```

##### `resetResourceConfig` <a name="resetResourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetResourceConfig"></a>

```typescript
public resetResourceConfig(): void
```

##### `resetSecurityContext` <a name="resetSecurityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetSecurityContext"></a>

```typescript
public resetSecurityContext(): void
```

##### `resetVolumeMounts` <a name="resetVolumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetVolumeMounts"></a>

```typescript
public resetVolumeMounts(): void
```

##### `resetWorkingDirectory` <a name="resetWorkingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.resetWorkingDirectory"></a>

```typescript
public resetWorkingDirectory(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId">containerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">containerInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">exitCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">healthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">resourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">securityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">timeTerminated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput">healthChecksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput">imageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput">isResourcePrincipalDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput">resourceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput">securityContextInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput">volumeMountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput">workingDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">imageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">isResourcePrincipalDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `containerId`<sup>Required</sup> <a name="containerId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```typescript
public readonly containerId: string;
```

- *Type:* string

---

##### `containerInstanceId`<sup>Required</sup> <a name="containerInstanceId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```typescript
public readonly containerInstanceId: string;
```

- *Type:* string

---

##### `exitCode`<sup>Required</sup> <a name="exitCode" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```typescript
public readonly exitCode: number;
```

- *Type:* number

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```typescript
public readonly healthChecks: ContainerInstancesContainerInstanceContainersHealthChecksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecksList">ContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceConfig`<sup>Required</sup> <a name="resourceConfig" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```typescript
public readonly resourceConfig: ContainerInstancesContainerInstanceContainersResourceConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference">ContainerInstancesContainerInstanceContainersResourceConfigOutputReference</a>

---

##### `securityContext`<sup>Required</sup> <a name="securityContext" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```typescript
public readonly securityContext: ContainerInstancesContainerInstanceContainersSecurityContextOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeTerminated`<sup>Required</sup> <a name="timeTerminated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```typescript
public readonly timeTerminated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```typescript
public readonly volumeMounts: ContainerInstancesContainerInstanceContainersVolumeMountsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList">ContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string[];
```

- *Type:* string[]

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `healthChecksInput`<sup>Optional</sup> <a name="healthChecksInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.healthChecksInput"></a>

```typescript
public readonly healthChecksInput: IResolvable | ContainerInstancesContainerInstanceContainersHealthChecks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersHealthChecks">ContainerInstancesContainerInstanceContainersHealthChecks</a>[]

---

##### `imageUrlInput`<sup>Optional</sup> <a name="imageUrlInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrlInput"></a>

```typescript
public readonly imageUrlInput: string;
```

- *Type:* string

---

##### `isResourcePrincipalDisabledInput`<sup>Optional</sup> <a name="isResourcePrincipalDisabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabledInput"></a>

```typescript
public readonly isResourcePrincipalDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceConfigInput`<sup>Optional</sup> <a name="resourceConfigInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfigInput"></a>

```typescript
public readonly resourceConfigInput: ContainerInstancesContainerInstanceContainersResourceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---

##### `securityContextInput`<sup>Optional</sup> <a name="securityContextInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.securityContextInput"></a>

```typescript
public readonly securityContextInput: ContainerInstancesContainerInstanceContainersSecurityContext;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---

##### `volumeMountsInput`<sup>Optional</sup> <a name="volumeMountsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.volumeMountsInput"></a>

```typescript
public readonly volumeMountsInput: IResolvable | ContainerInstancesContainerInstanceContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="workingDirectoryInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectoryInput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageUrl`<sup>Required</sup> <a name="imageUrl" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```typescript
public readonly imageUrl: string;
```

- *Type:* string

---

##### `isResourcePrincipalDisabled`<sup>Required</sup> <a name="isResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```typescript
public readonly isResourcePrincipalDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainers">ContainerInstancesContainerInstanceContainers</a>

---


### ContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="ContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs">resetMemoryLimitInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit">resetVcpusLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryLimitInGbs` <a name="resetMemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetMemoryLimitInGbs"></a>

```typescript
public resetMemoryLimitInGbs(): void
```

##### `resetVcpusLimit` <a name="resetVcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resetVcpusLimit"></a>

```typescript
public resetVcpusLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput">memoryLimitInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput">vcpusLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">memoryLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">vcpusLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `memoryLimitInGbsInput`<sup>Optional</sup> <a name="memoryLimitInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbsInput"></a>

```typescript
public readonly memoryLimitInGbsInput: number;
```

- *Type:* number

---

##### `vcpusLimitInput`<sup>Optional</sup> <a name="vcpusLimitInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimitInput"></a>

```typescript
public readonly vcpusLimitInput: number;
```

- *Type:* number

---

##### `memoryLimitInGbs`<sup>Required</sup> <a name="memoryLimitInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```typescript
public readonly memoryLimitInGbs: number;
```

- *Type:* number

---

##### `vcpusLimit`<sup>Required</sup> <a name="vcpusLimit" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```typescript
public readonly vcpusLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerInstancesContainerInstanceContainersResourceConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersResourceConfig">ContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities">resetAddCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities">resetDropCapabilities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddCapabilities` <a name="resetAddCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetAddCapabilities"></a>

```typescript
public resetAddCapabilities(): void
```

##### `resetDropCapabilities` <a name="resetDropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resetDropCapabilities"></a>

```typescript
public resetDropCapabilities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput">addCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput">dropCapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">addCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">dropCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addCapabilitiesInput`<sup>Optional</sup> <a name="addCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilitiesInput"></a>

```typescript
public readonly addCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `dropCapabilitiesInput`<sup>Optional</sup> <a name="dropCapabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilitiesInput"></a>

```typescript
public readonly dropCapabilitiesInput: string[];
```

- *Type:* string[]

---

##### `addCapabilities`<sup>Required</sup> <a name="addCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```typescript
public readonly addCapabilities: string[];
```

- *Type:* string[]

---

##### `dropCapabilities`<sup>Required</sup> <a name="dropCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```typescript
public readonly dropCapabilities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### ContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="ContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities">putCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled">resetIsNonRootUserCheckEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly">resetIsRootFileSystemReadonly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup">resetRunAsGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser">resetRunAsUser</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType">resetSecurityContextType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapabilities` <a name="putCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities"></a>

```typescript
public putCapabilities(value: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.putCapabilities.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `resetCapabilities` <a name="resetCapabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetCapabilities"></a>

```typescript
public resetCapabilities(): void
```

##### `resetIsNonRootUserCheckEnabled` <a name="resetIsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsNonRootUserCheckEnabled"></a>

```typescript
public resetIsNonRootUserCheckEnabled(): void
```

##### `resetIsRootFileSystemReadonly` <a name="resetIsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetIsRootFileSystemReadonly"></a>

```typescript
public resetIsRootFileSystemReadonly(): void
```

##### `resetRunAsGroup` <a name="resetRunAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsGroup"></a>

```typescript
public resetRunAsGroup(): void
```

##### `resetRunAsUser` <a name="resetRunAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetRunAsUser"></a>

```typescript
public resetRunAsUser(): void
```

##### `resetSecurityContextType` <a name="resetSecurityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resetSecurityContextType"></a>

```typescript
public resetSecurityContextType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput">isNonRootUserCheckEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput">isRootFileSystemReadonlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput">runAsGroupInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput">runAsUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput">securityContextTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">isNonRootUserCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">isRootFileSystemReadonly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">runAsGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">runAsUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">securityContextType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference">ContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: ContainerInstancesContainerInstanceContainersSecurityContextCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextCapabilities">ContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---

##### `isNonRootUserCheckEnabledInput`<sup>Optional</sup> <a name="isNonRootUserCheckEnabledInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabledInput"></a>

```typescript
public readonly isNonRootUserCheckEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRootFileSystemReadonlyInput`<sup>Optional</sup> <a name="isRootFileSystemReadonlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonlyInput"></a>

```typescript
public readonly isRootFileSystemReadonlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroupInput`<sup>Optional</sup> <a name="runAsGroupInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroupInput"></a>

```typescript
public readonly runAsGroupInput: number;
```

- *Type:* number

---

##### `runAsUserInput`<sup>Optional</sup> <a name="runAsUserInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUserInput"></a>

```typescript
public readonly runAsUserInput: number;
```

- *Type:* number

---

##### `securityContextTypeInput`<sup>Optional</sup> <a name="securityContextTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextTypeInput"></a>

```typescript
public readonly securityContextTypeInput: string;
```

- *Type:* string

---

##### `isNonRootUserCheckEnabled`<sup>Required</sup> <a name="isNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```typescript
public readonly isNonRootUserCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRootFileSystemReadonly`<sup>Required</sup> <a name="isRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```typescript
public readonly isRootFileSystemReadonly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsGroup`<sup>Required</sup> <a name="runAsGroup" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```typescript
public readonly runAsGroup: number;
```

- *Type:* number

---

##### `runAsUser`<sup>Required</sup> <a name="runAsUser" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```typescript
public readonly runAsUser: number;
```

- *Type:* number

---

##### `securityContextType`<sup>Required</sup> <a name="securityContextType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```typescript
public readonly securityContextType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerInstancesContainerInstanceContainersSecurityContext;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersSecurityContext">ContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### ContainerInstancesContainerInstanceContainersVolumeMountsList <a name="ContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersVolumeMounts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>[]

---


### ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath">resetSubPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetIsReadOnly"></a>

```typescript
public resetIsReadOnly(): void
```

##### `resetPartition` <a name="resetPartition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetPartition"></a>

```typescript
public resetPartition(): void
```

##### `resetSubPath` <a name="resetSubPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```typescript
public resetSubPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput">partitionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput">subPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">partition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">subPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnlyInput"></a>

```typescript
public readonly isReadOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partitionInput"></a>

```typescript
public readonly partitionInput: number;
```

- *Type:* number

---

##### `subPathInput`<sup>Optional</sup> <a name="subPathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```typescript
public readonly subPathInput: string;
```

- *Type:* string

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```typescript
public readonly isReadOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```typescript
public readonly partition: number;
```

- *Type:* number

---

##### `subPath`<sup>Required</sup> <a name="subPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```typescript
public readonly subPath: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceContainersVolumeMounts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceContainersVolumeMounts">ContainerInstancesContainerInstanceContainersVolumeMounts</a>

---


### ContainerInstancesContainerInstanceDnsConfigOutputReference <a name="ContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers">resetNameservers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches">resetSearches</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNameservers` <a name="resetNameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetNameservers"></a>

```typescript
public resetNameservers(): void
```

##### `resetOptions` <a name="resetOptions" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSearches` <a name="resetSearches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.resetSearches"></a>

```typescript
public resetSearches(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput">nameserversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput">optionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput">searchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">nameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">searches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameserversInput`<sup>Optional</sup> <a name="nameserversInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameserversInput"></a>

```typescript
public readonly nameserversInput: string[];
```

- *Type:* string[]

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.optionsInput"></a>

```typescript
public readonly optionsInput: string[];
```

- *Type:* string[]

---

##### `searchesInput`<sup>Optional</sup> <a name="searchesInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searchesInput"></a>

```typescript
public readonly searchesInput: string[];
```

- *Type:* string[]

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```typescript
public readonly nameservers: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```typescript
public readonly options: string[];
```

- *Type:* string[]

---

##### `searches`<sup>Required</sup> <a name="searches" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```typescript
public readonly searches: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerInstancesContainerInstanceDnsConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceDnsConfig">ContainerInstancesContainerInstanceDnsConfig</a>

---


### ContainerInstancesContainerInstanceImagePullSecretsList <a name="ContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceImagePullSecrets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>[]

---


### ContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="ContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput">registryEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">registryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `registryEndpointInput`<sup>Optional</sup> <a name="registryEndpointInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpointInput"></a>

```typescript
public readonly registryEndpointInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `registryEndpoint`<sup>Required</sup> <a name="registryEndpoint" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```typescript
public readonly registryEndpoint: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceImagePullSecrets;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceImagePullSecrets">ContainerInstancesContainerInstanceImagePullSecrets</a>

---


### ContainerInstancesContainerInstanceShapeConfigOutputReference <a name="ContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```typescript
public resetMemoryInGbs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">processorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```typescript
public readonly networkingBandwidthInGbps: number;
```

- *Type:* number

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```typescript
public readonly processorDescription: string;
```

- *Type:* string

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```typescript
public readonly memoryInGbsInput: number;
```

- *Type:* number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```typescript
public readonly ocpusInput: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerInstancesContainerInstanceShapeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceShapeConfig">ContainerInstancesContainerInstanceShapeConfig</a>

---


### ContainerInstancesContainerInstanceTimeoutsOutputReference <a name="ContainerInstancesContainerInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceTimeouts">ContainerInstancesContainerInstanceTimeouts</a>

---


### ContainerInstancesContainerInstanceVnicsList <a name="ContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVnics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>[]

---


### ContainerInstancesContainerInstanceVnicsOutputReference <a name="ContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel">resetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned">resetIsPublicIpAssigned</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck">resetSkipSourceDestCheck</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHostnameLabel` <a name="resetHostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetHostnameLabel"></a>

```typescript
public resetHostnameLabel(): void
```

##### `resetIsPublicIpAssigned` <a name="resetIsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetIsPublicIpAssigned"></a>

```typescript
public resetIsPublicIpAssigned(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetSkipSourceDestCheck` <a name="resetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.resetSkipSourceDestCheck"></a>

```typescript
public resetSkipSourceDestCheck(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput">hostnameLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput">isPublicIpAssignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput">skipSourceDestCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">isPublicIpAssigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">skipSourceDestCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabelInput`<sup>Optional</sup> <a name="hostnameLabelInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabelInput"></a>

```typescript
public readonly hostnameLabelInput: string;
```

- *Type:* string

---

##### `isPublicIpAssignedInput`<sup>Optional</sup> <a name="isPublicIpAssignedInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssignedInput"></a>

```typescript
public readonly isPublicIpAssignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `skipSourceDestCheckInput`<sup>Optional</sup> <a name="skipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheckInput"></a>

```typescript
public readonly skipSourceDestCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `isPublicIpAssigned`<sup>Required</sup> <a name="isPublicIpAssigned" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```typescript
public readonly isPublicIpAssigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `skipSourceDestCheck`<sup>Required</sup> <a name="skipSourceDestCheck" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```typescript
public readonly skipSourceDestCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVnics;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVnics">ContainerInstancesContainerInstanceVnics</a>

---


### ContainerInstancesContainerInstanceVolumesConfigsList <a name="ContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVolumesConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]

---


### ContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="ContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName">resetFileName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetData"></a>

```typescript
public resetData(): void
```

##### `resetFileName` <a name="resetFileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetFileName"></a>

```typescript
public resetFileName(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput">fileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `fileNameInput`<sup>Optional</sup> <a name="fileNameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileNameInput"></a>

```typescript
public readonly fileNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVolumesConfigs;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>

---


### ContainerInstancesContainerInstanceVolumesList <a name="ContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get"></a>

```typescript
public get(index: number): ContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>[]

---


### ContainerInstancesContainerInstanceVolumesOutputReference <a name="ContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```typescript
import { containerInstancesContainerInstance } from 'rhizo-co-terraform-provider-oci'

new containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs">putConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore">resetBackingStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs">resetConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigs` <a name="putConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs"></a>

```typescript
public putConfigs(value: IResolvable | ContainerInstancesContainerInstanceVolumesConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.putConfigs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]

---

##### `resetBackingStore` <a name="resetBackingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetBackingStore"></a>

```typescript
public resetBackingStore(): void
```

##### `resetConfigs` <a name="resetConfigs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.resetConfigs"></a>

```typescript
public resetConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs">configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput">backingStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput">configsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">backingStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configs`<sup>Required</sup> <a name="configs" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```typescript
public readonly configs: ContainerInstancesContainerInstanceVolumesConfigsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigsList">ContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `backingStoreInput`<sup>Optional</sup> <a name="backingStoreInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStoreInput"></a>

```typescript
public readonly backingStoreInput: string;
```

- *Type:* string

---

##### `configsInput`<sup>Optional</sup> <a name="configsInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.configsInput"></a>

```typescript
public readonly configsInput: IResolvable | ContainerInstancesContainerInstanceVolumesConfigs[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesConfigs">ContainerInstancesContainerInstanceVolumesConfigs</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `backingStore`<sup>Required</sup> <a name="backingStore" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```typescript
public readonly backingStore: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerInstancesContainerInstanceVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerInstancesContainerInstance.ContainerInstancesContainerInstanceVolumes">ContainerInstancesContainerInstanceVolumes</a>

---



