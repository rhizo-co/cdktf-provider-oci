# `dataSafeAuditArchiveRetrieval` Submodule <a name="`dataSafeAuditArchiveRetrieval` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeAuditArchiveRetrieval <a name="DataSafeAuditArchiveRetrieval" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval oci_data_safe_audit_archive_retrieval}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval(scope: Construct, id: string, config: DataSafeAuditArchiveRetrievalConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig">DataSafeAuditArchiveRetrievalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig">DataSafeAuditArchiveRetrievalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts"></a>

```typescript
public putTimeouts(value: DataSafeAuditArchiveRetrievalTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeAuditArchiveRetrieval to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeAuditArchiveRetrieval that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeAuditArchiveRetrieval to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.auditEventCount">auditEventCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.errorInfo">errorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeCompleted">timeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeOfExpiry">timeOfExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference">DataSafeAuditArchiveRetrievalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeRequested">timeRequested</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditEventCount`<sup>Required</sup> <a name="auditEventCount" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.auditEventCount"></a>

```typescript
public readonly auditEventCount: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.errorInfo"></a>

```typescript
public readonly errorInfo: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeCompleted"></a>

```typescript
public readonly timeCompleted: string;
```

- *Type:* string

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeOfExpiry"></a>

```typescript
public readonly timeOfExpiry: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditArchiveRetrievalTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference">DataSafeAuditArchiveRetrievalTimeoutsOutputReference</a>

---

##### `timeRequested`<sup>Required</sup> <a name="timeRequested" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeRequested"></a>

```typescript
public readonly timeRequested: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataSafeAuditArchiveRetrievalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrieval.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeAuditArchiveRetrievalConfig <a name="DataSafeAuditArchiveRetrievalConfig" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.Initializer"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditArchiveRetrievalConfig: dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.endDate">endDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.startDate">startDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#compartment_id DataSafeAuditArchiveRetrieval#compartment_id}.

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#end_date DataSafeAuditArchiveRetrieval#end_date}.

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#start_date DataSafeAuditArchiveRetrieval#start_date}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#target_id DataSafeAuditArchiveRetrieval#target_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#defined_tags DataSafeAuditArchiveRetrieval#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#description DataSafeAuditArchiveRetrieval#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#display_name DataSafeAuditArchiveRetrieval#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#freeform_tags DataSafeAuditArchiveRetrieval#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#id DataSafeAuditArchiveRetrieval#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataSafeAuditArchiveRetrievalTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#timeouts DataSafeAuditArchiveRetrieval#timeouts}

---

### DataSafeAuditArchiveRetrievalTimeouts <a name="DataSafeAuditArchiveRetrievalTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.Initializer"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

const dataSafeAuditArchiveRetrievalTimeouts: dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#create DataSafeAuditArchiveRetrieval#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#delete DataSafeAuditArchiveRetrieval#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#update DataSafeAuditArchiveRetrieval#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#create DataSafeAuditArchiveRetrieval#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#delete DataSafeAuditArchiveRetrieval#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_audit_archive_retrieval#update DataSafeAuditArchiveRetrieval#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeAuditArchiveRetrievalTimeoutsOutputReference <a name="DataSafeAuditArchiveRetrievalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataSafeAuditArchiveRetrieval } from 'rhizo-co-terraform-provider-oci'

new dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataSafeAuditArchiveRetrievalTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataSafeAuditArchiveRetrieval.DataSafeAuditArchiveRetrievalTimeouts">DataSafeAuditArchiveRetrievalTimeouts</a>

---



