# `dataSafeCalculateAuditVolumeCollected` Submodule <a name="`dataSafeCalculateAuditVolumeCollected` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeCalculateAuditVolumeCollected <a name="DataSafeCalculateAuditVolumeCollected" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected oci_data_safe_calculate_audit_volume_collected}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

new dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected(scope: Construct, id: string, config: DataSafeCalculateAuditVolumeCollectedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig">DataSafeCalculateAuditVolumeCollectedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig">DataSafeCalculateAuditVolumeCollectedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeToMonth">resetTimeToMonth</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeCalculateAuditVolumeCollectedTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeToMonth` <a name="resetTimeToMonth" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeToMonth"></a>

```typescript
public resetTimeToMonth(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeCalculateAuditVolumeCollected resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeCalculateAuditVolumeCollected resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeCalculateAuditVolumeCollected to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeCalculateAuditVolumeCollected that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeCalculateAuditVolumeCollected to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.collectedAuditVolumes">collectedAuditVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference">DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonthInput">timeFromMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonthInput">timeToMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonth">timeFromMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonth">timeToMonth</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `collectedAuditVolumes`<sup>Required</sup> <a name="collectedAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.collectedAuditVolumes"></a>

```typescript
public readonly collectedAuditVolumes: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference">DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference</a>

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileIdInput"></a>

```typescript
public readonly auditProfileIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeFromMonthInput`<sup>Optional</sup> <a name="timeFromMonthInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonthInput"></a>

```typescript
public readonly timeFromMonthInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeCalculateAuditVolumeCollectedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

---

##### `timeToMonthInput`<sup>Optional</sup> <a name="timeToMonthInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonthInput"></a>

```typescript
public readonly timeToMonthInput: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeFromMonth`<sup>Required</sup> <a name="timeFromMonth" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonth"></a>

```typescript
public readonly timeFromMonth: string;
```

- *Type:* string

---

##### `timeToMonth`<sup>Required</sup> <a name="timeToMonth" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonth"></a>

```typescript
public readonly timeToMonth: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

const dataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes: dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes = { ... }
```


### DataSafeCalculateAuditVolumeCollectedConfig <a name="DataSafeCalculateAuditVolumeCollectedConfig" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

const dataSafeCalculateAuditVolumeCollectedConfig: dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeFromMonth">timeFromMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeToMonth">timeToMonth</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}.

---

##### `timeFromMonth`<sup>Required</sup> <a name="timeFromMonth" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeFromMonth"></a>

```typescript
public readonly timeFromMonth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeCalculateAuditVolumeCollectedTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#timeouts DataSafeCalculateAuditVolumeCollected#timeouts}

---

##### `timeToMonth`<sup>Optional</sup> <a name="timeToMonth" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeToMonth"></a>

```typescript
public readonly timeToMonth: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}.

---

### DataSafeCalculateAuditVolumeCollectedTimeouts <a name="DataSafeCalculateAuditVolumeCollectedTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

const dataSafeCalculateAuditVolumeCollectedTimeouts: dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

new dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get"></a>

```typescript
public get(index: number): DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

new dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.archivedVolume">archivedVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.onlineVolume">onlineVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archivedVolume`<sup>Required</sup> <a name="archivedVolume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.archivedVolume"></a>

```typescript
public readonly archivedVolume: string;
```

- *Type:* string

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.auditProfileId"></a>

```typescript
public readonly auditProfileId: string;
```

- *Type:* string

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.monthInConsideration"></a>

```typescript
public readonly monthInConsideration: string;
```

- *Type:* string

---

##### `onlineVolume`<sup>Required</sup> <a name="onlineVolume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.onlineVolume"></a>

```typescript
public readonly onlineVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes</a>

---


### DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference <a name="DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeCalculateAuditVolumeCollected } from 'rhizo-co-terraform-provider-oci'

new dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeCalculateAuditVolumeCollectedTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

---



