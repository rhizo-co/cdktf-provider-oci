# `dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule <a name="`dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns oci_data_safe_masking_policies_apply_difference_to_masking_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

new dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns(scope: Construct, id: string, config: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput">sdmMaskingPolicyDifferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `sdmMaskingPolicyDifferenceIdInput`<sup>Optional</sup> <a name="sdmMaskingPolicyDifferenceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceIdInput"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.Initializer"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

const dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig: dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId">sdmMaskingPolicyDifferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#masking_policy_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#masking_policy_id}.

---

##### `sdmMaskingPolicyDifferenceId`<sup>Required</sup> <a name="sdmMaskingPolicyDifferenceId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.sdmMaskingPolicyDifferenceId"></a>

```typescript
public readonly sdmMaskingPolicyDifferenceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#sdm_masking_policy_difference_id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#sdm_masking_policy_difference_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#id DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#timeouts DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#timeouts}

---

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.Initializer"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

const dataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts: dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#create DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#delete DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_apply_difference_to_masking_columns#update DataSafeMaskingPoliciesApplyDifferenceToMaskingColumns#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference <a name="DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns } from 'rhizo-co-terraform-provider-oci'

new dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesApplyDifferenceToMaskingColumns.DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts">DataSafeMaskingPoliciesApplyDifferenceToMaskingColumnsTimeouts</a>

---



