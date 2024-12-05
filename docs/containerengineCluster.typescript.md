# `containerengineCluster` Submodule <a name="`containerengineCluster` Submodule" id="rhizo-co-terraform-provider-oci.containerengineCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineCluster <a name="ContainerengineCluster" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster oci_containerengine_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineCluster(scope: Construct, id: string, config: ContainerengineClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig">ContainerengineClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig">ContainerengineClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions">putClusterPodNetworkOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig">putEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig">putImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions">resetClusterPodNetworkOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig">resetEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig">resetImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterPodNetworkOptions` <a name="putClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions"></a>

```typescript
public putClusterPodNetworkOptions(value: IResolvable | ContainerengineClusterClusterPodNetworkOptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putClusterPodNetworkOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]

---

##### `putEndpointConfig` <a name="putEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig"></a>

```typescript
public putEndpointConfig(value: ContainerengineClusterEndpointConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putEndpointConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---

##### `putImagePolicyConfig` <a name="putImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig"></a>

```typescript
public putImagePolicyConfig(value: ContainerengineClusterImagePolicyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putImagePolicyConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---

##### `putOptions` <a name="putOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions"></a>

```typescript
public putOptions(value: ContainerengineClusterOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerengineClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

---

##### `resetClusterPodNetworkOptions` <a name="resetClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetClusterPodNetworkOptions"></a>

```typescript
public resetClusterPodNetworkOptions(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetEndpointConfig` <a name="resetEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetEndpointConfig"></a>

```typescript
public resetEndpointConfig(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImagePolicyConfig` <a name="resetImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetImagePolicyConfig"></a>

```typescript
public resetImagePolicyConfig(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOptions` <a name="resetOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

containerengineCluster.ContainerengineCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

containerengineCluster.ContainerengineCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

containerengineCluster.ContainerengineCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

containerengineCluster.ContainerengineCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerengineCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerengineCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerengineCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades">availableKubernetesUpgrades</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions">clusterPodNetworkOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig">endpointConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig">imagePolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint">openIdConnectDiscoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput">clusterPodNetworkOptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput">endpointConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput">imagePolicyConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput">kubernetesVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput">optionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableKubernetesUpgrades`<sup>Required</sup> <a name="availableKubernetesUpgrades" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.availableKubernetesUpgrades"></a>

```typescript
public readonly availableKubernetesUpgrades: string[];
```

- *Type:* string[]

---

##### `clusterPodNetworkOptions`<sup>Required</sup> <a name="clusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptions"></a>

```typescript
public readonly clusterPodNetworkOptions: ContainerengineClusterClusterPodNetworkOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList">ContainerengineClusterClusterPodNetworkOptionsList</a>

---

##### `endpointConfig`<sup>Required</sup> <a name="endpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfig"></a>

```typescript
public readonly endpointConfig: ContainerengineClusterEndpointConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference">ContainerengineClusterEndpointConfigOutputReference</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpoints"></a>

```typescript
public readonly endpoints: ContainerengineClusterEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList">ContainerengineClusterEndpointsList</a>

---

##### `imagePolicyConfig`<sup>Required</sup> <a name="imagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfig"></a>

```typescript
public readonly imagePolicyConfig: ContainerengineClusterImagePolicyConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference">ContainerengineClusterImagePolicyConfigOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.metadata"></a>

```typescript
public readonly metadata: ContainerengineClusterMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList">ContainerengineClusterMetadataList</a>

---

##### `openIdConnectDiscoveryEndpoint`<sup>Required</sup> <a name="openIdConnectDiscoveryEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.openIdConnectDiscoveryEndpoint"></a>

```typescript
public readonly openIdConnectDiscoveryEndpoint: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.options"></a>

```typescript
public readonly options: ContainerengineClusterOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference">ContainerengineClusterOptionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineClusterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference">ContainerengineClusterTimeoutsOutputReference</a>

---

##### `clusterPodNetworkOptionsInput`<sup>Optional</sup> <a name="clusterPodNetworkOptionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.clusterPodNetworkOptionsInput"></a>

```typescript
public readonly clusterPodNetworkOptionsInput: IResolvable | ContainerengineClusterClusterPodNetworkOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointConfigInput`<sup>Optional</sup> <a name="endpointConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.endpointConfigInput"></a>

```typescript
public readonly endpointConfigInput: ContainerengineClusterEndpointConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imagePolicyConfigInput`<sup>Optional</sup> <a name="imagePolicyConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.imagePolicyConfigInput"></a>

```typescript
public readonly imagePolicyConfigInput: ContainerengineClusterImagePolicyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kubernetesVersionInput`<sup>Optional</sup> <a name="kubernetesVersionInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersionInput"></a>

```typescript
public readonly kubernetesVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.optionsInput"></a>

```typescript
public readonly optionsInput: ContainerengineClusterOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerengineClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineClusterClusterPodNetworkOptions <a name="ContainerengineClusterClusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterClusterPodNetworkOptions: containerengineCluster.ContainerengineClusterClusterPodNetworkOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType">cniType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}. |

---

##### `cniType`<sup>Required</sup> <a name="cniType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions.property.cniType"></a>

```typescript
public readonly cniType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cni_type ContainerengineCluster#cni_type}.

---

### ContainerengineClusterConfig <a name="ContainerengineClusterConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterConfig: containerengineCluster.ContainerengineClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion">kubernetesVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions">clusterPodNetworkOptions</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]</code> | cluster_pod_network_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig">endpointConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | endpoint_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig">imagePolicyConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | image_policy_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options">options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#compartment_id ContainerengineCluster#compartment_id}.

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_version ContainerengineCluster#kubernetes_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#name ContainerengineCluster#name}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#vcn_id ContainerengineCluster#vcn_id}.

---

##### `clusterPodNetworkOptions`<sup>Optional</sup> <a name="clusterPodNetworkOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.clusterPodNetworkOptions"></a>

```typescript
public readonly clusterPodNetworkOptions: IResolvable | ContainerengineClusterClusterPodNetworkOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]

cluster_pod_network_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#cluster_pod_network_options ContainerengineCluster#cluster_pod_network_options}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `endpointConfig`<sup>Optional</sup> <a name="endpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.endpointConfig"></a>

```typescript
public readonly endpointConfig: ContainerengineClusterEndpointConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

endpoint_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#endpoint_config ContainerengineCluster#endpoint_config}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#id ContainerengineCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imagePolicyConfig`<sup>Optional</sup> <a name="imagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.imagePolicyConfig"></a>

```typescript
public readonly imagePolicyConfig: ContainerengineClusterImagePolicyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

image_policy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#image_policy_config ContainerengineCluster#image_policy_config}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

##### `options`<sup>Optional</sup> <a name="options" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.options"></a>

```typescript
public readonly options: ContainerengineClusterOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#options ContainerengineCluster#options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerengineClusterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#timeouts ContainerengineCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#type ContainerengineCluster#type}.

---

### ContainerengineClusterEndpointConfig <a name="ContainerengineClusterEndpointConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterEndpointConfig: containerengineCluster.ContainerengineClusterEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled">isPublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#subnet_id ContainerengineCluster#subnet_id}.

---

##### `isPublicIpEnabled`<sup>Optional</sup> <a name="isPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.isPublicIpEnabled"></a>

```typescript
public readonly isPublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_public_ip_enabled ContainerengineCluster#is_public_ip_enabled}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#nsg_ids ContainerengineCluster#nsg_ids}.

---

### ContainerengineClusterEndpoints <a name="ContainerengineClusterEndpoints" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterEndpoints: containerengineCluster.ContainerengineClusterEndpoints = { ... }
```


### ContainerengineClusterImagePolicyConfig <a name="ContainerengineClusterImagePolicyConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterImagePolicyConfig: containerengineCluster.ContainerengineClusterImagePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled">isPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails">keyDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]</code> | key_details block. |

---

##### `isPolicyEnabled`<sup>Optional</sup> <a name="isPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.isPolicyEnabled"></a>

```typescript
public readonly isPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_policy_enabled ContainerengineCluster#is_policy_enabled}.

---

##### `keyDetails`<sup>Optional</sup> <a name="keyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig.property.keyDetails"></a>

```typescript
public readonly keyDetails: IResolvable | ContainerengineClusterImagePolicyConfigKeyDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key_details ContainerengineCluster#key_details}

---

### ContainerengineClusterImagePolicyConfigKeyDetails <a name="ContainerengineClusterImagePolicyConfigKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterImagePolicyConfigKeyDetails: containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kms_key_id ContainerengineCluster#kms_key_id}.

---

### ContainerengineClusterMetadata <a name="ContainerengineClusterMetadata" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterMetadata: containerengineCluster.ContainerengineClusterMetadata = { ... }
```


### ContainerengineClusterOptions <a name="ContainerengineClusterOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptions: containerengineCluster.ContainerengineClusterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns">addOns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | add_ons block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions">admissionControllerOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | admission_controller_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | kubernetes_network_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery">openIdConnectDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | open_id_connect_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig">openIdConnectTokenAuthenticationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | open_id_connect_token_authentication_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig">persistentVolumeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | persistent_volume_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig">serviceLbConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | service_lb_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds">serviceLbSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}. |

---

##### `addOns`<sup>Optional</sup> <a name="addOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.addOns"></a>

```typescript
public readonly addOns: ContainerengineClusterOptionsAddOns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

add_ons block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#add_ons ContainerengineCluster#add_ons}

---

##### `admissionControllerOptions`<sup>Optional</sup> <a name="admissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.admissionControllerOptions"></a>

```typescript
public readonly admissionControllerOptions: ContainerengineClusterOptionsAdmissionControllerOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

admission_controller_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#admission_controller_options ContainerengineCluster#admission_controller_options}

---

##### `kubernetesNetworkConfig`<sup>Optional</sup> <a name="kubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: ContainerengineClusterOptionsKubernetesNetworkConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

kubernetes_network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#kubernetes_network_config ContainerengineCluster#kubernetes_network_config}

---

##### `openIdConnectDiscovery`<sup>Optional</sup> <a name="openIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectDiscovery"></a>

```typescript
public readonly openIdConnectDiscovery: ContainerengineClusterOptionsOpenIdConnectDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

open_id_connect_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_discovery ContainerengineCluster#open_id_connect_discovery}

---

##### `openIdConnectTokenAuthenticationConfig`<sup>Optional</sup> <a name="openIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.openIdConnectTokenAuthenticationConfig"></a>

```typescript
public readonly openIdConnectTokenAuthenticationConfig: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

open_id_connect_token_authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#open_id_connect_token_authentication_config ContainerengineCluster#open_id_connect_token_authentication_config}

---

##### `persistentVolumeConfig`<sup>Optional</sup> <a name="persistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.persistentVolumeConfig"></a>

```typescript
public readonly persistentVolumeConfig: ContainerengineClusterOptionsPersistentVolumeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

persistent_volume_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#persistent_volume_config ContainerengineCluster#persistent_volume_config}

---

##### `serviceLbConfig`<sup>Optional</sup> <a name="serviceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbConfig"></a>

```typescript
public readonly serviceLbConfig: ContainerengineClusterOptionsServiceLbConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

service_lb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_config ContainerengineCluster#service_lb_config}

---

##### `serviceLbSubnetIds`<sup>Optional</sup> <a name="serviceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions.property.serviceLbSubnetIds"></a>

```typescript
public readonly serviceLbSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#service_lb_subnet_ids ContainerengineCluster#service_lb_subnet_ids}.

---

### ContainerengineClusterOptionsAddOns <a name="ContainerengineClusterOptionsAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsAddOns: containerengineCluster.ContainerengineClusterOptionsAddOns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled">isKubernetesDashboardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled">isTillerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}. |

---

##### `isKubernetesDashboardEnabled`<sup>Optional</sup> <a name="isKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isKubernetesDashboardEnabled"></a>

```typescript
public readonly isKubernetesDashboardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_kubernetes_dashboard_enabled ContainerengineCluster#is_kubernetes_dashboard_enabled}.

---

##### `isTillerEnabled`<sup>Optional</sup> <a name="isTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns.property.isTillerEnabled"></a>

```typescript
public readonly isTillerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_tiller_enabled ContainerengineCluster#is_tiller_enabled}.

---

### ContainerengineClusterOptionsAdmissionControllerOptions <a name="ContainerengineClusterOptionsAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsAdmissionControllerOptions: containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled">isPodSecurityPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}. |

---

##### `isPodSecurityPolicyEnabled`<sup>Optional</sup> <a name="isPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions.property.isPodSecurityPolicyEnabled"></a>

```typescript
public readonly isPodSecurityPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_pod_security_policy_enabled ContainerengineCluster#is_pod_security_policy_enabled}.

---

### ContainerengineClusterOptionsKubernetesNetworkConfig <a name="ContainerengineClusterOptionsKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsKubernetesNetworkConfig: containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr">podsCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr">servicesCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}. |

---

##### `podsCidr`<sup>Optional</sup> <a name="podsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.podsCidr"></a>

```typescript
public readonly podsCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#pods_cidr ContainerengineCluster#pods_cidr}.

---

##### `servicesCidr`<sup>Optional</sup> <a name="servicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig.property.servicesCidr"></a>

```typescript
public readonly servicesCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#services_cidr ContainerengineCluster#services_cidr}.

---

### ContainerengineClusterOptionsOpenIdConnectDiscovery <a name="ContainerengineClusterOptionsOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsOpenIdConnectDiscovery: containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled">isOpenIdConnectDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}. |

---

##### `isOpenIdConnectDiscoveryEnabled`<sup>Optional</sup> <a name="isOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery.property.isOpenIdConnectDiscoveryEnabled"></a>

```typescript
public readonly isOpenIdConnectDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_discovery_enabled ContainerengineCluster#is_open_id_connect_discovery_enabled}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig: containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled">isOpenIdConnectAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims">requiredClaims</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]</code> | required_claims block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms">signingAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}. |

---

##### `isOpenIdConnectAuthEnabled`<sup>Required</sup> <a name="isOpenIdConnectAuthEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.isOpenIdConnectAuthEnabled"></a>

```typescript
public readonly isOpenIdConnectAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#is_open_id_connect_auth_enabled ContainerengineCluster#is_open_id_connect_auth_enabled}.

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#ca_certificate ContainerengineCluster#ca_certificate}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#client_id ContainerengineCluster#client_id}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_claim ContainerengineCluster#groups_claim}.

---

##### `groupsPrefix`<sup>Optional</sup> <a name="groupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#groups_prefix ContainerengineCluster#groups_prefix}.

---

##### `issuerUrl`<sup>Optional</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#issuer_url ContainerengineCluster#issuer_url}.

---

##### `requiredClaims`<sup>Optional</sup> <a name="requiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: IResolvable | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]

required_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#required_claims ContainerengineCluster#required_claims}

---

##### `signingAlgorithms`<sup>Optional</sup> <a name="signingAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.signingAlgorithms"></a>

```typescript
public readonly signingAlgorithms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#signing_algorithms ContainerengineCluster#signing_algorithms}.

---

##### `usernameClaim`<sup>Optional</sup> <a name="usernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_claim ContainerengineCluster#username_claim}.

---

##### `usernamePrefix`<sup>Optional</sup> <a name="usernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#username_prefix ContainerengineCluster#username_prefix}.

---

### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims: containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#key ContainerengineCluster#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#value ContainerengineCluster#value}.

---

### ContainerengineClusterOptionsPersistentVolumeConfig <a name="ContainerengineClusterOptionsPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsPersistentVolumeConfig: containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterOptionsServiceLbConfig <a name="ContainerengineClusterOptionsServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterOptionsServiceLbConfig: containerengineCluster.ContainerengineClusterOptionsServiceLbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#defined_tags ContainerengineCluster#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#freeform_tags ContainerengineCluster#freeform_tags}.

---

### ContainerengineClusterTimeouts <a name="ContainerengineClusterTimeouts" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

const containerengineClusterTimeouts: containerengineCluster.ContainerengineClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#create ContainerengineCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#delete ContainerengineCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_cluster#update ContainerengineCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineClusterClusterPodNetworkOptionsList <a name="ContainerengineClusterClusterPodNetworkOptionsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get"></a>

```typescript
public get(index: number): ContainerengineClusterClusterPodNetworkOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterClusterPodNetworkOptions[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>[]

---


### ContainerengineClusterClusterPodNetworkOptionsOutputReference <a name="ContainerengineClusterClusterPodNetworkOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput">cniTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType">cniType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cniTypeInput`<sup>Optional</sup> <a name="cniTypeInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniTypeInput"></a>

```typescript
public readonly cniTypeInput: string;
```

- *Type:* string

---

##### `cniType`<sup>Required</sup> <a name="cniType" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.cniType"></a>

```typescript
public readonly cniType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterClusterPodNetworkOptions;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterClusterPodNetworkOptions">ContainerengineClusterClusterPodNetworkOptions</a>

---


### ContainerengineClusterEndpointConfigOutputReference <a name="ContainerengineClusterEndpointConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled">resetIsPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsPublicIpEnabled` <a name="resetIsPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetIsPublicIpEnabled"></a>

```typescript
public resetIsPublicIpEnabled(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput">isPublicIpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled">isPublicIpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPublicIpEnabledInput`<sup>Optional</sup> <a name="isPublicIpEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabledInput"></a>

```typescript
public readonly isPublicIpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `isPublicIpEnabled`<sup>Required</sup> <a name="isPublicIpEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.isPublicIpEnabled"></a>

```typescript
public readonly isPublicIpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterEndpointConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointConfig">ContainerengineClusterEndpointConfig</a>

---


### ContainerengineClusterEndpointsList <a name="ContainerengineClusterEndpointsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get"></a>

```typescript
public get(index: number): ContainerengineClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerengineClusterEndpointsOutputReference <a name="ContainerengineClusterEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes">kubernetes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint">publicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint">vcnHostnameEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.kubernetes"></a>

```typescript
public readonly kubernetes: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: string;
```

- *Type:* string

---

##### `vcnHostnameEndpoint`<sup>Required</sup> <a name="vcnHostnameEndpoint" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.vcnHostnameEndpoint"></a>

```typescript
public readonly vcnHostnameEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterEndpoints">ContainerengineClusterEndpoints</a>

---


### ContainerengineClusterImagePolicyConfigKeyDetailsList <a name="ContainerengineClusterImagePolicyConfigKeyDetailsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get"></a>

```typescript
public get(index: number): ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterImagePolicyConfigKeyDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]

---


### ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference <a name="ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterImagePolicyConfigKeyDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>

---


### ContainerengineClusterImagePolicyConfigOutputReference <a name="ContainerengineClusterImagePolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails">putKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled">resetIsPolicyEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails">resetKeyDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyDetails` <a name="putKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails"></a>

```typescript
public putKeyDetails(value: IResolvable | ContainerengineClusterImagePolicyConfigKeyDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.putKeyDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]

---

##### `resetIsPolicyEnabled` <a name="resetIsPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetIsPolicyEnabled"></a>

```typescript
public resetIsPolicyEnabled(): void
```

##### `resetKeyDetails` <a name="resetKeyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.resetKeyDetails"></a>

```typescript
public resetKeyDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails">keyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput">isPolicyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput">keyDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled">isPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyDetails`<sup>Required</sup> <a name="keyDetails" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetails"></a>

```typescript
public readonly keyDetails: ContainerengineClusterImagePolicyConfigKeyDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetailsList">ContainerengineClusterImagePolicyConfigKeyDetailsList</a>

---

##### `isPolicyEnabledInput`<sup>Optional</sup> <a name="isPolicyEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabledInput"></a>

```typescript
public readonly isPolicyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyDetailsInput`<sup>Optional</sup> <a name="keyDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.keyDetailsInput"></a>

```typescript
public readonly keyDetailsInput: IResolvable | ContainerengineClusterImagePolicyConfigKeyDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigKeyDetails">ContainerengineClusterImagePolicyConfigKeyDetails</a>[]

---

##### `isPolicyEnabled`<sup>Required</sup> <a name="isPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.isPolicyEnabled"></a>

```typescript
public readonly isPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterImagePolicyConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterImagePolicyConfig">ContainerengineClusterImagePolicyConfig</a>

---


### ContainerengineClusterMetadataList <a name="ContainerengineClusterMetadataList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get"></a>

```typescript
public get(index: number): ContainerengineClusterMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ContainerengineClusterMetadataOutputReference <a name="ContainerengineClusterMetadataOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId">createdByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId">createdByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId">deletedByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId">deletedByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration">timeCredentialExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted">timeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId">updatedByUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId">updatedByWorkRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdByUserId`<sup>Required</sup> <a name="createdByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByUserId"></a>

```typescript
public readonly createdByUserId: string;
```

- *Type:* string

---

##### `createdByWorkRequestId`<sup>Required</sup> <a name="createdByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.createdByWorkRequestId"></a>

```typescript
public readonly createdByWorkRequestId: string;
```

- *Type:* string

---

##### `deletedByUserId`<sup>Required</sup> <a name="deletedByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByUserId"></a>

```typescript
public readonly deletedByUserId: string;
```

- *Type:* string

---

##### `deletedByWorkRequestId`<sup>Required</sup> <a name="deletedByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.deletedByWorkRequestId"></a>

```typescript
public readonly deletedByWorkRequestId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeCredentialExpiration`<sup>Required</sup> <a name="timeCredentialExpiration" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeCredentialExpiration"></a>

```typescript
public readonly timeCredentialExpiration: string;
```

- *Type:* string

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeDeleted"></a>

```typescript
public readonly timeDeleted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedByUserId`<sup>Required</sup> <a name="updatedByUserId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByUserId"></a>

```typescript
public readonly updatedByUserId: string;
```

- *Type:* string

---

##### `updatedByWorkRequestId`<sup>Required</sup> <a name="updatedByWorkRequestId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.updatedByWorkRequestId"></a>

```typescript
public readonly updatedByWorkRequestId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterMetadata">ContainerengineClusterMetadata</a>

---


### ContainerengineClusterOptionsAddOnsOutputReference <a name="ContainerengineClusterOptionsAddOnsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled">resetIsKubernetesDashboardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled">resetIsTillerEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsKubernetesDashboardEnabled` <a name="resetIsKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsKubernetesDashboardEnabled"></a>

```typescript
public resetIsKubernetesDashboardEnabled(): void
```

##### `resetIsTillerEnabled` <a name="resetIsTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.resetIsTillerEnabled"></a>

```typescript
public resetIsTillerEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput">isKubernetesDashboardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput">isTillerEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled">isKubernetesDashboardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled">isTillerEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isKubernetesDashboardEnabledInput`<sup>Optional</sup> <a name="isKubernetesDashboardEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabledInput"></a>

```typescript
public readonly isKubernetesDashboardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTillerEnabledInput`<sup>Optional</sup> <a name="isTillerEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabledInput"></a>

```typescript
public readonly isTillerEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isKubernetesDashboardEnabled`<sup>Required</sup> <a name="isKubernetesDashboardEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isKubernetesDashboardEnabled"></a>

```typescript
public readonly isKubernetesDashboardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTillerEnabled`<sup>Required</sup> <a name="isTillerEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.isTillerEnabled"></a>

```typescript
public readonly isTillerEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsAddOns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---


### ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference <a name="ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled">resetIsPodSecurityPolicyEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsPodSecurityPolicyEnabled` <a name="resetIsPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.resetIsPodSecurityPolicyEnabled"></a>

```typescript
public resetIsPodSecurityPolicyEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput">isPodSecurityPolicyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled">isPodSecurityPolicyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isPodSecurityPolicyEnabledInput`<sup>Optional</sup> <a name="isPodSecurityPolicyEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabledInput"></a>

```typescript
public readonly isPodSecurityPolicyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPodSecurityPolicyEnabled`<sup>Required</sup> <a name="isPodSecurityPolicyEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.isPodSecurityPolicyEnabled"></a>

```typescript
public readonly isPodSecurityPolicyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsAdmissionControllerOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---


### ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference <a name="ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr">resetPodsCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr">resetServicesCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPodsCidr` <a name="resetPodsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetPodsCidr"></a>

```typescript
public resetPodsCidr(): void
```

##### `resetServicesCidr` <a name="resetServicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.resetServicesCidr"></a>

```typescript
public resetServicesCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput">podsCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput">servicesCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr">podsCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr">servicesCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `podsCidrInput`<sup>Optional</sup> <a name="podsCidrInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidrInput"></a>

```typescript
public readonly podsCidrInput: string;
```

- *Type:* string

---

##### `servicesCidrInput`<sup>Optional</sup> <a name="servicesCidrInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidrInput"></a>

```typescript
public readonly servicesCidrInput: string;
```

- *Type:* string

---

##### `podsCidr`<sup>Required</sup> <a name="podsCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.podsCidr"></a>

```typescript
public readonly podsCidr: string;
```

- *Type:* string

---

##### `servicesCidr`<sup>Required</sup> <a name="servicesCidr" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.servicesCidr"></a>

```typescript
public readonly servicesCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsKubernetesNetworkConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled">resetIsOpenIdConnectDiscoveryEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsOpenIdConnectDiscoveryEnabled` <a name="resetIsOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.resetIsOpenIdConnectDiscoveryEnabled"></a>

```typescript
public resetIsOpenIdConnectDiscoveryEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput">isOpenIdConnectDiscoveryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled">isOpenIdConnectDiscoveryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isOpenIdConnectDiscoveryEnabledInput`<sup>Optional</sup> <a name="isOpenIdConnectDiscoveryEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabledInput"></a>

```typescript
public readonly isOpenIdConnectDiscoveryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOpenIdConnectDiscoveryEnabled`<sup>Required</sup> <a name="isOpenIdConnectDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.isOpenIdConnectDiscoveryEnabled"></a>

```typescript
public readonly isOpenIdConnectDiscoveryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsOpenIdConnectDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims">putRequiredClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix">resetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl">resetIssuerUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims">resetRequiredClaims</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms">resetSigningAlgorithms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim">resetUsernameClaim</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix">resetUsernamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequiredClaims` <a name="putRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims"></a>

```typescript
public putRequiredClaims(value: IResolvable | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.putRequiredClaims.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]

---

##### `resetCaCertificate` <a name="resetCaCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientId` <a name="resetClientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetGroupsPrefix` <a name="resetGroupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetGroupsPrefix"></a>

```typescript
public resetGroupsPrefix(): void
```

##### `resetIssuerUrl` <a name="resetIssuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetIssuerUrl"></a>

```typescript
public resetIssuerUrl(): void
```

##### `resetRequiredClaims` <a name="resetRequiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetRequiredClaims"></a>

```typescript
public resetRequiredClaims(): void
```

##### `resetSigningAlgorithms` <a name="resetSigningAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetSigningAlgorithms"></a>

```typescript
public resetSigningAlgorithms(): void
```

##### `resetUsernameClaim` <a name="resetUsernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernameClaim"></a>

```typescript
public resetUsernameClaim(): void
```

##### `resetUsernamePrefix` <a name="resetUsernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.resetUsernamePrefix"></a>

```typescript
public resetUsernamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims">requiredClaims</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput">groupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput">groupsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput">isOpenIdConnectAuthEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput">requiredClaimsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput">signingAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput">usernameClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput">usernamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled">isOpenIdConnectAuthEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms">signingAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredClaims`<sup>Required</sup> <a name="requiredClaims" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList</a>

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: string;
```

- *Type:* string

---

##### `groupsPrefixInput`<sup>Optional</sup> <a name="groupsPrefixInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefixInput"></a>

```typescript
public readonly groupsPrefixInput: string;
```

- *Type:* string

---

##### `isOpenIdConnectAuthEnabledInput`<sup>Optional</sup> <a name="isOpenIdConnectAuthEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabledInput"></a>

```typescript
public readonly isOpenIdConnectAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `requiredClaimsInput`<sup>Optional</sup> <a name="requiredClaimsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.requiredClaimsInput"></a>

```typescript
public readonly requiredClaimsInput: IResolvable | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]

---

##### `signingAlgorithmsInput`<sup>Optional</sup> <a name="signingAlgorithmsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithmsInput"></a>

```typescript
public readonly signingAlgorithmsInput: string[];
```

- *Type:* string[]

---

##### `usernameClaimInput`<sup>Optional</sup> <a name="usernameClaimInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaimInput"></a>

```typescript
public readonly usernameClaimInput: string;
```

- *Type:* string

---

##### `usernamePrefixInput`<sup>Optional</sup> <a name="usernamePrefixInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefixInput"></a>

```typescript
public readonly usernamePrefixInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `groupsPrefix`<sup>Required</sup> <a name="groupsPrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

---

##### `isOpenIdConnectAuthEnabled`<sup>Required</sup> <a name="isOpenIdConnectAuthEnabled" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.isOpenIdConnectAuthEnabled"></a>

```typescript
public readonly isOpenIdConnectAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `signingAlgorithms`<sup>Required</sup> <a name="signingAlgorithms" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.signingAlgorithms"></a>

```typescript
public readonly signingAlgorithms: string[];
```

- *Type:* string[]

---

##### `usernameClaim`<sup>Required</sup> <a name="usernameClaim" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

---

##### `usernamePrefix`<sup>Required</sup> <a name="usernamePrefix" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get"></a>

```typescript
public get(index: number): ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>[]

---


### ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference <a name="ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigRequiredClaims</a>

---


### ContainerengineClusterOptionsOutputReference <a name="ContainerengineClusterOptionsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns">putAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions">putAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig">putKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery">putOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig">putOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig">putPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig">putServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns">resetAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions">resetAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig">resetKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery">resetOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig">resetOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig">resetPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig">resetServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds">resetServiceLbSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddOns` <a name="putAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns"></a>

```typescript
public putAddOns(value: ContainerengineClusterOptionsAddOns): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAddOns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---

##### `putAdmissionControllerOptions` <a name="putAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions"></a>

```typescript
public putAdmissionControllerOptions(value: ContainerengineClusterOptionsAdmissionControllerOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putAdmissionControllerOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---

##### `putKubernetesNetworkConfig` <a name="putKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig"></a>

```typescript
public putKubernetesNetworkConfig(value: ContainerengineClusterOptionsKubernetesNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putKubernetesNetworkConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---

##### `putOpenIdConnectDiscovery` <a name="putOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery"></a>

```typescript
public putOpenIdConnectDiscovery(value: ContainerengineClusterOptionsOpenIdConnectDiscovery): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectDiscovery.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---

##### `putOpenIdConnectTokenAuthenticationConfig` <a name="putOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig"></a>

```typescript
public putOpenIdConnectTokenAuthenticationConfig(value: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putOpenIdConnectTokenAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---

##### `putPersistentVolumeConfig` <a name="putPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig"></a>

```typescript
public putPersistentVolumeConfig(value: ContainerengineClusterOptionsPersistentVolumeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putPersistentVolumeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---

##### `putServiceLbConfig` <a name="putServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig"></a>

```typescript
public putServiceLbConfig(value: ContainerengineClusterOptionsServiceLbConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.putServiceLbConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---

##### `resetAddOns` <a name="resetAddOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAddOns"></a>

```typescript
public resetAddOns(): void
```

##### `resetAdmissionControllerOptions` <a name="resetAdmissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetAdmissionControllerOptions"></a>

```typescript
public resetAdmissionControllerOptions(): void
```

##### `resetKubernetesNetworkConfig` <a name="resetKubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetKubernetesNetworkConfig"></a>

```typescript
public resetKubernetesNetworkConfig(): void
```

##### `resetOpenIdConnectDiscovery` <a name="resetOpenIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectDiscovery"></a>

```typescript
public resetOpenIdConnectDiscovery(): void
```

##### `resetOpenIdConnectTokenAuthenticationConfig` <a name="resetOpenIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetOpenIdConnectTokenAuthenticationConfig"></a>

```typescript
public resetOpenIdConnectTokenAuthenticationConfig(): void
```

##### `resetPersistentVolumeConfig` <a name="resetPersistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetPersistentVolumeConfig"></a>

```typescript
public resetPersistentVolumeConfig(): void
```

##### `resetServiceLbConfig` <a name="resetServiceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbConfig"></a>

```typescript
public resetServiceLbConfig(): void
```

##### `resetServiceLbSubnetIds` <a name="resetServiceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.resetServiceLbSubnetIds"></a>

```typescript
public resetServiceLbSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns">addOns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions">admissionControllerOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig">kubernetesNetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery">openIdConnectDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig">openIdConnectTokenAuthenticationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig">persistentVolumeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig">serviceLbConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput">addOnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput">admissionControllerOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput">kubernetesNetworkConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput">openIdConnectDiscoveryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput">openIdConnectTokenAuthenticationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput">persistentVolumeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput">serviceLbConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput">serviceLbSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds">serviceLbSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addOns`<sup>Required</sup> <a name="addOns" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOns"></a>

```typescript
public readonly addOns: ContainerengineClusterOptionsAddOnsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOnsOutputReference">ContainerengineClusterOptionsAddOnsOutputReference</a>

---

##### `admissionControllerOptions`<sup>Required</sup> <a name="admissionControllerOptions" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptions"></a>

```typescript
public readonly admissionControllerOptions: ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference">ContainerengineClusterOptionsAdmissionControllerOptionsOutputReference</a>

---

##### `kubernetesNetworkConfig`<sup>Required</sup> <a name="kubernetesNetworkConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfig"></a>

```typescript
public readonly kubernetesNetworkConfig: ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference">ContainerengineClusterOptionsKubernetesNetworkConfigOutputReference</a>

---

##### `openIdConnectDiscovery`<sup>Required</sup> <a name="openIdConnectDiscovery" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscovery"></a>

```typescript
public readonly openIdConnectDiscovery: ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference">ContainerengineClusterOptionsOpenIdConnectDiscoveryOutputReference</a>

---

##### `openIdConnectTokenAuthenticationConfig`<sup>Required</sup> <a name="openIdConnectTokenAuthenticationConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfig"></a>

```typescript
public readonly openIdConnectTokenAuthenticationConfig: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfigOutputReference</a>

---

##### `persistentVolumeConfig`<sup>Required</sup> <a name="persistentVolumeConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfig"></a>

```typescript
public readonly persistentVolumeConfig: ContainerengineClusterOptionsPersistentVolumeConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference">ContainerengineClusterOptionsPersistentVolumeConfigOutputReference</a>

---

##### `serviceLbConfig`<sup>Required</sup> <a name="serviceLbConfig" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfig"></a>

```typescript
public readonly serviceLbConfig: ContainerengineClusterOptionsServiceLbConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference">ContainerengineClusterOptionsServiceLbConfigOutputReference</a>

---

##### `addOnsInput`<sup>Optional</sup> <a name="addOnsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.addOnsInput"></a>

```typescript
public readonly addOnsInput: ContainerengineClusterOptionsAddOns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAddOns">ContainerengineClusterOptionsAddOns</a>

---

##### `admissionControllerOptionsInput`<sup>Optional</sup> <a name="admissionControllerOptionsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.admissionControllerOptionsInput"></a>

```typescript
public readonly admissionControllerOptionsInput: ContainerengineClusterOptionsAdmissionControllerOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsAdmissionControllerOptions">ContainerengineClusterOptionsAdmissionControllerOptions</a>

---

##### `kubernetesNetworkConfigInput`<sup>Optional</sup> <a name="kubernetesNetworkConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.kubernetesNetworkConfigInput"></a>

```typescript
public readonly kubernetesNetworkConfigInput: ContainerengineClusterOptionsKubernetesNetworkConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsKubernetesNetworkConfig">ContainerengineClusterOptionsKubernetesNetworkConfig</a>

---

##### `openIdConnectDiscoveryInput`<sup>Optional</sup> <a name="openIdConnectDiscoveryInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectDiscoveryInput"></a>

```typescript
public readonly openIdConnectDiscoveryInput: ContainerengineClusterOptionsOpenIdConnectDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectDiscovery">ContainerengineClusterOptionsOpenIdConnectDiscovery</a>

---

##### `openIdConnectTokenAuthenticationConfigInput`<sup>Optional</sup> <a name="openIdConnectTokenAuthenticationConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.openIdConnectTokenAuthenticationConfigInput"></a>

```typescript
public readonly openIdConnectTokenAuthenticationConfigInput: ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig">ContainerengineClusterOptionsOpenIdConnectTokenAuthenticationConfig</a>

---

##### `persistentVolumeConfigInput`<sup>Optional</sup> <a name="persistentVolumeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.persistentVolumeConfigInput"></a>

```typescript
public readonly persistentVolumeConfigInput: ContainerengineClusterOptionsPersistentVolumeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---

##### `serviceLbConfigInput`<sup>Optional</sup> <a name="serviceLbConfigInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbConfigInput"></a>

```typescript
public readonly serviceLbConfigInput: ContainerengineClusterOptionsServiceLbConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---

##### `serviceLbSubnetIdsInput`<sup>Optional</sup> <a name="serviceLbSubnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIdsInput"></a>

```typescript
public readonly serviceLbSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `serviceLbSubnetIds`<sup>Required</sup> <a name="serviceLbSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.serviceLbSubnetIds"></a>

```typescript
public readonly serviceLbSubnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptions">ContainerengineClusterOptions</a>

---


### ContainerengineClusterOptionsPersistentVolumeConfigOutputReference <a name="ContainerengineClusterOptionsPersistentVolumeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsPersistentVolumeConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsPersistentVolumeConfig">ContainerengineClusterOptionsPersistentVolumeConfig</a>

---


### ContainerengineClusterOptionsServiceLbConfigOutputReference <a name="ContainerengineClusterOptionsServiceLbConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerengineClusterOptionsServiceLbConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterOptionsServiceLbConfig">ContainerengineClusterOptionsServiceLbConfig</a>

---


### ContainerengineClusterTimeoutsOutputReference <a name="ContainerengineClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerengineCluster } from 'rhizo-co-terraform-provider-oci'

new containerengineCluster.ContainerengineClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerengineClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.containerengineCluster.ContainerengineClusterTimeouts">ContainerengineClusterTimeouts</a>

---



