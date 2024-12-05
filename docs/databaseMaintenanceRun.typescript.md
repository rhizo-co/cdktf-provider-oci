# `databaseMaintenanceRun` Submodule <a name="`databaseMaintenanceRun` Submodule" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMaintenanceRun <a name="DatabaseMaintenanceRun" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run oci_database_maintenance_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

new databaseMaintenanceRun.DatabaseMaintenanceRun(scope: Construct, id: string, config: DatabaseMaintenanceRunConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig">DatabaseMaintenanceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled">resetIsDstFileUpdateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseMaintenanceRunTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetDatabaseSoftwareImageId"></a>

```typescript
public resetDatabaseSoftwareImageId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDstFileUpdateEnabled` <a name="resetIsDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetIsDstFileUpdateEnabled"></a>

```typescript
public resetIsDstFileUpdateEnabled(): void
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetPatchingMode"></a>

```typescript
public resetPatchingMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseMaintenanceRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMaintenanceRun to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMaintenanceRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMaintenanceRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins">currentCustomActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent">currentPatchingComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime">estimatedComponentPatchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime">estimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount">patchFailureCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId">patchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime">patchingEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime">patchingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus">patchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId">peerMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion">targetDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion">targetStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput">isDstFileUpdateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput">patchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput">patchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput">timeScheduledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `currentCustomActionTimeoutInMins`<sup>Required</sup> <a name="currentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentCustomActionTimeoutInMins"></a>

```typescript
public readonly currentCustomActionTimeoutInMins: number;
```

- *Type:* number

---

##### `currentPatchingComponent`<sup>Required</sup> <a name="currentPatchingComponent" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.currentPatchingComponent"></a>

```typescript
public readonly currentPatchingComponent: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `estimatedComponentPatchingStartTime`<sup>Required</sup> <a name="estimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedComponentPatchingStartTime"></a>

```typescript
public readonly estimatedComponentPatchingStartTime: string;
```

- *Type:* string

---

##### `estimatedPatchingTime`<sup>Required</sup> <a name="estimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.estimatedPatchingTime"></a>

```typescript
public readonly estimatedPatchingTime: DatabaseMaintenanceRunEstimatedPatchingTimeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList">DatabaseMaintenanceRunEstimatedPatchingTimeList</a>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceSubtype"></a>

```typescript
public readonly maintenanceSubtype: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `patchFailureCount`<sup>Required</sup> <a name="patchFailureCount" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchFailureCount"></a>

```typescript
public readonly patchFailureCount: number;
```

- *Type:* number

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchId"></a>

```typescript
public readonly patchId: string;
```

- *Type:* string

---

##### `patchingEndTime`<sup>Required</sup> <a name="patchingEndTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingEndTime"></a>

```typescript
public readonly patchingEndTime: string;
```

- *Type:* string

---

##### `patchingStartTime`<sup>Required</sup> <a name="patchingStartTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStartTime"></a>

```typescript
public readonly patchingStartTime: string;
```

- *Type:* string

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingStatus"></a>

```typescript
public readonly patchingStatus: string;
```

- *Type:* string

---

##### `peerMaintenanceRunId`<sup>Required</sup> <a name="peerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.peerMaintenanceRunId"></a>

```typescript
public readonly peerMaintenanceRunId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetDbServerVersion`<sup>Required</sup> <a name="targetDbServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetDbServerVersion"></a>

```typescript
public readonly targetDbServerVersion: string;
```

- *Type:* string

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `targetStorageServerVersion`<sup>Required</sup> <a name="targetStorageServerVersion" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetStorageServerVersion"></a>

```typescript
public readonly targetStorageServerVersion: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMaintenanceRunTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference">DatabaseMaintenanceRunTimeoutsOutputReference</a>

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDstFileUpdateEnabledInput`<sup>Optional</sup> <a name="isDstFileUpdateEnabledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabledInput"></a>

```typescript
public readonly isDstFileUpdateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingModeInput"></a>

```typescript
public readonly patchingModeInput: string;
```

- *Type:* string

---

##### `patchTypeInput`<sup>Optional</sup> <a name="patchTypeInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchTypeInput"></a>

```typescript
public readonly patchTypeInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseMaintenanceRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

---

##### `timeScheduledInput`<sup>Optional</sup> <a name="timeScheduledInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduledInput"></a>

```typescript
public readonly timeScheduledInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRun.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMaintenanceRunConfig <a name="DatabaseMaintenanceRunConfig" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

const databaseMaintenanceRunConfig: databaseMaintenanceRun.DatabaseMaintenanceRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType">patchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode">patchingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patch_type DatabaseMaintenanceRun#patch_type}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#target_resource_id DatabaseMaintenanceRun#target_resource_id}.

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#time_scheduled DatabaseMaintenanceRun#time_scheduled}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#compartment_id DatabaseMaintenanceRun#compartment_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#database_software_image_id DatabaseMaintenanceRun#database_software_image_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#id DatabaseMaintenanceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDstFileUpdateEnabled`<sup>Optional</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.isDstFileUpdateEnabled"></a>

```typescript
public readonly isDstFileUpdateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#is_dst_file_update_enabled DatabaseMaintenanceRun#is_dst_file_update_enabled}.

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#patching_mode DatabaseMaintenanceRun#patching_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseMaintenanceRunTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#timeouts DatabaseMaintenanceRun#timeouts}

---

### DatabaseMaintenanceRunEstimatedPatchingTime <a name="DatabaseMaintenanceRunEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

const databaseMaintenanceRunEstimatedPatchingTime: databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime = { ... }
```


### DatabaseMaintenanceRunTimeouts <a name="DatabaseMaintenanceRunTimeouts" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

const databaseMaintenanceRunTimeouts: databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#create DatabaseMaintenanceRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#delete DatabaseMaintenanceRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_maintenance_run#update DatabaseMaintenanceRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMaintenanceRunEstimatedPatchingTimeList <a name="DatabaseMaintenanceRunEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

new databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get"></a>

```typescript
public get(index: number): DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference <a name="DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

new databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimatedDbServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimatedNetworkSwitchesPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimatedStorageServerPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">totalEstimatedPatchingTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedDbServerPatchingTime`<sup>Required</sup> <a name="estimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```typescript
public readonly estimatedDbServerPatchingTime: number;
```

- *Type:* number

---

##### `estimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="estimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```typescript
public readonly estimatedNetworkSwitchesPatchingTime: number;
```

- *Type:* number

---

##### `estimatedStorageServerPatchingTime`<sup>Required</sup> <a name="estimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```typescript
public readonly estimatedStorageServerPatchingTime: number;
```

- *Type:* number

---

##### `totalEstimatedPatchingTime`<sup>Required</sup> <a name="totalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```typescript
public readonly totalEstimatedPatchingTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseMaintenanceRunEstimatedPatchingTime;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunEstimatedPatchingTime">DatabaseMaintenanceRunEstimatedPatchingTime</a>

---


### DatabaseMaintenanceRunTimeoutsOutputReference <a name="DatabaseMaintenanceRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseMaintenanceRun } from 'rhizo-co-terraform-provider-oci'

new databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseMaintenanceRunTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseMaintenanceRun.DatabaseMaintenanceRunTimeouts">DatabaseMaintenanceRunTimeouts</a>

---



