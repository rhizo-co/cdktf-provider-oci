# `dataSafeSensitiveDataModelsSensitiveColumn` Submodule <a name="`dataSafeSensitiveDataModelsSensitiveColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSensitiveDataModelsSensitiveColumn <a name="DataSafeSensitiveDataModelsSensitiveColumn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

new dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn(scope: Construct, id: string, config: DataSafeSensitiveDataModelsSensitiveColumnConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig">DataSafeSensitiveDataModelsSensitiveColumnConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig">DataSafeSensitiveDataModelsSensitiveColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppDefinedChildColumnKeys">resetAppDefinedChildColumnKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppName">resetAppName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDbDefinedChildColumnKeys">resetDbDefinedChildColumnKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetParentColumnKeys">resetParentColumnKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetRelationType">resetRelationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSensitiveDataModelsSensitiveColumnTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

---

##### `resetAppDefinedChildColumnKeys` <a name="resetAppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppDefinedChildColumnKeys"></a>

```typescript
public resetAppDefinedChildColumnKeys(): void
```

##### `resetAppName` <a name="resetAppName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetAppName"></a>

```typescript
public resetAppName(): void
```

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDataType"></a>

```typescript
public resetDataType(): void
```

##### `resetDbDefinedChildColumnKeys` <a name="resetDbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetDbDefinedChildColumnKeys"></a>

```typescript
public resetDbDefinedChildColumnKeys(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetId"></a>

```typescript
public resetId(): void
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetObjectType"></a>

```typescript
public resetObjectType(): void
```

##### `resetParentColumnKeys` <a name="resetParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetParentColumnKeys"></a>

```typescript
public resetParentColumnKeys(): void
```

##### `resetRelationType` <a name="resetRelationType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetRelationType"></a>

```typescript
public resetRelationType(): void
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetSensitiveTypeId"></a>

```typescript
public resetSensitiveTypeId(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSensitiveDataModelsSensitiveColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSensitiveDataModelsSensitiveColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSensitiveDataModelsSensitiveColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups">columnGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues">sampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference">DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeysInput">appDefinedChildColumnKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appNameInput">appNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnNameInput">columnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataTypeInput">dataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeysInput">dbDefinedChildColumnKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectInput">objectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeysInput">parentColumnKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationTypeInput">relationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys">parentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationType">relationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnGroups`<sup>Required</sup> <a name="columnGroups" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups"></a>

```typescript
public readonly columnGroups: string[];
```

- *Type:* string[]

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount"></a>

```typescript
public readonly estimatedDataValueCount: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues"></a>

```typescript
public readonly sampleDataValues: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference">DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `appDefinedChildColumnKeysInput`<sup>Optional</sup> <a name="appDefinedChildColumnKeysInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeysInput"></a>

```typescript
public readonly appDefinedChildColumnKeysInput: string[];
```

- *Type:* string[]

---

##### `appNameInput`<sup>Optional</sup> <a name="appNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appNameInput"></a>

```typescript
public readonly appNameInput: string;
```

- *Type:* string

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string;
```

- *Type:* string

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataTypeInput"></a>

```typescript
public readonly dataTypeInput: string;
```

- *Type:* string

---

##### `dbDefinedChildColumnKeysInput`<sup>Optional</sup> <a name="dbDefinedChildColumnKeysInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeysInput"></a>

```typescript
public readonly dbDefinedChildColumnKeysInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectInput"></a>

```typescript
public readonly objectInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `parentColumnKeysInput`<sup>Optional</sup> <a name="parentColumnKeysInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeysInput"></a>

```typescript
public readonly parentColumnKeysInput: string[];
```

- *Type:* string[]

---

##### `relationTypeInput`<sup>Optional</sup> <a name="relationTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationTypeInput"></a>

```typescript
public readonly relationTypeInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput"></a>

```typescript
public readonly sensitiveDataModelIdInput: string;
```

- *Type:* string

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeIdInput"></a>

```typescript
public readonly sensitiveTypeIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSensitiveDataModelsSensitiveColumnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys"></a>

```typescript
public readonly parentColumnKeys: string[];
```

- *Type:* string[]

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSensitiveDataModelsSensitiveColumnConfig <a name="DataSafeSensitiveDataModelsSensitiveColumnConfig" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

const dataSafeSensitiveDataModelsSensitiveColumnConfig: dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.columnName">columnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.object">object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appName">appName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dataType">dataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.parentColumnKeys">parentColumnKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.relationType">relationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#column_name DataSafeSensitiveDataModelsSensitiveColumn#column_name}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object DataSafeSensitiveDataModelsSensitiveColumn#object}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#schema_name DataSafeSensitiveDataModelsSensitiveColumn#schema_name}.

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---

##### `appDefinedChildColumnKeys`<sup>Optional</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#app_defined_child_column_keys}.

---

##### `appName`<sup>Optional</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#app_name DataSafeSensitiveDataModelsSensitiveColumn#app_name}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#data_type DataSafeSensitiveDataModelsSensitiveColumn#data_type}.

---

##### `dbDefinedChildColumnKeys`<sup>Optional</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#db_defined_child_column_keys DataSafeSensitiveDataModelsSensitiveColumn#db_defined_child_column_keys}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#id DataSafeSensitiveDataModelsSensitiveColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#object_type DataSafeSensitiveDataModelsSensitiveColumn#object_type}.

---

##### `parentColumnKeys`<sup>Optional</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.parentColumnKeys"></a>

```typescript
public readonly parentColumnKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#parent_column_keys DataSafeSensitiveDataModelsSensitiveColumn#parent_column_keys}.

---

##### `relationType`<sup>Optional</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#relation_type DataSafeSensitiveDataModelsSensitiveColumn#relation_type}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#sensitive_type_id DataSafeSensitiveDataModelsSensitiveColumn#sensitive_type_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#status DataSafeSensitiveDataModelsSensitiveColumn#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSensitiveDataModelsSensitiveColumnTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#timeouts DataSafeSensitiveDataModelsSensitiveColumn#timeouts}

---

### DataSafeSensitiveDataModelsSensitiveColumnTimeouts <a name="DataSafeSensitiveDataModelsSensitiveColumnTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

const dataSafeSensitiveDataModelsSensitiveColumnTimeouts: dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#create DataSafeSensitiveDataModelsSensitiveColumn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#delete DataSafeSensitiveDataModelsSensitiveColumn#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sensitive_data_models_sensitive_column#update DataSafeSensitiveDataModelsSensitiveColumn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference <a name="DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSensitiveDataModelsSensitiveColumn } from 'rhizo-co-terraform-provider-oci'

new dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSensitiveDataModelsSensitiveColumnTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSensitiveDataModelsSensitiveColumn.DataSafeSensitiveDataModelsSensitiveColumnTimeouts">DataSafeSensitiveDataModelsSensitiveColumnTimeouts</a>

---



