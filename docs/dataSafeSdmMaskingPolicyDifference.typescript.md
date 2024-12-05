# `dataSafeSdmMaskingPolicyDifference` Submodule <a name="`dataSafeSdmMaskingPolicyDifference` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSdmMaskingPolicyDifference <a name="DataSafeSdmMaskingPolicyDifference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

new dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference(scope: Construct, id: string, config: DataSafeSdmMaskingPolicyDifferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType">resetDifferenceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeSdmMaskingPolicyDifferenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDifferenceType` <a name="resetDifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType"></a>

```typescript
public resetDifferenceType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSdmMaskingPolicyDifference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSdmMaskingPolicyDifference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSdmMaskingPolicyDifference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted">timeCreationStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput">differenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType">differenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeCreationStarted`<sup>Required</sup> <a name="timeCreationStarted" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted"></a>

```typescript
public readonly timeCreationStarted: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differenceTypeInput`<sup>Optional</sup> <a name="differenceTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput"></a>

```typescript
public readonly differenceTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput"></a>

```typescript
public readonly maskingPolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeSdmMaskingPolicyDifferenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differenceType`<sup>Required</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSdmMaskingPolicyDifferenceConfig <a name="DataSafeSdmMaskingPolicyDifferenceConfig" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.Initializer"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

const dataSafeSdmMaskingPolicyDifferenceConfig: dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType">differenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId"></a>

```typescript
public readonly maskingPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `differenceType`<sup>Optional</sup> <a name="differenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType"></a>

```typescript
public readonly differenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeSdmMaskingPolicyDifferenceTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

### DataSafeSdmMaskingPolicyDifferenceTimeouts <a name="DataSafeSdmMaskingPolicyDifferenceTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.Initializer"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

const dataSafeSdmMaskingPolicyDifferenceTimeouts: dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference <a name="DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeSdmMaskingPolicyDifference } from 'rhizo-co-terraform-provider-oci'

new dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeSdmMaskingPolicyDifferenceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---



