# `cloudBridgeAsset` Submodule <a name="`cloudBridgeAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAsset <a name="CloudBridgeAsset" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset oci_cloud_bridge_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAsset(scope: Construct, id: string, config: CloudBridgeAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig">CloudBridgeAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm">putVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter">putVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm">putVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds">resetAssetSourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm">resetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter">resetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm">resetVmwareVm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute"></a>

```typescript
public putCompute(value: CloudBridgeAssetCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putCompute.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudBridgeAssetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `putVm` <a name="putVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm"></a>

```typescript
public putVm(value: CloudBridgeAssetVm): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `putVmwareVcenter` <a name="putVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter"></a>

```typescript
public putVmwareVcenter(value: CloudBridgeAssetVmwareVcenter): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVcenter.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `putVmwareVm` <a name="putVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm"></a>

```typescript
public putVmwareVm(value: CloudBridgeAssetVmwareVm): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.putVmwareVm.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `resetAssetSourceIds` <a name="resetAssetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetAssetSourceIds"></a>

```typescript
public resetAssetSourceIds(): void
```

##### `resetCompute` <a name="resetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVm` <a name="resetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVm"></a>

```typescript
public resetVm(): void
```

##### `resetVmwareVcenter` <a name="resetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVcenter"></a>

```typescript
public resetVmwareVcenter(): void
```

##### `resetVmwareVm` <a name="resetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.resetVmwareVm"></a>

```typescript
public resetVmwareVm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAsset.CloudBridgeAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAsset.CloudBridgeAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAsset.CloudBridgeAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudBridgeAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBridgeAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBridgeAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput">assetSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput">assetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput">computeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput">externalAssetKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput">inventoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput">sourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput">vmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput">vmwareVcenterInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput">vmwareVmInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds">assetSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId">inventoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey">sourceKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compute`<sup>Required</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compute"></a>

```typescript
public readonly compute: CloudBridgeAssetComputeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference">CloudBridgeAssetComputeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeouts"></a>

```typescript
public readonly timeouts: CloudBridgeAssetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference">CloudBridgeAssetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vm`<sup>Required</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vm"></a>

```typescript
public readonly vm: CloudBridgeAssetVmOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference">CloudBridgeAssetVmOutputReference</a>

---

##### `vmwareVcenter`<sup>Required</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenter"></a>

```typescript
public readonly vmwareVcenter: CloudBridgeAssetVmwareVcenterOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference">CloudBridgeAssetVmwareVcenterOutputReference</a>

---

##### `vmwareVm`<sup>Required</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVm"></a>

```typescript
public readonly vmwareVm: CloudBridgeAssetVmwareVmOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference">CloudBridgeAssetVmwareVmOutputReference</a>

---

##### `assetSourceIdsInput`<sup>Optional</sup> <a name="assetSourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIdsInput"></a>

```typescript
public readonly assetSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `assetTypeInput`<sup>Optional</sup> <a name="assetTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetTypeInput"></a>

```typescript
public readonly assetTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.computeInput"></a>

```typescript
public readonly computeInput: CloudBridgeAssetCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalAssetKeyInput`<sup>Optional</sup> <a name="externalAssetKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKeyInput"></a>

```typescript
public readonly externalAssetKeyInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inventoryIdInput`<sup>Optional</sup> <a name="inventoryIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryIdInput"></a>

```typescript
public readonly inventoryIdInput: string;
```

- *Type:* string

---

##### `sourceKeyInput`<sup>Optional</sup> <a name="sourceKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKeyInput"></a>

```typescript
public readonly sourceKeyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudBridgeAssetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---

##### `vmInput`<sup>Optional</sup> <a name="vmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmInput"></a>

```typescript
public readonly vmInput: CloudBridgeAssetVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---

##### `vmwareVcenterInput`<sup>Optional</sup> <a name="vmwareVcenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVcenterInput"></a>

```typescript
public readonly vmwareVcenterInput: CloudBridgeAssetVmwareVcenter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---

##### `vmwareVmInput`<sup>Optional</sup> <a name="vmwareVmInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.vmwareVmInput"></a>

```typescript
public readonly vmwareVmInput: CloudBridgeAssetVmwareVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---

##### `assetSourceIds`<sup>Required</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetSourceIds"></a>

```typescript
public readonly assetSourceIds: string[];
```

- *Type:* string[]

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAssetCompute <a name="CloudBridgeAssetCompute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetCompute: cloudBridgeAsset.CloudBridgeAssetCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks">connectedNetworks</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount">coresCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel">cpuModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks">disks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]</code> | disks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount">disksCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware">firmware</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices">gpuDevices</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]</code> | gpu_devices block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState">guestState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion">hardwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled">isPmemEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled">isTpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics">nics</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]</code> | nics block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount">nicsCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | nvdimm_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms">nvdimms</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]</code> | nvdimms block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs">pmemInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState">powerState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp">primaryIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | scsi_controller block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}. |

---

##### `connectedNetworks`<sup>Optional</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.connectedNetworks"></a>

```typescript
public readonly connectedNetworks: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#connected_networks CloudBridgeAsset#connected_networks}.

---

##### `coresCount`<sup>Optional</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `cpuModel`<sup>Optional</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.cpuModel"></a>

```typescript
public readonly cpuModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cpu_model CloudBridgeAsset#cpu_model}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `disks`<sup>Optional</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disks"></a>

```typescript
public readonly disks: IResolvable | CloudBridgeAssetComputeDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]

disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks CloudBridgeAsset#disks}

---

##### `disksCount`<sup>Optional</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.disksCount"></a>

```typescript
public readonly disksCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#disks_count CloudBridgeAsset#disks_count}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#dns_name CloudBridgeAsset#dns_name}.

---

##### `firmware`<sup>Optional</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#firmware CloudBridgeAsset#firmware}.

---

##### `gpuDevices`<sup>Optional</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevices"></a>

```typescript
public readonly gpuDevices: IResolvable | CloudBridgeAssetComputeGpuDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]

gpu_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices CloudBridgeAsset#gpu_devices}

---

##### `gpuDevicesCount`<sup>Optional</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.gpuDevicesCount"></a>

```typescript
public readonly gpuDevicesCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#gpu_devices_count CloudBridgeAsset#gpu_devices_count}.

---

##### `guestState`<sup>Optional</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.guestState"></a>

```typescript
public readonly guestState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#guest_state CloudBridgeAsset#guest_state}.

---

##### `hardwareVersion`<sup>Optional</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hardware_version CloudBridgeAsset#hardware_version}.

---

##### `hostName`<sup>Optional</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#host_name CloudBridgeAsset#host_name}.

---

##### `isPmemEnabled`<sup>Optional</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isPmemEnabled"></a>

```typescript
public readonly isPmemEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_pmem_enabled CloudBridgeAsset#is_pmem_enabled}.

---

##### `isTpmEnabled`<sup>Optional</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.isTpmEnabled"></a>

```typescript
public readonly isTpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_tpm_enabled CloudBridgeAsset#is_tpm_enabled}.

---

##### `latencySensitivity`<sup>Optional</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#latency_sensitivity CloudBridgeAsset#latency_sensitivity}.

---

##### `memoryInMbs`<sup>Optional</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `nics`<sup>Optional</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nics"></a>

```typescript
public readonly nics: IResolvable | CloudBridgeAssetComputeNics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]

nics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics CloudBridgeAsset#nics}

---

##### `nicsCount`<sup>Optional</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nicsCount"></a>

```typescript
public readonly nicsCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nics_count CloudBridgeAsset#nics_count}.

---

##### `nvdimmController`<sup>Optional</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimmController"></a>

```typescript
public readonly nvdimmController: CloudBridgeAssetComputeNvdimmController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

nvdimm_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimm_controller CloudBridgeAsset#nvdimm_controller}

---

##### `nvdimms`<sup>Optional</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.nvdimms"></a>

```typescript
public readonly nvdimms: IResolvable | CloudBridgeAssetComputeNvdimms[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]

nvdimms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#nvdimms CloudBridgeAsset#nvdimms}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system CloudBridgeAsset#operating_system}.

---

##### `operatingSystemVersion`<sup>Optional</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#operating_system_version CloudBridgeAsset#operating_system_version}.

---

##### `pmemInMbs`<sup>Optional</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.pmemInMbs"></a>

```typescript
public readonly pmemInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#pmem_in_mbs CloudBridgeAsset#pmem_in_mbs}.

---

##### `powerState`<sup>Optional</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#power_state CloudBridgeAsset#power_state}.

---

##### `primaryIp`<sup>Optional</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#primary_ip CloudBridgeAsset#primary_ip}.

---

##### `scsiController`<sup>Optional</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.scsiController"></a>

```typescript
public readonly scsiController: CloudBridgeAssetComputeScsiController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

scsi_controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#scsi_controller CloudBridgeAsset#scsi_controller}

---

##### `storageProvisionedInMbs`<sup>Optional</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.storageProvisionedInMbs"></a>

```typescript
public readonly storageProvisionedInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#storage_provisioned_in_mbs CloudBridgeAsset#storage_provisioned_in_mbs}.

---

##### `threadsPerCoreCount`<sup>Optional</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute.property.threadsPerCoreCount"></a>

```typescript
public readonly threadsPerCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#threads_per_core_count CloudBridgeAsset#threads_per_core_count}.

---

### CloudBridgeAssetComputeDisks <a name="CloudBridgeAssetComputeDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeDisks: cloudBridgeAsset.CloudBridgeAssetComputeDisks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder">bootOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode">persistentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid">uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun">uuidLun</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}. |

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.bootOrder"></a>

```typescript
public readonly bootOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#boot_order CloudBridgeAsset#boot_order}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#location CloudBridgeAsset#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

##### `persistentMode`<sup>Optional</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.persistentMode"></a>

```typescript
public readonly persistentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#persistent_mode CloudBridgeAsset#persistent_mode}.

---

##### `sizeInMbs`<sup>Optional</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#size_in_mbs CloudBridgeAsset#size_in_mbs}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid CloudBridgeAsset#uuid}.

---

##### `uuidLun`<sup>Optional</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks.property.uuidLun"></a>

```typescript
public readonly uuidLun: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#uuid_lun CloudBridgeAsset#uuid_lun}.

---

### CloudBridgeAssetComputeGpuDevices <a name="CloudBridgeAssetComputeGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeGpuDevices: cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount">coresCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer">manufacturer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `coresCount`<sup>Optional</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cores_count CloudBridgeAsset#cores_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `manufacturer`<sup>Optional</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#manufacturer CloudBridgeAsset#manufacturer}.

---

##### `memoryInMbs`<sup>Optional</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#memory_in_mbs CloudBridgeAsset#memory_in_mbs}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

### CloudBridgeAssetComputeNics <a name="CloudBridgeAssetComputeNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeNics: cloudBridgeAsset.CloudBridgeAssetComputeNics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType">macAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName">networkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName">switchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}. |

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#ip_addresses CloudBridgeAsset#ip_addresses}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address CloudBridgeAsset#mac_address}.

---

##### `macAddressType`<sup>Optional</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.macAddressType"></a>

```typescript
public readonly macAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#mac_address_type CloudBridgeAsset#mac_address_type}.

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#network_name CloudBridgeAsset#network_name}.

---

##### `switchName`<sup>Optional</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics.property.switchName"></a>

```typescript
public readonly switchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#switch_name CloudBridgeAsset#switch_name}.

---

### CloudBridgeAssetComputeNvdimmController <a name="CloudBridgeAssetComputeNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeNvdimmController: cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber">busNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |

---

##### `busNumber`<sup>Optional</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.busNumber"></a>

```typescript
public readonly busNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#bus_number CloudBridgeAsset#bus_number}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

### CloudBridgeAssetComputeNvdimms <a name="CloudBridgeAssetComputeNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeNvdimms: cloudBridgeAsset.CloudBridgeAssetComputeNvdimms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey">controllerKey</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber">unitNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `controllerKey`<sup>Optional</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.controllerKey"></a>

```typescript
public readonly controllerKey: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#controller_key CloudBridgeAsset#controller_key}.

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetComputeScsiController <a name="CloudBridgeAssetComputeScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetComputeScsiController: cloudBridgeAsset.CloudBridgeAssetComputeScsiController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus">sharedBus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber">unitNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}. |

---

##### `label`<sup>Optional</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#label CloudBridgeAsset#label}.

---

##### `sharedBus`<sup>Optional</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.sharedBus"></a>

```typescript
public readonly sharedBus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#shared_bus CloudBridgeAsset#shared_bus}.

---

##### `unitNumber`<sup>Optional</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#unit_number CloudBridgeAsset#unit_number}.

---

### CloudBridgeAssetConfig <a name="CloudBridgeAssetConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetConfig: cloudBridgeAsset.CloudBridgeAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType">assetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey">externalAssetKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId">inventoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey">sourceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds">assetSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute">compute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | compute block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm">vm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | vm block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter">vmwareVcenter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | vmware_vcenter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm">vmwareVm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | vmware_vm block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_type CloudBridgeAsset#asset_type}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compartment_id CloudBridgeAsset#compartment_id}.

---

##### `externalAssetKey`<sup>Required</sup> <a name="externalAssetKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.externalAssetKey"></a>

```typescript
public readonly externalAssetKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#external_asset_key CloudBridgeAsset#external_asset_key}.

---

##### `inventoryId`<sup>Required</sup> <a name="inventoryId" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.inventoryId"></a>

```typescript
public readonly inventoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#inventory_id CloudBridgeAsset#inventory_id}.

---

##### `sourceKey`<sup>Required</sup> <a name="sourceKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.sourceKey"></a>

```typescript
public readonly sourceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#source_key CloudBridgeAsset#source_key}.

---

##### `assetSourceIds`<sup>Optional</sup> <a name="assetSourceIds" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.assetSourceIds"></a>

```typescript
public readonly assetSourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#asset_source_ids CloudBridgeAsset#asset_source_ids}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.compute"></a>

```typescript
public readonly compute: CloudBridgeAssetCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#compute CloudBridgeAsset#compute}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#defined_tags CloudBridgeAsset#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#display_name CloudBridgeAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#freeform_tags CloudBridgeAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#id CloudBridgeAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudBridgeAssetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#timeouts CloudBridgeAsset#timeouts}

---

##### `vm`<sup>Optional</sup> <a name="vm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vm"></a>

```typescript
public readonly vm: CloudBridgeAssetVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vm CloudBridgeAsset#vm}

---

##### `vmwareVcenter`<sup>Optional</sup> <a name="vmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVcenter"></a>

```typescript
public readonly vmwareVcenter: CloudBridgeAssetVmwareVcenter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

vmware_vcenter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vcenter CloudBridgeAsset#vmware_vcenter}

---

##### `vmwareVm`<sup>Optional</sup> <a name="vmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetConfig.property.vmwareVm"></a>

```typescript
public readonly vmwareVm: CloudBridgeAssetVmwareVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

vmware_vm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_vm CloudBridgeAsset#vmware_vm}

---

### CloudBridgeAssetTimeouts <a name="CloudBridgeAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetTimeouts: cloudBridgeAsset.CloudBridgeAssetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#create CloudBridgeAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#delete CloudBridgeAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#update CloudBridgeAsset#update}.

---

### CloudBridgeAssetVm <a name="CloudBridgeAssetVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetVm: cloudBridgeAsset.CloudBridgeAssetVm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost">hypervisorHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor">hypervisorVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion">hypervisorVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}. |

---

##### `hypervisorHost`<sup>Optional</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorHost"></a>

```typescript
public readonly hypervisorHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_host CloudBridgeAsset#hypervisor_host}.

---

##### `hypervisorVendor`<sup>Optional</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVendor"></a>

```typescript
public readonly hypervisorVendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_vendor CloudBridgeAsset#hypervisor_vendor}.

---

##### `hypervisorVersion`<sup>Optional</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm.property.hypervisorVersion"></a>

```typescript
public readonly hypervisorVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#hypervisor_version CloudBridgeAsset#hypervisor_version}.

---

### CloudBridgeAssetVmwareVcenter <a name="CloudBridgeAssetVmwareVcenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetVmwareVcenter: cloudBridgeAsset.CloudBridgeAssetVmwareVcenter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter">dataCenter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey">vcenterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion">vcenterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}. |

---

##### `dataCenter`<sup>Optional</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#data_center CloudBridgeAsset#data_center}.

---

##### `vcenterKey`<sup>Optional</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterKey"></a>

```typescript
public readonly vcenterKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_key CloudBridgeAsset#vcenter_key}.

---

##### `vcenterVersion`<sup>Optional</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter.property.vcenterVersion"></a>

```typescript
public readonly vcenterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vcenter_version CloudBridgeAsset#vcenter_version}.

---

### CloudBridgeAssetVmwareVm <a name="CloudBridgeAssetVmwareVm" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetVmwareVm: cloudBridgeAsset.CloudBridgeAssetVmwareVm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster">cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields">customerFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags">customerTags</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]</code> | customer_tags block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState">faultToleranceState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid">instanceUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#cluster CloudBridgeAsset#cluster}.

---

##### `customerFields`<sup>Optional</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerFields"></a>

```typescript
public readonly customerFields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_fields CloudBridgeAsset#customer_fields}.

---

##### `customerTags`<sup>Optional</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.customerTags"></a>

```typescript
public readonly customerTags: IResolvable | CloudBridgeAssetVmwareVmCustomerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]

customer_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#customer_tags CloudBridgeAsset#customer_tags}

---

##### `faultToleranceBandwidth`<sup>Optional</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceBandwidth"></a>

```typescript
public readonly faultToleranceBandwidth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_bandwidth CloudBridgeAsset#fault_tolerance_bandwidth}.

---

##### `faultToleranceSecondaryLatency`<sup>Optional</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceSecondaryLatency"></a>

```typescript
public readonly faultToleranceSecondaryLatency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_secondary_latency CloudBridgeAsset#fault_tolerance_secondary_latency}.

---

##### `faultToleranceState`<sup>Optional</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.faultToleranceState"></a>

```typescript
public readonly faultToleranceState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#fault_tolerance_state CloudBridgeAsset#fault_tolerance_state}.

---

##### `instanceUuid`<sup>Optional</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.instanceUuid"></a>

```typescript
public readonly instanceUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#instance_uuid CloudBridgeAsset#instance_uuid}.

---

##### `isDisksCbtEnabled`<sup>Optional</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksCbtEnabled"></a>

```typescript
public readonly isDisksCbtEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_cbt_enabled CloudBridgeAsset#is_disks_cbt_enabled}.

---

##### `isDisksUuidEnabled`<sup>Optional</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.isDisksUuidEnabled"></a>

```typescript
public readonly isDisksUuidEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#is_disks_uuid_enabled CloudBridgeAsset#is_disks_uuid_enabled}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#path CloudBridgeAsset#path}.

---

##### `vmwareToolsStatus`<sup>Optional</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm.property.vmwareToolsStatus"></a>

```typescript
public readonly vmwareToolsStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#vmware_tools_status CloudBridgeAsset#vmware_tools_status}.

---

### CloudBridgeAssetVmwareVmCustomerTags <a name="CloudBridgeAssetVmwareVmCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAssetVmwareVmCustomerTags: cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#description CloudBridgeAsset#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_asset#name CloudBridgeAsset#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAssetComputeDisksList <a name="CloudBridgeAssetComputeDisksList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeDisksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get"></a>

```typescript
public get(index: number): CloudBridgeAssetComputeDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]

---


### CloudBridgeAssetComputeDisksOutputReference <a name="CloudBridgeAssetComputeDisksOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode">resetPersistentMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs">resetSizeInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun">resetUuidLun</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootOrder` <a name="resetBootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetBootOrder"></a>

```typescript
public resetBootOrder(): void
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPersistentMode` <a name="resetPersistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetPersistentMode"></a>

```typescript
public resetPersistentMode(): void
```

##### `resetSizeInMbs` <a name="resetSizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetSizeInMbs"></a>

```typescript
public resetSizeInMbs(): void
```

##### `resetUuid` <a name="resetUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```

##### `resetUuidLun` <a name="resetUuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.resetUuidLun"></a>

```typescript
public resetUuidLun(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput">bootOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput">persistentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput">sizeInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput">uuidLunInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder">bootOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode">persistentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs">sizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun">uuidLun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrderInput"></a>

```typescript
public readonly bootOrderInput: number;
```

- *Type:* number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `persistentModeInput`<sup>Optional</sup> <a name="persistentModeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentModeInput"></a>

```typescript
public readonly persistentModeInput: string;
```

- *Type:* string

---

##### `sizeInMbsInput`<sup>Optional</sup> <a name="sizeInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbsInput"></a>

```typescript
public readonly sizeInMbsInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `uuidLunInput`<sup>Optional</sup> <a name="uuidLunInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLunInput"></a>

```typescript
public readonly uuidLunInput: string;
```

- *Type:* string

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.bootOrder"></a>

```typescript
public readonly bootOrder: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `persistentMode`<sup>Required</sup> <a name="persistentMode" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.persistentMode"></a>

```typescript
public readonly persistentMode: string;
```

- *Type:* string

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.sizeInMbs"></a>

```typescript
public readonly sizeInMbs: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `uuidLun`<sup>Required</sup> <a name="uuidLun" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.uuidLun"></a>

```typescript
public readonly uuidLun: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeDisks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>

---


### CloudBridgeAssetComputeGpuDevicesList <a name="CloudBridgeAssetComputeGpuDevicesList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get"></a>

```typescript
public get(index: number): CloudBridgeAssetComputeGpuDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeGpuDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]

---


### CloudBridgeAssetComputeGpuDevicesOutputReference <a name="CloudBridgeAssetComputeGpuDevicesOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount">resetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer">resetManufacturer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs">resetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoresCount` <a name="resetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetCoresCount"></a>

```typescript
public resetCoresCount(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetManufacturer` <a name="resetManufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetManufacturer"></a>

```typescript
public resetManufacturer(): void
```

##### `resetMemoryInMbs` <a name="resetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetMemoryInMbs"></a>

```typescript
public resetMemoryInMbs(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput">coresCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput">manufacturerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput">memoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer">manufacturer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coresCountInput`<sup>Optional</sup> <a name="coresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCountInput"></a>

```typescript
public readonly coresCountInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `manufacturerInput`<sup>Optional</sup> <a name="manufacturerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturerInput"></a>

```typescript
public readonly manufacturerInput: string;
```

- *Type:* string

---

##### `memoryInMbsInput`<sup>Optional</sup> <a name="memoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbsInput"></a>

```typescript
public readonly memoryInMbsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `manufacturer`<sup>Required</sup> <a name="manufacturer" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.manufacturer"></a>

```typescript
public readonly manufacturer: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeGpuDevices;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>

---


### CloudBridgeAssetComputeNicsList <a name="CloudBridgeAssetComputeNicsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeNicsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get"></a>

```typescript
public get(index: number): CloudBridgeAssetComputeNicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeNics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]

---


### CloudBridgeAssetComputeNicsOutputReference <a name="CloudBridgeAssetComputeNicsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType">resetMacAddressType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName">resetSwitchName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddresses` <a name="resetIpAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetMacAddressType` <a name="resetMacAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetMacAddressType"></a>

```typescript
public resetMacAddressType(): void
```

##### `resetNetworkName` <a name="resetNetworkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetNetworkName"></a>

```typescript
public resetNetworkName(): void
```

##### `resetSwitchName` <a name="resetSwitchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.resetSwitchName"></a>

```typescript
public resetSwitchName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput">macAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput">switchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType">macAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName">switchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `macAddressTypeInput`<sup>Optional</sup> <a name="macAddressTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressTypeInput"></a>

```typescript
public readonly macAddressTypeInput: string;
```

- *Type:* string

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `switchNameInput`<sup>Optional</sup> <a name="switchNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchNameInput"></a>

```typescript
public readonly switchNameInput: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `macAddressType`<sup>Required</sup> <a name="macAddressType" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.macAddressType"></a>

```typescript
public readonly macAddressType: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `switchName`<sup>Required</sup> <a name="switchName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.switchName"></a>

```typescript
public readonly switchName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeNics;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>

---


### CloudBridgeAssetComputeNvdimmControllerOutputReference <a name="CloudBridgeAssetComputeNvdimmControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber">resetBusNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel">resetLabel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBusNumber` <a name="resetBusNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetBusNumber"></a>

```typescript
public resetBusNumber(): void
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput">busNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber">busNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `busNumberInput`<sup>Optional</sup> <a name="busNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumberInput"></a>

```typescript
public readonly busNumberInput: number;
```

- *Type:* number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `busNumber`<sup>Required</sup> <a name="busNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.busNumber"></a>

```typescript
public readonly busNumber: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetComputeNvdimmController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---


### CloudBridgeAssetComputeNvdimmsList <a name="CloudBridgeAssetComputeNvdimmsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get"></a>

```typescript
public get(index: number): CloudBridgeAssetComputeNvdimmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeNvdimms[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]

---


### CloudBridgeAssetComputeNvdimmsOutputReference <a name="CloudBridgeAssetComputeNvdimmsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey">resetControllerKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetControllerKey` <a name="resetControllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetControllerKey"></a>

```typescript
public resetControllerKey(): void
```

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.resetUnitNumber"></a>

```typescript
public resetUnitNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput">controllerKeyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey">controllerKey</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controllerKeyInput`<sup>Optional</sup> <a name="controllerKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKeyInput"></a>

```typescript
public readonly controllerKeyInput: number;
```

- *Type:* number

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumberInput"></a>

```typescript
public readonly unitNumberInput: number;
```

- *Type:* number

---

##### `controllerKey`<sup>Required</sup> <a name="controllerKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.controllerKey"></a>

```typescript
public readonly controllerKey: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetComputeNvdimms;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>

---


### CloudBridgeAssetComputeOutputReference <a name="CloudBridgeAssetComputeOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks">putDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices">putGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics">putNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController">putNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms">putNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController">putScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks">resetConnectedNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount">resetCoresCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel">resetCpuModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks">resetDisks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount">resetDisksCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware">resetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices">resetGpuDevices</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount">resetGpuDevicesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState">resetGuestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion">resetHardwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName">resetHostName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled">resetIsPmemEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled">resetIsTpmEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity">resetLatencySensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs">resetMemoryInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics">resetNics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount">resetNicsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController">resetNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms">resetNvdimms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion">resetOperatingSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs">resetPmemInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState">resetPowerState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp">resetPrimaryIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController">resetScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs">resetStorageProvisionedInMbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount">resetThreadsPerCoreCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDisks` <a name="putDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks"></a>

```typescript
public putDisks(value: IResolvable | CloudBridgeAssetComputeDisks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putDisks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]

---

##### `putGpuDevices` <a name="putGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices"></a>

```typescript
public putGpuDevices(value: IResolvable | CloudBridgeAssetComputeGpuDevices[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putGpuDevices.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]

---

##### `putNics` <a name="putNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics"></a>

```typescript
public putNics(value: IResolvable | CloudBridgeAssetComputeNics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]

---

##### `putNvdimmController` <a name="putNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController"></a>

```typescript
public putNvdimmController(value: CloudBridgeAssetComputeNvdimmController): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimmController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `putNvdimms` <a name="putNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms"></a>

```typescript
public putNvdimms(value: IResolvable | CloudBridgeAssetComputeNvdimms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putNvdimms.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]

---

##### `putScsiController` <a name="putScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController"></a>

```typescript
public putScsiController(value: CloudBridgeAssetComputeScsiController): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.putScsiController.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `resetConnectedNetworks` <a name="resetConnectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetConnectedNetworks"></a>

```typescript
public resetConnectedNetworks(): void
```

##### `resetCoresCount` <a name="resetCoresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCoresCount"></a>

```typescript
public resetCoresCount(): void
```

##### `resetCpuModel` <a name="resetCpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetCpuModel"></a>

```typescript
public resetCpuModel(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisks` <a name="resetDisks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisks"></a>

```typescript
public resetDisks(): void
```

##### `resetDisksCount` <a name="resetDisksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDisksCount"></a>

```typescript
public resetDisksCount(): void
```

##### `resetDnsName` <a name="resetDnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetFirmware` <a name="resetFirmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetFirmware"></a>

```typescript
public resetFirmware(): void
```

##### `resetGpuDevices` <a name="resetGpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevices"></a>

```typescript
public resetGpuDevices(): void
```

##### `resetGpuDevicesCount` <a name="resetGpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGpuDevicesCount"></a>

```typescript
public resetGpuDevicesCount(): void
```

##### `resetGuestState` <a name="resetGuestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetGuestState"></a>

```typescript
public resetGuestState(): void
```

##### `resetHardwareVersion` <a name="resetHardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHardwareVersion"></a>

```typescript
public resetHardwareVersion(): void
```

##### `resetHostName` <a name="resetHostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetHostName"></a>

```typescript
public resetHostName(): void
```

##### `resetIsPmemEnabled` <a name="resetIsPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsPmemEnabled"></a>

```typescript
public resetIsPmemEnabled(): void
```

##### `resetIsTpmEnabled` <a name="resetIsTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetIsTpmEnabled"></a>

```typescript
public resetIsTpmEnabled(): void
```

##### `resetLatencySensitivity` <a name="resetLatencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetLatencySensitivity"></a>

```typescript
public resetLatencySensitivity(): void
```

##### `resetMemoryInMbs` <a name="resetMemoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetMemoryInMbs"></a>

```typescript
public resetMemoryInMbs(): void
```

##### `resetNics` <a name="resetNics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNics"></a>

```typescript
public resetNics(): void
```

##### `resetNicsCount` <a name="resetNicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNicsCount"></a>

```typescript
public resetNicsCount(): void
```

##### `resetNvdimmController` <a name="resetNvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimmController"></a>

```typescript
public resetNvdimmController(): void
```

##### `resetNvdimms` <a name="resetNvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetNvdimms"></a>

```typescript
public resetNvdimms(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetOperatingSystemVersion` <a name="resetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetOperatingSystemVersion"></a>

```typescript
public resetOperatingSystemVersion(): void
```

##### `resetPmemInMbs` <a name="resetPmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPmemInMbs"></a>

```typescript
public resetPmemInMbs(): void
```

##### `resetPowerState` <a name="resetPowerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPowerState"></a>

```typescript
public resetPowerState(): void
```

##### `resetPrimaryIp` <a name="resetPrimaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetPrimaryIp"></a>

```typescript
public resetPrimaryIp(): void
```

##### `resetScsiController` <a name="resetScsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetScsiController"></a>

```typescript
public resetScsiController(): void
```

##### `resetStorageProvisionedInMbs` <a name="resetStorageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetStorageProvisionedInMbs"></a>

```typescript
public resetStorageProvisionedInMbs(): void
```

##### `resetThreadsPerCoreCount` <a name="resetThreadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.resetThreadsPerCoreCount"></a>

```typescript
public resetThreadsPerCoreCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks">disks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices">gpuDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics">nics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController">nvdimmController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms">nvdimms</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController">scsiController</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput">connectedNetworksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput">coresCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput">cpuModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput">disksCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput">disksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput">firmwareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput">gpuDevicesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput">gpuDevicesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput">guestStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput">hardwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput">isPmemEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput">isTpmEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput">latencySensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput">memoryInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput">nicsCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput">nicsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput">nvdimmControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput">nvdimmsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput">operatingSystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput">pmemInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput">powerStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput">primaryIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput">scsiControllerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput">storageProvisionedInMbsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput">threadsPerCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks">connectedNetworks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel">cpuModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount">disksCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware">firmware</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount">gpuDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState">guestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion">hardwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled">isPmemEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled">isTpmEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity">latencySensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs">memoryInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount">nicsCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion">operatingSystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs">pmemInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp">primaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs">storageProvisionedInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount">threadsPerCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disks`<sup>Required</sup> <a name="disks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disks"></a>

```typescript
public readonly disks: CloudBridgeAssetComputeDisksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisksList">CloudBridgeAssetComputeDisksList</a>

---

##### `gpuDevices`<sup>Required</sup> <a name="gpuDevices" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevices"></a>

```typescript
public readonly gpuDevices: CloudBridgeAssetComputeGpuDevicesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevicesList">CloudBridgeAssetComputeGpuDevicesList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nics"></a>

```typescript
public readonly nics: CloudBridgeAssetComputeNicsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNicsList">CloudBridgeAssetComputeNicsList</a>

---

##### `nvdimmController`<sup>Required</sup> <a name="nvdimmController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmController"></a>

```typescript
public readonly nvdimmController: CloudBridgeAssetComputeNvdimmControllerOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmControllerOutputReference">CloudBridgeAssetComputeNvdimmControllerOutputReference</a>

---

##### `nvdimms`<sup>Required</sup> <a name="nvdimms" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimms"></a>

```typescript
public readonly nvdimms: CloudBridgeAssetComputeNvdimmsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmsList">CloudBridgeAssetComputeNvdimmsList</a>

---

##### `scsiController`<sup>Required</sup> <a name="scsiController" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiController"></a>

```typescript
public readonly scsiController: CloudBridgeAssetComputeScsiControllerOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference">CloudBridgeAssetComputeScsiControllerOutputReference</a>

---

##### `connectedNetworksInput`<sup>Optional</sup> <a name="connectedNetworksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworksInput"></a>

```typescript
public readonly connectedNetworksInput: number;
```

- *Type:* number

---

##### `coresCountInput`<sup>Optional</sup> <a name="coresCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCountInput"></a>

```typescript
public readonly coresCountInput: number;
```

- *Type:* number

---

##### `cpuModelInput`<sup>Optional</sup> <a name="cpuModelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModelInput"></a>

```typescript
public readonly cpuModelInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disksCountInput`<sup>Optional</sup> <a name="disksCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCountInput"></a>

```typescript
public readonly disksCountInput: number;
```

- *Type:* number

---

##### `disksInput`<sup>Optional</sup> <a name="disksInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksInput"></a>

```typescript
public readonly disksInput: IResolvable | CloudBridgeAssetComputeDisks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeDisks">CloudBridgeAssetComputeDisks</a>[]

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `firmwareInput`<sup>Optional</sup> <a name="firmwareInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmwareInput"></a>

```typescript
public readonly firmwareInput: string;
```

- *Type:* string

---

##### `gpuDevicesCountInput`<sup>Optional</sup> <a name="gpuDevicesCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCountInput"></a>

```typescript
public readonly gpuDevicesCountInput: number;
```

- *Type:* number

---

##### `gpuDevicesInput`<sup>Optional</sup> <a name="gpuDevicesInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesInput"></a>

```typescript
public readonly gpuDevicesInput: IResolvable | CloudBridgeAssetComputeGpuDevices[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeGpuDevices">CloudBridgeAssetComputeGpuDevices</a>[]

---

##### `guestStateInput`<sup>Optional</sup> <a name="guestStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestStateInput"></a>

```typescript
public readonly guestStateInput: string;
```

- *Type:* string

---

##### `hardwareVersionInput`<sup>Optional</sup> <a name="hardwareVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersionInput"></a>

```typescript
public readonly hardwareVersionInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `isPmemEnabledInput`<sup>Optional</sup> <a name="isPmemEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabledInput"></a>

```typescript
public readonly isPmemEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTpmEnabledInput`<sup>Optional</sup> <a name="isTpmEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabledInput"></a>

```typescript
public readonly isTpmEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `latencySensitivityInput`<sup>Optional</sup> <a name="latencySensitivityInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivityInput"></a>

```typescript
public readonly latencySensitivityInput: string;
```

- *Type:* string

---

##### `memoryInMbsInput`<sup>Optional</sup> <a name="memoryInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbsInput"></a>

```typescript
public readonly memoryInMbsInput: string;
```

- *Type:* string

---

##### `nicsCountInput`<sup>Optional</sup> <a name="nicsCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCountInput"></a>

```typescript
public readonly nicsCountInput: number;
```

- *Type:* number

---

##### `nicsInput`<sup>Optional</sup> <a name="nicsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsInput"></a>

```typescript
public readonly nicsInput: IResolvable | CloudBridgeAssetComputeNics[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNics">CloudBridgeAssetComputeNics</a>[]

---

##### `nvdimmControllerInput`<sup>Optional</sup> <a name="nvdimmControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmControllerInput"></a>

```typescript
public readonly nvdimmControllerInput: CloudBridgeAssetComputeNvdimmController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimmController">CloudBridgeAssetComputeNvdimmController</a>

---

##### `nvdimmsInput`<sup>Optional</sup> <a name="nvdimmsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nvdimmsInput"></a>

```typescript
public readonly nvdimmsInput: IResolvable | CloudBridgeAssetComputeNvdimms[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeNvdimms">CloudBridgeAssetComputeNvdimms</a>[]

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `operatingSystemVersionInput`<sup>Optional</sup> <a name="operatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersionInput"></a>

```typescript
public readonly operatingSystemVersionInput: string;
```

- *Type:* string

---

##### `pmemInMbsInput`<sup>Optional</sup> <a name="pmemInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbsInput"></a>

```typescript
public readonly pmemInMbsInput: string;
```

- *Type:* string

---

##### `powerStateInput`<sup>Optional</sup> <a name="powerStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerStateInput"></a>

```typescript
public readonly powerStateInput: string;
```

- *Type:* string

---

##### `primaryIpInput`<sup>Optional</sup> <a name="primaryIpInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIpInput"></a>

```typescript
public readonly primaryIpInput: string;
```

- *Type:* string

---

##### `scsiControllerInput`<sup>Optional</sup> <a name="scsiControllerInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.scsiControllerInput"></a>

```typescript
public readonly scsiControllerInput: CloudBridgeAssetComputeScsiController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---

##### `storageProvisionedInMbsInput`<sup>Optional</sup> <a name="storageProvisionedInMbsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbsInput"></a>

```typescript
public readonly storageProvisionedInMbsInput: string;
```

- *Type:* string

---

##### `threadsPerCoreCountInput`<sup>Optional</sup> <a name="threadsPerCoreCountInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCountInput"></a>

```typescript
public readonly threadsPerCoreCountInput: number;
```

- *Type:* number

---

##### `connectedNetworks`<sup>Required</sup> <a name="connectedNetworks" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.connectedNetworks"></a>

```typescript
public readonly connectedNetworks: number;
```

- *Type:* number

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuModel`<sup>Required</sup> <a name="cpuModel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.cpuModel"></a>

```typescript
public readonly cpuModel: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disksCount`<sup>Required</sup> <a name="disksCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.disksCount"></a>

```typescript
public readonly disksCount: number;
```

- *Type:* number

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `firmware`<sup>Required</sup> <a name="firmware" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.firmware"></a>

```typescript
public readonly firmware: string;
```

- *Type:* string

---

##### `gpuDevicesCount`<sup>Required</sup> <a name="gpuDevicesCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.gpuDevicesCount"></a>

```typescript
public readonly gpuDevicesCount: number;
```

- *Type:* number

---

##### `guestState`<sup>Required</sup> <a name="guestState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.guestState"></a>

```typescript
public readonly guestState: string;
```

- *Type:* string

---

##### `hardwareVersion`<sup>Required</sup> <a name="hardwareVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hardwareVersion"></a>

```typescript
public readonly hardwareVersion: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `isPmemEnabled`<sup>Required</sup> <a name="isPmemEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isPmemEnabled"></a>

```typescript
public readonly isPmemEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTpmEnabled`<sup>Required</sup> <a name="isTpmEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.isTpmEnabled"></a>

```typescript
public readonly isTpmEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `latencySensitivity`<sup>Required</sup> <a name="latencySensitivity" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.latencySensitivity"></a>

```typescript
public readonly latencySensitivity: string;
```

- *Type:* string

---

##### `memoryInMbs`<sup>Required</sup> <a name="memoryInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.memoryInMbs"></a>

```typescript
public readonly memoryInMbs: string;
```

- *Type:* string

---

##### `nicsCount`<sup>Required</sup> <a name="nicsCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.nicsCount"></a>

```typescript
public readonly nicsCount: number;
```

- *Type:* number

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `operatingSystemVersion`<sup>Required</sup> <a name="operatingSystemVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.operatingSystemVersion"></a>

```typescript
public readonly operatingSystemVersion: string;
```

- *Type:* string

---

##### `pmemInMbs`<sup>Required</sup> <a name="pmemInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.pmemInMbs"></a>

```typescript
public readonly pmemInMbs: string;
```

- *Type:* string

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

---

##### `storageProvisionedInMbs`<sup>Required</sup> <a name="storageProvisionedInMbs" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.storageProvisionedInMbs"></a>

```typescript
public readonly storageProvisionedInMbs: string;
```

- *Type:* string

---

##### `threadsPerCoreCount`<sup>Required</sup> <a name="threadsPerCoreCount" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.threadsPerCoreCount"></a>

```typescript
public readonly threadsPerCoreCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetCompute;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetCompute">CloudBridgeAssetCompute</a>

---


### CloudBridgeAssetComputeScsiControllerOutputReference <a name="CloudBridgeAssetComputeScsiControllerOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus">resetSharedBus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber">resetUnitNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabel` <a name="resetLabel" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetSharedBus` <a name="resetSharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetSharedBus"></a>

```typescript
public resetSharedBus(): void
```

##### `resetUnitNumber` <a name="resetUnitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.resetUnitNumber"></a>

```typescript
public resetUnitNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput">sharedBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput">unitNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus">sharedBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber">unitNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `sharedBusInput`<sup>Optional</sup> <a name="sharedBusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBusInput"></a>

```typescript
public readonly sharedBusInput: string;
```

- *Type:* string

---

##### `unitNumberInput`<sup>Optional</sup> <a name="unitNumberInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumberInput"></a>

```typescript
public readonly unitNumberInput: number;
```

- *Type:* number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `sharedBus`<sup>Required</sup> <a name="sharedBus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.sharedBus"></a>

```typescript
public readonly sharedBus: string;
```

- *Type:* string

---

##### `unitNumber`<sup>Required</sup> <a name="unitNumber" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.unitNumber"></a>

```typescript
public readonly unitNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetComputeScsiController;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetComputeScsiController">CloudBridgeAssetComputeScsiController</a>

---


### CloudBridgeAssetTimeoutsOutputReference <a name="CloudBridgeAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetTimeouts">CloudBridgeAssetTimeouts</a>

---


### CloudBridgeAssetVmOutputReference <a name="CloudBridgeAssetVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost">resetHypervisorHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor">resetHypervisorVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion">resetHypervisorVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHypervisorHost` <a name="resetHypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorHost"></a>

```typescript
public resetHypervisorHost(): void
```

##### `resetHypervisorVendor` <a name="resetHypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVendor"></a>

```typescript
public resetHypervisorVendor(): void
```

##### `resetHypervisorVersion` <a name="resetHypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.resetHypervisorVersion"></a>

```typescript
public resetHypervisorVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput">hypervisorHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput">hypervisorVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput">hypervisorVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost">hypervisorHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor">hypervisorVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion">hypervisorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hypervisorHostInput`<sup>Optional</sup> <a name="hypervisorHostInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHostInput"></a>

```typescript
public readonly hypervisorHostInput: string;
```

- *Type:* string

---

##### `hypervisorVendorInput`<sup>Optional</sup> <a name="hypervisorVendorInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendorInput"></a>

```typescript
public readonly hypervisorVendorInput: string;
```

- *Type:* string

---

##### `hypervisorVersionInput`<sup>Optional</sup> <a name="hypervisorVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersionInput"></a>

```typescript
public readonly hypervisorVersionInput: string;
```

- *Type:* string

---

##### `hypervisorHost`<sup>Required</sup> <a name="hypervisorHost" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorHost"></a>

```typescript
public readonly hypervisorHost: string;
```

- *Type:* string

---

##### `hypervisorVendor`<sup>Required</sup> <a name="hypervisorVendor" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVendor"></a>

```typescript
public readonly hypervisorVendor: string;
```

- *Type:* string

---

##### `hypervisorVersion`<sup>Required</sup> <a name="hypervisorVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.hypervisorVersion"></a>

```typescript
public readonly hypervisorVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVm">CloudBridgeAssetVm</a>

---


### CloudBridgeAssetVmwareVcenterOutputReference <a name="CloudBridgeAssetVmwareVcenterOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter">resetDataCenter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey">resetVcenterKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion">resetVcenterVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataCenter` <a name="resetDataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetDataCenter"></a>

```typescript
public resetDataCenter(): void
```

##### `resetVcenterKey` <a name="resetVcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterKey"></a>

```typescript
public resetVcenterKey(): void
```

##### `resetVcenterVersion` <a name="resetVcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.resetVcenterVersion"></a>

```typescript
public resetVcenterVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput">dataCenterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput">vcenterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput">vcenterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter">dataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey">vcenterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion">vcenterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCenterInput`<sup>Optional</sup> <a name="dataCenterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenterInput"></a>

```typescript
public readonly dataCenterInput: string;
```

- *Type:* string

---

##### `vcenterKeyInput`<sup>Optional</sup> <a name="vcenterKeyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKeyInput"></a>

```typescript
public readonly vcenterKeyInput: string;
```

- *Type:* string

---

##### `vcenterVersionInput`<sup>Optional</sup> <a name="vcenterVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersionInput"></a>

```typescript
public readonly vcenterVersionInput: string;
```

- *Type:* string

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.dataCenter"></a>

```typescript
public readonly dataCenter: string;
```

- *Type:* string

---

##### `vcenterKey`<sup>Required</sup> <a name="vcenterKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterKey"></a>

```typescript
public readonly vcenterKey: string;
```

- *Type:* string

---

##### `vcenterVersion`<sup>Required</sup> <a name="vcenterVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.vcenterVersion"></a>

```typescript
public readonly vcenterVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetVmwareVcenter;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVcenter">CloudBridgeAssetVmwareVcenter</a>

---


### CloudBridgeAssetVmwareVmCustomerTagsList <a name="CloudBridgeAssetVmwareVmCustomerTagsList" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get"></a>

```typescript
public get(index: number): CloudBridgeAssetVmwareVmCustomerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetVmwareVmCustomerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]

---


### CloudBridgeAssetVmwareVmCustomerTagsOutputReference <a name="CloudBridgeAssetVmwareVmCustomerTagsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAssetVmwareVmCustomerTags;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>

---


### CloudBridgeAssetVmwareVmOutputReference <a name="CloudBridgeAssetVmwareVmOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAsset } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags">putCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields">resetCustomerFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags">resetCustomerTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth">resetFaultToleranceBandwidth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency">resetFaultToleranceSecondaryLatency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState">resetFaultToleranceState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid">resetInstanceUuid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled">resetIsDisksCbtEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled">resetIsDisksUuidEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus">resetVmwareToolsStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomerTags` <a name="putCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags"></a>

```typescript
public putCustomerTags(value: IResolvable | CloudBridgeAssetVmwareVmCustomerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.putCustomerTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]

---

##### `resetCluster` <a name="resetCluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCluster"></a>

```typescript
public resetCluster(): void
```

##### `resetCustomerFields` <a name="resetCustomerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerFields"></a>

```typescript
public resetCustomerFields(): void
```

##### `resetCustomerTags` <a name="resetCustomerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetCustomerTags"></a>

```typescript
public resetCustomerTags(): void
```

##### `resetFaultToleranceBandwidth` <a name="resetFaultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceBandwidth"></a>

```typescript
public resetFaultToleranceBandwidth(): void
```

##### `resetFaultToleranceSecondaryLatency` <a name="resetFaultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceSecondaryLatency"></a>

```typescript
public resetFaultToleranceSecondaryLatency(): void
```

##### `resetFaultToleranceState` <a name="resetFaultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetFaultToleranceState"></a>

```typescript
public resetFaultToleranceState(): void
```

##### `resetInstanceUuid` <a name="resetInstanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetInstanceUuid"></a>

```typescript
public resetInstanceUuid(): void
```

##### `resetIsDisksCbtEnabled` <a name="resetIsDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksCbtEnabled"></a>

```typescript
public resetIsDisksCbtEnabled(): void
```

##### `resetIsDisksUuidEnabled` <a name="resetIsDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetIsDisksUuidEnabled"></a>

```typescript
public resetIsDisksUuidEnabled(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetVmwareToolsStatus` <a name="resetVmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.resetVmwareToolsStatus"></a>

```typescript
public resetVmwareToolsStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags">customerTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput">customerFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput">customerTagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput">faultToleranceBandwidthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput">faultToleranceSecondaryLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput">faultToleranceStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput">instanceUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput">isDisksCbtEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput">isDisksUuidEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput">vmwareToolsStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields">customerFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth">faultToleranceBandwidth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency">faultToleranceSecondaryLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState">faultToleranceState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid">instanceUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled">isDisksCbtEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled">isDisksUuidEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus">vmwareToolsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerTags`<sup>Required</sup> <a name="customerTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTags"></a>

```typescript
public readonly customerTags: CloudBridgeAssetVmwareVmCustomerTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTagsList">CloudBridgeAssetVmwareVmCustomerTagsList</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `customerFieldsInput`<sup>Optional</sup> <a name="customerFieldsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFieldsInput"></a>

```typescript
public readonly customerFieldsInput: string[];
```

- *Type:* string[]

---

##### `customerTagsInput`<sup>Optional</sup> <a name="customerTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerTagsInput"></a>

```typescript
public readonly customerTagsInput: IResolvable | CloudBridgeAssetVmwareVmCustomerTags[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmCustomerTags">CloudBridgeAssetVmwareVmCustomerTags</a>[]

---

##### `faultToleranceBandwidthInput`<sup>Optional</sup> <a name="faultToleranceBandwidthInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidthInput"></a>

```typescript
public readonly faultToleranceBandwidthInput: number;
```

- *Type:* number

---

##### `faultToleranceSecondaryLatencyInput`<sup>Optional</sup> <a name="faultToleranceSecondaryLatencyInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatencyInput"></a>

```typescript
public readonly faultToleranceSecondaryLatencyInput: number;
```

- *Type:* number

---

##### `faultToleranceStateInput`<sup>Optional</sup> <a name="faultToleranceStateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceStateInput"></a>

```typescript
public readonly faultToleranceStateInput: string;
```

- *Type:* string

---

##### `instanceUuidInput`<sup>Optional</sup> <a name="instanceUuidInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuidInput"></a>

```typescript
public readonly instanceUuidInput: string;
```

- *Type:* string

---

##### `isDisksCbtEnabledInput`<sup>Optional</sup> <a name="isDisksCbtEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabledInput"></a>

```typescript
public readonly isDisksCbtEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDisksUuidEnabledInput`<sup>Optional</sup> <a name="isDisksUuidEnabledInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabledInput"></a>

```typescript
public readonly isDisksUuidEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `vmwareToolsStatusInput`<sup>Optional</sup> <a name="vmwareToolsStatusInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatusInput"></a>

```typescript
public readonly vmwareToolsStatusInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `customerFields`<sup>Required</sup> <a name="customerFields" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.customerFields"></a>

```typescript
public readonly customerFields: string[];
```

- *Type:* string[]

---

##### `faultToleranceBandwidth`<sup>Required</sup> <a name="faultToleranceBandwidth" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceBandwidth"></a>

```typescript
public readonly faultToleranceBandwidth: number;
```

- *Type:* number

---

##### `faultToleranceSecondaryLatency`<sup>Required</sup> <a name="faultToleranceSecondaryLatency" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceSecondaryLatency"></a>

```typescript
public readonly faultToleranceSecondaryLatency: number;
```

- *Type:* number

---

##### `faultToleranceState`<sup>Required</sup> <a name="faultToleranceState" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.faultToleranceState"></a>

```typescript
public readonly faultToleranceState: string;
```

- *Type:* string

---

##### `instanceUuid`<sup>Required</sup> <a name="instanceUuid" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.instanceUuid"></a>

```typescript
public readonly instanceUuid: string;
```

- *Type:* string

---

##### `isDisksCbtEnabled`<sup>Required</sup> <a name="isDisksCbtEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksCbtEnabled"></a>

```typescript
public readonly isDisksCbtEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDisksUuidEnabled`<sup>Required</sup> <a name="isDisksUuidEnabled" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.isDisksUuidEnabled"></a>

```typescript
public readonly isDisksUuidEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `vmwareToolsStatus`<sup>Required</sup> <a name="vmwareToolsStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.vmwareToolsStatus"></a>

```typescript
public readonly vmwareToolsStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAssetVmwareVm;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAsset.CloudBridgeAssetVmwareVm">CloudBridgeAssetVmwareVm</a>

---



