# `dataSafeLibraryMaskingFormat` Submodule <a name="`dataSafeLibraryMaskingFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeLibraryMaskingFormat <a name="DataSafeLibraryMaskingFormat" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format oci_data_safe_library_masking_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat(scope: Construct, id: string, config: DataSafeLibraryMaskingFormatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig">DataSafeLibraryMaskingFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries">putFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds">resetSensitiveTypeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormatEntries` <a name="putFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries"></a>

```typescript
public putFormatEntries(value: IResolvable | DataSafeLibraryMaskingFormatFormatEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putFormatEntries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeLibraryMaskingFormatTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSensitiveTypeIds` <a name="resetSensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetSensitiveTypeIds"></a>

```typescript
public resetSensitiveTypeIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeLibraryMaskingFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeLibraryMaskingFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeLibraryMaskingFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeLibraryMaskingFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput">formatEntriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput">sensitiveTypeIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntries"></a>

```typescript
public readonly formatEntries: DataSafeLibraryMaskingFormatFormatEntriesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList">DataSafeLibraryMaskingFormatFormatEntriesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeLibraryMaskingFormatTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference">DataSafeLibraryMaskingFormatTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `formatEntriesInput`<sup>Optional</sup> <a name="formatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.formatEntriesInput"></a>

```typescript
public readonly formatEntriesInput: IResolvable | DataSafeLibraryMaskingFormatFormatEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdsInput`<sup>Optional</sup> <a name="sensitiveTypeIdsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIdsInput"></a>

```typescript
public readonly sensitiveTypeIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeLibraryMaskingFormatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sensitiveTypeIds`<sup>Required</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.sensitiveTypeIds"></a>

```typescript
public readonly sensitiveTypeIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeLibraryMaskingFormatConfig <a name="DataSafeLibraryMaskingFormatConfig" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

const dataSafeLibraryMaskingFormatConfig: dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries">formatEntries</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]</code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds">sensitiveTypeIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#compartment_id DataSafeLibraryMaskingFormat#compartment_id}.

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.formatEntries"></a>

```typescript
public readonly formatEntries: IResolvable | DataSafeLibraryMaskingFormatFormatEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#format_entries DataSafeLibraryMaskingFormat#format_entries}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#defined_tags DataSafeLibraryMaskingFormat#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#display_name DataSafeLibraryMaskingFormat#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#freeform_tags DataSafeLibraryMaskingFormat#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#id DataSafeLibraryMaskingFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitiveTypeIds`<sup>Optional</sup> <a name="sensitiveTypeIds" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.sensitiveTypeIds"></a>

```typescript
public readonly sensitiveTypeIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sensitive_type_ids DataSafeLibraryMaskingFormat#sensitive_type_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeLibraryMaskingFormatTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#timeouts DataSafeLibraryMaskingFormat#timeouts}

---

### DataSafeLibraryMaskingFormatFormatEntries <a name="DataSafeLibraryMaskingFormatFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

const dataSafeLibraryMaskingFormatFormatEntries: dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate">endDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength">endLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue">endValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber">fixedNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString">fixedString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns">groupingColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length">length</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction">postProcessingFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList">randomList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression">regularExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith">replaceWith</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate">startDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength">startLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition">startPosition</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue">startValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction">userDefinedFunction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#type DataSafeLibraryMaskingFormat#type}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#column_name DataSafeLibraryMaskingFormat#column_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#description DataSafeLibraryMaskingFormat#description}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_date DataSafeLibraryMaskingFormat#end_date}.

---

##### `endLength`<sup>Optional</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endLength"></a>

```typescript
public readonly endLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_length DataSafeLibraryMaskingFormat#end_length}.

---

##### `endValue`<sup>Optional</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.endValue"></a>

```typescript
public readonly endValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#end_value DataSafeLibraryMaskingFormat#end_value}.

---

##### `fixedNumber`<sup>Optional</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedNumber"></a>

```typescript
public readonly fixedNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_number DataSafeLibraryMaskingFormat#fixed_number}.

---

##### `fixedString`<sup>Optional</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.fixedString"></a>

```typescript
public readonly fixedString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#fixed_string DataSafeLibraryMaskingFormat#fixed_string}.

---

##### `groupingColumns`<sup>Optional</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.groupingColumns"></a>

```typescript
public readonly groupingColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#grouping_columns DataSafeLibraryMaskingFormat#grouping_columns}.

---

##### `length`<sup>Optional</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#length DataSafeLibraryMaskingFormat#length}.

---

##### `libraryMaskingFormatId`<sup>Optional</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#library_masking_format_id DataSafeLibraryMaskingFormat#library_masking_format_id}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#pattern DataSafeLibraryMaskingFormat#pattern}.

---

##### `postProcessingFunction`<sup>Optional</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.postProcessingFunction"></a>

```typescript
public readonly postProcessingFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#post_processing_function DataSafeLibraryMaskingFormat#post_processing_function}.

---

##### `randomList`<sup>Optional</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.randomList"></a>

```typescript
public readonly randomList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#random_list DataSafeLibraryMaskingFormat#random_list}.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.regularExpression"></a>

```typescript
public readonly regularExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#regular_expression DataSafeLibraryMaskingFormat#regular_expression}.

---

##### `replaceWith`<sup>Optional</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.replaceWith"></a>

```typescript
public readonly replaceWith: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#replace_with DataSafeLibraryMaskingFormat#replace_with}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#schema_name DataSafeLibraryMaskingFormat#schema_name}.

---

##### `sqlExpression`<sup>Optional</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#sql_expression DataSafeLibraryMaskingFormat#sql_expression}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_date DataSafeLibraryMaskingFormat#start_date}.

---

##### `startLength`<sup>Optional</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startLength"></a>

```typescript
public readonly startLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_length DataSafeLibraryMaskingFormat#start_length}.

---

##### `startPosition`<sup>Optional</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startPosition"></a>

```typescript
public readonly startPosition: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_position DataSafeLibraryMaskingFormat#start_position}.

---

##### `startValue`<sup>Optional</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.startValue"></a>

```typescript
public readonly startValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#start_value DataSafeLibraryMaskingFormat#start_value}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#table_name DataSafeLibraryMaskingFormat#table_name}.

---

##### `userDefinedFunction`<sup>Optional</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries.property.userDefinedFunction"></a>

```typescript
public readonly userDefinedFunction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#user_defined_function DataSafeLibraryMaskingFormat#user_defined_function}.

---

### DataSafeLibraryMaskingFormatTimeouts <a name="DataSafeLibraryMaskingFormatTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

const dataSafeLibraryMaskingFormatTimeouts: dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#create DataSafeLibraryMaskingFormat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#delete DataSafeLibraryMaskingFormat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_library_masking_format#update DataSafeLibraryMaskingFormat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeLibraryMaskingFormatFormatEntriesList <a name="DataSafeLibraryMaskingFormatFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get"></a>

```typescript
public get(index: number): DataSafeLibraryMaskingFormatFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeLibraryMaskingFormatFormatEntries[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>[]

---


### DataSafeLibraryMaskingFormatFormatEntriesOutputReference <a name="DataSafeLibraryMaskingFormatFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength">resetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue">resetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber">resetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString">resetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns">resetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId">resetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction">resetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList">resetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression">resetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith">resetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression">resetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength">resetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition">resetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue">resetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction">resetUserDefinedFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndDate` <a name="resetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetEndLength` <a name="resetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndLength"></a>

```typescript
public resetEndLength(): void
```

##### `resetEndValue` <a name="resetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetEndValue"></a>

```typescript
public resetEndValue(): void
```

##### `resetFixedNumber` <a name="resetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedNumber"></a>

```typescript
public resetFixedNumber(): void
```

##### `resetFixedString` <a name="resetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetFixedString"></a>

```typescript
public resetFixedString(): void
```

##### `resetGroupingColumns` <a name="resetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetGroupingColumns"></a>

```typescript
public resetGroupingColumns(): void
```

##### `resetLength` <a name="resetLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLength"></a>

```typescript
public resetLength(): void
```

##### `resetLibraryMaskingFormatId` <a name="resetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```typescript
public resetLibraryMaskingFormatId(): void
```

##### `resetPattern` <a name="resetPattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPattern"></a>

```typescript
public resetPattern(): void
```

##### `resetPostProcessingFunction` <a name="resetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```typescript
public resetPostProcessingFunction(): void
```

##### `resetRandomList` <a name="resetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRandomList"></a>

```typescript
public resetRandomList(): void
```

##### `resetRegularExpression` <a name="resetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetRegularExpression"></a>

```typescript
public resetRegularExpression(): void
```

##### `resetReplaceWith` <a name="resetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetReplaceWith"></a>

```typescript
public resetReplaceWith(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

##### `resetSqlExpression` <a name="resetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetSqlExpression"></a>

```typescript
public resetSqlExpression(): void
```

##### `resetStartDate` <a name="resetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetStartLength` <a name="resetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartLength"></a>

```typescript
public resetStartLength(): void
```

##### `resetStartPosition` <a name="resetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartPosition"></a>

```typescript
public resetStartPosition(): void
```

##### `resetStartValue` <a name="resetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetStartValue"></a>

```typescript
public resetStartValue(): void
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetTableName"></a>

```typescript
public resetTableName(): void
```

##### `resetUserDefinedFunction` <a name="resetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```typescript
public resetUserDefinedFunction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput">endLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput">endValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput">fixedNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput">fixedStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput">groupingColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">libraryMaskingFormatIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput">postProcessingFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput">randomListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput">regularExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput">replaceWithInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput">startLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput">startPositionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput">startValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput">userDefinedFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `endLengthInput`<sup>Optional</sup> <a name="endLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLengthInput"></a>

```typescript
public readonly endLengthInput: number;
```

- *Type:* number

---

##### `endValueInput`<sup>Optional</sup> <a name="endValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValueInput"></a>

```typescript
public readonly endValueInput: number;
```

- *Type:* number

---

##### `fixedNumberInput`<sup>Optional</sup> <a name="fixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumberInput"></a>

```typescript
public readonly fixedNumberInput: number;
```

- *Type:* number

---

##### `fixedStringInput`<sup>Optional</sup> <a name="fixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedStringInput"></a>

```typescript
public readonly fixedStringInput: string;
```

- *Type:* string

---

##### `groupingColumnsInput`<sup>Optional</sup> <a name="groupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```typescript
public readonly groupingColumnsInput: string[];
```

- *Type:* string[]

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `libraryMaskingFormatIdInput`<sup>Optional</sup> <a name="libraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```typescript
public readonly libraryMaskingFormatIdInput: string;
```

- *Type:* string

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `postProcessingFunctionInput`<sup>Optional</sup> <a name="postProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```typescript
public readonly postProcessingFunctionInput: string;
```

- *Type:* string

---

##### `randomListInput`<sup>Optional</sup> <a name="randomListInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomListInput"></a>

```typescript
public readonly randomListInput: string[];
```

- *Type:* string[]

---

##### `regularExpressionInput`<sup>Optional</sup> <a name="regularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpressionInput"></a>

```typescript
public readonly regularExpressionInput: string;
```

- *Type:* string

---

##### `replaceWithInput`<sup>Optional</sup> <a name="replaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWithInput"></a>

```typescript
public readonly replaceWithInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```typescript
public readonly sqlExpressionInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `startLengthInput`<sup>Optional</sup> <a name="startLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLengthInput"></a>

```typescript
public readonly startLengthInput: number;
```

- *Type:* number

---

##### `startPositionInput`<sup>Optional</sup> <a name="startPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPositionInput"></a>

```typescript
public readonly startPositionInput: number;
```

- *Type:* number

---

##### `startValueInput`<sup>Optional</sup> <a name="startValueInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValueInput"></a>

```typescript
public readonly startValueInput: number;
```

- *Type:* number

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userDefinedFunctionInput`<sup>Optional</sup> <a name="userDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```typescript
public readonly userDefinedFunctionInput: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endLength"></a>

```typescript
public readonly endLength: number;
```

- *Type:* number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.endValue"></a>

```typescript
public readonly endValue: number;
```

- *Type:* number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedNumber"></a>

```typescript
public readonly fixedNumber: number;
```

- *Type:* number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.fixedString"></a>

```typescript
public readonly fixedString: string;
```

- *Type:* string

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.groupingColumns"></a>

```typescript
public readonly groupingColumns: string[];
```

- *Type:* string[]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```typescript
public readonly libraryMaskingFormatId: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.postProcessingFunction"></a>

```typescript
public readonly postProcessingFunction: string;
```

- *Type:* string

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.randomList"></a>

```typescript
public readonly randomList: string[];
```

- *Type:* string[]

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.regularExpression"></a>

```typescript
public readonly regularExpression: string;
```

- *Type:* string

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.replaceWith"></a>

```typescript
public readonly replaceWith: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.sqlExpression"></a>

```typescript
public readonly sqlExpression: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startLength"></a>

```typescript
public readonly startLength: number;
```

- *Type:* number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startPosition"></a>

```typescript
public readonly startPosition: number;
```

- *Type:* number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.startValue"></a>

```typescript
public readonly startValue: number;
```

- *Type:* number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.userDefinedFunction"></a>

```typescript
public readonly userDefinedFunction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeLibraryMaskingFormatFormatEntries;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatFormatEntries">DataSafeLibraryMaskingFormatFormatEntries</a>

---


### DataSafeLibraryMaskingFormatTimeoutsOutputReference <a name="DataSafeLibraryMaskingFormatTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeLibraryMaskingFormat } from 'rhizo-co-terraform-provider-oci'

new dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeLibraryMaskingFormatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeLibraryMaskingFormat.DataSafeLibraryMaskingFormatTimeouts">DataSafeLibraryMaskingFormatTimeouts</a>

---



