# `databaseManagementExternalExadataStorageGrid` Submodule <a name="`databaseManagementExternalExadataStorageGrid` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataStorageGrid <a name="DatabaseManagementExternalExadataStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid oci_database_management_external_exadata_storage_grid}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid(scope: Construct, id: string, config: DatabaseManagementExternalExadataStorageGridConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig">DatabaseManagementExternalExadataStorageGridConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseManagementExternalExadataStorageGridTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataStorageGrid resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseManagementExternalExadataStorageGrid to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseManagementExternalExadataStorageGrid that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataStorageGrid to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount">serverCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers">storageServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput">externalExadataStorageGridIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId">externalExadataStorageGridId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.serverCount"></a>

```typescript
public readonly serverCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageServers`<sup>Required</sup> <a name="storageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.storageServers"></a>

```typescript
public readonly storageServers: DatabaseManagementExternalExadataStorageGridStorageServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList">DatabaseManagementExternalExadataStorageGridStorageServersList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference">DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalExadataStorageGridIdInput`<sup>Optional</sup> <a name="externalExadataStorageGridIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridIdInput"></a>

```typescript
public readonly externalExadataStorageGridIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseManagementExternalExadataStorageGridTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `externalExadataStorageGridId`<sup>Required</sup> <a name="externalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.externalExadataStorageGridId"></a>

```typescript
public readonly externalExadataStorageGridId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGrid.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataStorageGridConfig <a name="DatabaseManagementExternalExadataStorageGridConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageGridConfig: databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId">externalExadataStorageGridId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `externalExadataStorageGridId`<sup>Required</sup> <a name="externalExadataStorageGridId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.externalExadataStorageGridId"></a>

```typescript
public readonly externalExadataStorageGridId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#external_exadata_storage_grid_id DatabaseManagementExternalExadataStorageGrid#external_exadata_storage_grid_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#defined_tags DatabaseManagementExternalExadataStorageGrid#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#freeform_tags DatabaseManagementExternalExadataStorageGrid#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#id DatabaseManagementExternalExadataStorageGrid#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseManagementExternalExadataStorageGridTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#timeouts DatabaseManagementExternalExadataStorageGrid#timeouts}

---

### DatabaseManagementExternalExadataStorageGridStorageServers <a name="DatabaseManagementExternalExadataStorageGridStorageServers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageGridStorageServers: databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers = { ... }
```


### DatabaseManagementExternalExadataStorageGridTimeouts <a name="DatabaseManagementExternalExadataStorageGridTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

const databaseManagementExternalExadataStorageGridTimeouts: databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#create DatabaseManagementExternalExadataStorageGrid#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#delete DatabaseManagementExternalExadataStorageGrid#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_storage_grid#update DatabaseManagementExternalExadataStorageGrid#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataStorageGridStorageServersList <a name="DatabaseManagementExternalExadataStorageGridStorageServersList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get"></a>

```typescript
public get(index: number): DatabaseManagementExternalExadataStorageGridStorageServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseManagementExternalExadataStorageGridStorageServersOutputReference <a name="DatabaseManagementExternalExadataStorageGridStorageServersOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel">makeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops">maxFlashDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput">maxFlashDiskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops">maxHardDiskIops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput">maxHardDiskThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `makeModel`<sup>Required</sup> <a name="makeModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.makeModel"></a>

```typescript
public readonly makeModel: string;
```

- *Type:* string

---

##### `maxFlashDiskIops`<sup>Required</sup> <a name="maxFlashDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskIops"></a>

```typescript
public readonly maxFlashDiskIops: number;
```

- *Type:* number

---

##### `maxFlashDiskThroughput`<sup>Required</sup> <a name="maxFlashDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxFlashDiskThroughput"></a>

```typescript
public readonly maxFlashDiskThroughput: number;
```

- *Type:* number

---

##### `maxHardDiskIops`<sup>Required</sup> <a name="maxHardDiskIops" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskIops"></a>

```typescript
public readonly maxHardDiskIops: number;
```

- *Type:* number

---

##### `maxHardDiskThroughput`<sup>Required</sup> <a name="maxHardDiskThroughput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.maxHardDiskThroughput"></a>

```typescript
public readonly maxHardDiskThroughput: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseManagementExternalExadataStorageGridStorageServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridStorageServers">DatabaseManagementExternalExadataStorageGridStorageServers</a>

---


### DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference <a name="DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseManagementExternalExadataStorageGrid } from 'rhizo-co-terraform-provider-oci'

new databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseManagementExternalExadataStorageGridTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataStorageGrid.DatabaseManagementExternalExadataStorageGridTimeouts">DatabaseManagementExternalExadataStorageGridTimeouts</a>

---



