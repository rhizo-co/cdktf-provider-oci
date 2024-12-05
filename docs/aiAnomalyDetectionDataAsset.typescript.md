# `aiAnomalyDetectionDataAsset` Submodule <a name="`aiAnomalyDetectionDataAsset` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDataAsset <a name="AiAnomalyDetectionDataAsset" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset oci_ai_anomaly_detection_data_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset(scope: Construct, id: string, config: AiAnomalyDetectionDataAssetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig">AiAnomalyDetectionDataAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails">putDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId">resetPrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceDetails` <a name="putDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails"></a>

```typescript
public putDataSourceDetails(value: AiAnomalyDetectionDataAssetDataSourceDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts"></a>

```typescript
public putTimeouts(value: AiAnomalyDetectionDataAssetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpointId` <a name="resetPrivateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetPrivateEndpointId"></a>

```typescript
public resetPrivateEndpointId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AiAnomalyDetectionDataAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiAnomalyDetectionDataAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiAnomalyDetectionDataAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDataAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput">dataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeouts"></a>

```typescript
public readonly timeouts: AiAnomalyDetectionDataAssetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference">AiAnomalyDetectionDataAssetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataSourceDetailsInput`<sup>Optional</sup> <a name="dataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.dataSourceDetailsInput"></a>

```typescript
public readonly dataSourceDetailsInput: AiAnomalyDetectionDataAssetDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AiAnomalyDetectionDataAssetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAsset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDataAssetConfig <a name="AiAnomalyDetectionDataAssetConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const aiAnomalyDetectionDataAssetConfig: aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#compartment_id AiAnomalyDetectionDataAsset#compartment_id}.

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.dataSourceDetails"></a>

```typescript
public readonly dataSourceDetails: AiAnomalyDetectionDataAssetDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_details AiAnomalyDetectionDataAsset#data_source_details}

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#project_id AiAnomalyDetectionDataAsset#project_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#defined_tags AiAnomalyDetectionDataAsset#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#description AiAnomalyDetectionDataAsset#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#display_name AiAnomalyDetectionDataAsset#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#freeform_tags AiAnomalyDetectionDataAsset#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#id AiAnomalyDetectionDataAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpointId`<sup>Optional</sup> <a name="privateEndpointId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#private_endpoint_id AiAnomalyDetectionDataAsset#private_endpoint_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AiAnomalyDetectionDataAssetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#timeouts AiAnomalyDetectionDataAsset#timeouts}

---

### AiAnomalyDetectionDataAssetDataSourceDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const aiAnomalyDetectionDataAssetDataSourceDetails: aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId">atpPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName">atpUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId">cwalletFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId">ewalletFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId">keyStoreFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName">measurementName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId">ojdbcFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId">tnsnamesFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId">truststoreFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails">versionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | version_specific_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId">walletPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}. |

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#data_source_type AiAnomalyDetectionDataAsset#data_source_type}.

---

##### `atpPasswordSecretId`<sup>Optional</sup> <a name="atpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpPasswordSecretId"></a>

```typescript
public readonly atpPasswordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_password_secret_id AiAnomalyDetectionDataAsset#atp_password_secret_id}.

---

##### `atpUserName`<sup>Optional</sup> <a name="atpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.atpUserName"></a>

```typescript
public readonly atpUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#atp_user_name AiAnomalyDetectionDataAsset#atp_user_name}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `cwalletFileSecretId`<sup>Optional</sup> <a name="cwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.cwalletFileSecretId"></a>

```typescript
public readonly cwalletFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#cwallet_file_secret_id AiAnomalyDetectionDataAsset#cwallet_file_secret_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `ewalletFileSecretId`<sup>Optional</sup> <a name="ewalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ewalletFileSecretId"></a>

```typescript
public readonly ewalletFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ewallet_file_secret_id AiAnomalyDetectionDataAsset#ewallet_file_secret_id}.

---

##### `keyStoreFileSecretId`<sup>Optional</sup> <a name="keyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.keyStoreFileSecretId"></a>

```typescript
public readonly keyStoreFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#key_store_file_secret_id AiAnomalyDetectionDataAsset#key_store_file_secret_id}.

---

##### `measurementName`<sup>Optional</sup> <a name="measurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.measurementName"></a>

```typescript
public readonly measurementName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#measurement_name AiAnomalyDetectionDataAsset#measurement_name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#namespace AiAnomalyDetectionDataAsset#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#object AiAnomalyDetectionDataAsset#object}.

---

##### `ojdbcFileSecretId`<sup>Optional</sup> <a name="ojdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.ojdbcFileSecretId"></a>

```typescript
public readonly ojdbcFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#ojdbc_file_secret_id AiAnomalyDetectionDataAsset#ojdbc_file_secret_id}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#password_secret_id AiAnomalyDetectionDataAsset#password_secret_id}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#table_name AiAnomalyDetectionDataAsset#table_name}.

---

##### `tnsnamesFileSecretId`<sup>Optional</sup> <a name="tnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.tnsnamesFileSecretId"></a>

```typescript
public readonly tnsnamesFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#tnsnames_file_secret_id AiAnomalyDetectionDataAsset#tnsnames_file_secret_id}.

---

##### `truststoreFileSecretId`<sup>Optional</sup> <a name="truststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.truststoreFileSecretId"></a>

```typescript
public readonly truststoreFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#truststore_file_secret_id AiAnomalyDetectionDataAsset#truststore_file_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#url AiAnomalyDetectionDataAsset#url}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#user_name AiAnomalyDetectionDataAsset#user_name}.

---

##### `versionSpecificDetails`<sup>Optional</sup> <a name="versionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.versionSpecificDetails"></a>

```typescript
public readonly versionSpecificDetails: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

version_specific_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#version_specific_details AiAnomalyDetectionDataAsset#version_specific_details}

---

##### `walletPasswordSecretId`<sup>Optional</sup> <a name="walletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails.property.walletPasswordSecretId"></a>

```typescript
public readonly walletPasswordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#wallet_password_secret_id AiAnomalyDetectionDataAsset#wallet_password_secret_id}.

---

### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const aiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails: aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion">influxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName">organizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName">retentionPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}. |

---

##### `influxVersion`<sup>Required</sup> <a name="influxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.influxVersion"></a>

```typescript
public readonly influxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#influx_version AiAnomalyDetectionDataAsset#influx_version}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#bucket AiAnomalyDetectionDataAsset#bucket}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#database_name AiAnomalyDetectionDataAsset#database_name}.

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#organization_name AiAnomalyDetectionDataAsset#organization_name}.

---

##### `retentionPolicyName`<sup>Optional</sup> <a name="retentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails.property.retentionPolicyName"></a>

```typescript
public readonly retentionPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#retention_policy_name AiAnomalyDetectionDataAsset#retention_policy_name}.

---

### AiAnomalyDetectionDataAssetTimeouts <a name="AiAnomalyDetectionDataAssetTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

const aiAnomalyDetectionDataAssetTimeouts: aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#create AiAnomalyDetectionDataAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#delete AiAnomalyDetectionDataAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_data_asset#update AiAnomalyDetectionDataAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails">putVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId">resetAtpPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName">resetAtpUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId">resetCwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId">resetEwalletFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId">resetKeyStoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName">resetMeasurementName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId">resetOjdbcFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId">resetTnsnamesFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId">resetTruststoreFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails">resetVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId">resetWalletPasswordSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersionSpecificDetails` <a name="putVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails"></a>

```typescript
public putVersionSpecificDetails(value: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.putVersionSpecificDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `resetAtpPasswordSecretId` <a name="resetAtpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpPasswordSecretId"></a>

```typescript
public resetAtpPasswordSecretId(): void
```

##### `resetAtpUserName` <a name="resetAtpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetAtpUserName"></a>

```typescript
public resetAtpUserName(): void
```

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetCwalletFileSecretId` <a name="resetCwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetCwalletFileSecretId"></a>

```typescript
public resetCwalletFileSecretId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetEwalletFileSecretId` <a name="resetEwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetEwalletFileSecretId"></a>

```typescript
public resetEwalletFileSecretId(): void
```

##### `resetKeyStoreFileSecretId` <a name="resetKeyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetKeyStoreFileSecretId"></a>

```typescript
public resetKeyStoreFileSecretId(): void
```

##### `resetMeasurementName` <a name="resetMeasurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetMeasurementName"></a>

```typescript
public resetMeasurementName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetOjdbcFileSecretId` <a name="resetOjdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetOjdbcFileSecretId"></a>

```typescript
public resetOjdbcFileSecretId(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetTnsnamesFileSecretId` <a name="resetTnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTnsnamesFileSecretId"></a>

```typescript
public resetTnsnamesFileSecretId(): void
```

##### `resetTruststoreFileSecretId` <a name="resetTruststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetTruststoreFileSecretId"></a>

```typescript
public resetTruststoreFileSecretId(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetVersionSpecificDetails` <a name="resetVersionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetVersionSpecificDetails"></a>

```typescript
public resetVersionSpecificDetails(): void
```

##### `resetWalletPasswordSecretId` <a name="resetWalletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.resetWalletPasswordSecretId"></a>

```typescript
public resetWalletPasswordSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails">versionSpecificDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput">atpPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput">atpUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput">cwalletFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput">ewalletFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput">keyStoreFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput">measurementNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput">ojdbcFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput">tnsnamesFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput">truststoreFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput">versionSpecificDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput">walletPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId">atpPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName">atpUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId">cwalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId">ewalletFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId">keyStoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName">measurementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId">ojdbcFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId">tnsnamesFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId">truststoreFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId">walletPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionSpecificDetails`<sup>Required</sup> <a name="versionSpecificDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetails"></a>

```typescript
public readonly versionSpecificDetails: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference</a>

---

##### `atpPasswordSecretIdInput`<sup>Optional</sup> <a name="atpPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretIdInput"></a>

```typescript
public readonly atpPasswordSecretIdInput: string;
```

- *Type:* string

---

##### `atpUserNameInput`<sup>Optional</sup> <a name="atpUserNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserNameInput"></a>

```typescript
public readonly atpUserNameInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cwalletFileSecretIdInput`<sup>Optional</sup> <a name="cwalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretIdInput"></a>

```typescript
public readonly cwalletFileSecretIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: string;
```

- *Type:* string

---

##### `ewalletFileSecretIdInput`<sup>Optional</sup> <a name="ewalletFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretIdInput"></a>

```typescript
public readonly ewalletFileSecretIdInput: string;
```

- *Type:* string

---

##### `keyStoreFileSecretIdInput`<sup>Optional</sup> <a name="keyStoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretIdInput"></a>

```typescript
public readonly keyStoreFileSecretIdInput: string;
```

- *Type:* string

---

##### `measurementNameInput`<sup>Optional</sup> <a name="measurementNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementNameInput"></a>

```typescript
public readonly measurementNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `ojdbcFileSecretIdInput`<sup>Optional</sup> <a name="ojdbcFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretIdInput"></a>

```typescript
public readonly ojdbcFileSecretIdInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tnsnamesFileSecretIdInput`<sup>Optional</sup> <a name="tnsnamesFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretIdInput"></a>

```typescript
public readonly tnsnamesFileSecretIdInput: string;
```

- *Type:* string

---

##### `truststoreFileSecretIdInput`<sup>Optional</sup> <a name="truststoreFileSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretIdInput"></a>

```typescript
public readonly truststoreFileSecretIdInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `versionSpecificDetailsInput`<sup>Optional</sup> <a name="versionSpecificDetailsInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.versionSpecificDetailsInput"></a>

```typescript
public readonly versionSpecificDetailsInput: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---

##### `walletPasswordSecretIdInput`<sup>Optional</sup> <a name="walletPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretIdInput"></a>

```typescript
public readonly walletPasswordSecretIdInput: string;
```

- *Type:* string

---

##### `atpPasswordSecretId`<sup>Required</sup> <a name="atpPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpPasswordSecretId"></a>

```typescript
public readonly atpPasswordSecretId: string;
```

- *Type:* string

---

##### `atpUserName`<sup>Required</sup> <a name="atpUserName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.atpUserName"></a>

```typescript
public readonly atpUserName: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cwalletFileSecretId`<sup>Required</sup> <a name="cwalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.cwalletFileSecretId"></a>

```typescript
public readonly cwalletFileSecretId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `ewalletFileSecretId`<sup>Required</sup> <a name="ewalletFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ewalletFileSecretId"></a>

```typescript
public readonly ewalletFileSecretId: string;
```

- *Type:* string

---

##### `keyStoreFileSecretId`<sup>Required</sup> <a name="keyStoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.keyStoreFileSecretId"></a>

```typescript
public readonly keyStoreFileSecretId: string;
```

- *Type:* string

---

##### `measurementName`<sup>Required</sup> <a name="measurementName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.measurementName"></a>

```typescript
public readonly measurementName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `ojdbcFileSecretId`<sup>Required</sup> <a name="ojdbcFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.ojdbcFileSecretId"></a>

```typescript
public readonly ojdbcFileSecretId: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tnsnamesFileSecretId`<sup>Required</sup> <a name="tnsnamesFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.tnsnamesFileSecretId"></a>

```typescript
public readonly tnsnamesFileSecretId: string;
```

- *Type:* string

---

##### `truststoreFileSecretId`<sup>Required</sup> <a name="truststoreFileSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.truststoreFileSecretId"></a>

```typescript
public readonly truststoreFileSecretId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `walletPasswordSecretId`<sup>Required</sup> <a name="walletPasswordSecretId" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.walletPasswordSecretId"></a>

```typescript
public readonly walletPasswordSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiAnomalyDetectionDataAssetDataSourceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetails">AiAnomalyDetectionDataAssetDataSourceDetails</a>

---


### AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference <a name="AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName">resetRetentionPolicyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetRetentionPolicyName` <a name="resetRetentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.resetRetentionPolicyName"></a>

```typescript
public resetRetentionPolicyName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput">influxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput">retentionPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion">influxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName">retentionPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `influxVersionInput`<sup>Optional</sup> <a name="influxVersionInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersionInput"></a>

```typescript
public readonly influxVersionInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `retentionPolicyNameInput`<sup>Optional</sup> <a name="retentionPolicyNameInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyNameInput"></a>

```typescript
public readonly retentionPolicyNameInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `influxVersion`<sup>Required</sup> <a name="influxVersion" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.influxVersion"></a>

```typescript
public readonly influxVersion: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `retentionPolicyName`<sup>Required</sup> <a name="retentionPolicyName" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.retentionPolicyName"></a>

```typescript
public readonly retentionPolicyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails">AiAnomalyDetectionDataAssetDataSourceDetailsVersionSpecificDetails</a>

---


### AiAnomalyDetectionDataAssetTimeoutsOutputReference <a name="AiAnomalyDetectionDataAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer"></a>

```typescript
import { aiAnomalyDetectionDataAsset } from 'rhizo-co-terraform-provider-oci'

new aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiAnomalyDetectionDataAssetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDataAsset.AiAnomalyDetectionDataAssetTimeouts">AiAnomalyDetectionDataAssetTimeouts</a>

---



