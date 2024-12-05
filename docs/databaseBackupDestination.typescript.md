# `databaseBackupDestination` Submodule <a name="`databaseBackupDestination` Submodule" id="rhizo-co-terraform-provider-oci.databaseBackupDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseBackupDestination <a name="DatabaseBackupDestination" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination oci_database_backup_destination}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

new databaseBackupDestination.DatabaseBackupDestination(scope: Construct, id: string, config: DatabaseBackupDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig">DatabaseBackupDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig">DatabaseBackupDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails">putMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetLocalMountPointPath">resetLocalMountPointPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetMountTypeDetails">resetMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetVpcUsers">resetVpcUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMountTypeDetails` <a name="putMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails"></a>

```typescript
public putMountTypeDetails(value: DatabaseBackupDestinationMountTypeDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putMountTypeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseBackupDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

---

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalMountPointPath` <a name="resetLocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetLocalMountPointPath"></a>

```typescript
public resetLocalMountPointPath(): void
```

##### `resetMountTypeDetails` <a name="resetMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetMountTypeDetails"></a>

```typescript
public resetMountTypeDetails(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcUsers` <a name="resetVpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.resetVpcUsers"></a>

```typescript
public resetVpcUsers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseBackupDestination resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

databaseBackupDestination.DatabaseBackupDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

databaseBackupDestination.DatabaseBackupDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

databaseBackupDestination.DatabaseBackupDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseBackupDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseBackupDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseBackupDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseBackupDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.associatedDatabases">associatedDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList">DatabaseBackupDestinationAssociatedDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetails">mountTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference">DatabaseBackupDestinationMountTypeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsMountType">nfsMountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServer">nfsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServerExport">nfsServerExport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference">DatabaseBackupDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPathInput">localMountPointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetailsInput">mountTypeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsersInput">vpcUsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPath">localMountPointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsers">vpcUsers</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedDatabases`<sup>Required</sup> <a name="associatedDatabases" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.associatedDatabases"></a>

```typescript
public readonly associatedDatabases: DatabaseBackupDestinationAssociatedDatabasesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList">DatabaseBackupDestinationAssociatedDatabasesList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `mountTypeDetails`<sup>Required</sup> <a name="mountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetails"></a>

```typescript
public readonly mountTypeDetails: DatabaseBackupDestinationMountTypeDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference">DatabaseBackupDestinationMountTypeDetailsOutputReference</a>

---

##### `nfsMountType`<sup>Required</sup> <a name="nfsMountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsMountType"></a>

```typescript
public readonly nfsMountType: string;
```

- *Type:* string

---

##### `nfsServer`<sup>Required</sup> <a name="nfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServer"></a>

```typescript
public readonly nfsServer: string[];
```

- *Type:* string[]

---

##### `nfsServerExport`<sup>Required</sup> <a name="nfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.nfsServerExport"></a>

```typescript
public readonly nfsServerExport: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseBackupDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference">DatabaseBackupDestinationTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localMountPointPathInput`<sup>Optional</sup> <a name="localMountPointPathInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPathInput"></a>

```typescript
public readonly localMountPointPathInput: string;
```

- *Type:* string

---

##### `mountTypeDetailsInput`<sup>Optional</sup> <a name="mountTypeDetailsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.mountTypeDetailsInput"></a>

```typescript
public readonly mountTypeDetailsInput: DatabaseBackupDestinationMountTypeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseBackupDestinationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `vpcUsersInput`<sup>Optional</sup> <a name="vpcUsersInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsersInput"></a>

```typescript
public readonly vpcUsersInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `localMountPointPath`<sup>Required</sup> <a name="localMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.localMountPointPath"></a>

```typescript
public readonly localMountPointPath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcUsers`<sup>Required</sup> <a name="vpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.vpcUsers"></a>

```typescript
public readonly vpcUsers: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseBackupDestinationAssociatedDatabases <a name="DatabaseBackupDestinationAssociatedDatabases" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

const databaseBackupDestinationAssociatedDatabases: databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases = { ... }
```


### DatabaseBackupDestinationConfig <a name="DatabaseBackupDestinationConfig" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

const databaseBackupDestinationConfig: databaseBackupDestination.DatabaseBackupDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#compartment_id DatabaseBackupDestination#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#display_name DatabaseBackupDestination#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#type DatabaseBackupDestination#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#connection_string DatabaseBackupDestination#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#defined_tags DatabaseBackupDestination#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#freeform_tags DatabaseBackupDestination#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#id DatabaseBackupDestination#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.localMountPointPath">localMountPointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.mountTypeDetails">mountTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | mount_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.vpcUsers">vpcUsers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#vpc_users DatabaseBackupDestination#vpc_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#compartment_id DatabaseBackupDestination#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#display_name DatabaseBackupDestination#display_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#type DatabaseBackupDestination#type}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#connection_string DatabaseBackupDestination#connection_string}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#defined_tags DatabaseBackupDestination#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#freeform_tags DatabaseBackupDestination#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#id DatabaseBackupDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localMountPointPath`<sup>Optional</sup> <a name="localMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.localMountPointPath"></a>

```typescript
public readonly localMountPointPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}.

---

##### `mountTypeDetails`<sup>Optional</sup> <a name="mountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.mountTypeDetails"></a>

```typescript
public readonly mountTypeDetails: DatabaseBackupDestinationMountTypeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

mount_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type_details DatabaseBackupDestination#mount_type_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseBackupDestinationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#timeouts DatabaseBackupDestination#timeouts}

---

##### `vpcUsers`<sup>Optional</sup> <a name="vpcUsers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationConfig.property.vpcUsers"></a>

```typescript
public readonly vpcUsers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#vpc_users DatabaseBackupDestination#vpc_users}.

---

### DatabaseBackupDestinationMountTypeDetails <a name="DatabaseBackupDestinationMountTypeDetails" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

const databaseBackupDestinationMountTypeDetails: databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.mountType">mountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type DatabaseBackupDestination#mount_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.localMountPointPath">localMountPointPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServer">nfsServer</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server DatabaseBackupDestination#nfs_server}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServerExport">nfsServerExport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server_export DatabaseBackupDestination#nfs_server_export}. |

---

##### `mountType`<sup>Required</sup> <a name="mountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.mountType"></a>

```typescript
public readonly mountType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#mount_type DatabaseBackupDestination#mount_type}.

---

##### `localMountPointPath`<sup>Optional</sup> <a name="localMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.localMountPointPath"></a>

```typescript
public readonly localMountPointPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#local_mount_point_path DatabaseBackupDestination#local_mount_point_path}.

---

##### `nfsServer`<sup>Optional</sup> <a name="nfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServer"></a>

```typescript
public readonly nfsServer: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server DatabaseBackupDestination#nfs_server}.

---

##### `nfsServerExport`<sup>Optional</sup> <a name="nfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails.property.nfsServerExport"></a>

```typescript
public readonly nfsServerExport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#nfs_server_export DatabaseBackupDestination#nfs_server_export}.

---

### DatabaseBackupDestinationTimeouts <a name="DatabaseBackupDestinationTimeouts" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

const databaseBackupDestinationTimeouts: databaseBackupDestination.DatabaseBackupDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#create DatabaseBackupDestination#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#delete DatabaseBackupDestination#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#update DatabaseBackupDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#create DatabaseBackupDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#delete DatabaseBackupDestination#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_backup_destination#update DatabaseBackupDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseBackupDestinationAssociatedDatabasesList <a name="DatabaseBackupDestinationAssociatedDatabasesList" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

new databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get"></a>

```typescript
public get(index: number): DatabaseBackupDestinationAssociatedDatabasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseBackupDestinationAssociatedDatabasesOutputReference <a name="DatabaseBackupDestinationAssociatedDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

new databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases">DatabaseBackupDestinationAssociatedDatabases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseBackupDestinationAssociatedDatabases;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationAssociatedDatabases">DatabaseBackupDestinationAssociatedDatabases</a>

---


### DatabaseBackupDestinationMountTypeDetailsOutputReference <a name="DatabaseBackupDestinationMountTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

new databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetLocalMountPointPath">resetLocalMountPointPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServer">resetNfsServer</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServerExport">resetNfsServerExport</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocalMountPointPath` <a name="resetLocalMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetLocalMountPointPath"></a>

```typescript
public resetLocalMountPointPath(): void
```

##### `resetNfsServer` <a name="resetNfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServer"></a>

```typescript
public resetNfsServer(): void
```

##### `resetNfsServerExport` <a name="resetNfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.resetNfsServerExport"></a>

```typescript
public resetNfsServerExport(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPathInput">localMountPointPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountTypeInput">mountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExportInput">nfsServerExportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerInput">nfsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPath">localMountPointPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountType">mountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServer">nfsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExport">nfsServerExport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `localMountPointPathInput`<sup>Optional</sup> <a name="localMountPointPathInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPathInput"></a>

```typescript
public readonly localMountPointPathInput: string;
```

- *Type:* string

---

##### `mountTypeInput`<sup>Optional</sup> <a name="mountTypeInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountTypeInput"></a>

```typescript
public readonly mountTypeInput: string;
```

- *Type:* string

---

##### `nfsServerExportInput`<sup>Optional</sup> <a name="nfsServerExportInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExportInput"></a>

```typescript
public readonly nfsServerExportInput: string;
```

- *Type:* string

---

##### `nfsServerInput`<sup>Optional</sup> <a name="nfsServerInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerInput"></a>

```typescript
public readonly nfsServerInput: string[];
```

- *Type:* string[]

---

##### `localMountPointPath`<sup>Required</sup> <a name="localMountPointPath" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.localMountPointPath"></a>

```typescript
public readonly localMountPointPath: string;
```

- *Type:* string

---

##### `mountType`<sup>Required</sup> <a name="mountType" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.mountType"></a>

```typescript
public readonly mountType: string;
```

- *Type:* string

---

##### `nfsServer`<sup>Required</sup> <a name="nfsServer" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServer"></a>

```typescript
public readonly nfsServer: string[];
```

- *Type:* string[]

---

##### `nfsServerExport`<sup>Required</sup> <a name="nfsServerExport" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.nfsServerExport"></a>

```typescript
public readonly nfsServerExport: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseBackupDestinationMountTypeDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationMountTypeDetails">DatabaseBackupDestinationMountTypeDetails</a>

---


### DatabaseBackupDestinationTimeoutsOutputReference <a name="DatabaseBackupDestinationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseBackupDestination } from 'rhizo-co-terraform-provider-oci'

new databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseBackupDestinationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseBackupDestination.DatabaseBackupDestinationTimeouts">DatabaseBackupDestinationTimeouts</a>

---



