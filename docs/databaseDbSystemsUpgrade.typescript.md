# `databaseDbSystemsUpgrade` Submodule <a name="`databaseDbSystemsUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystemsUpgrade <a name="DatabaseDbSystemsUpgrade" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade oci_database_db_systems_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade(scope: Construct, id: string, config: DatabaseDbSystemsUpgradeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig">DatabaseDbSystemsUpgradeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated">resetIsSnapshotRetentionDaysForceUpdated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion">resetNewGiVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion">resetNewOsVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays">resetSnapshotRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseDbSystemsUpgradeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsSnapshotRetentionDaysForceUpdated` <a name="resetIsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated"></a>

```typescript
public resetIsSnapshotRetentionDaysForceUpdated(): void
```

##### `resetNewGiVersion` <a name="resetNewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion"></a>

```typescript
public resetNewGiVersion(): void
```

##### `resetNewOsVersion` <a name="resetNewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion"></a>

```typescript
public resetNewOsVersion(): void
```

##### `resetSnapshotRetentionPeriodInDays` <a name="resetSnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays"></a>

```typescript
public resetSnapshotRetentionPeriodInDays(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDbSystemsUpgrade to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDbSystemsUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystemsUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId">backupSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy">diskRedundancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains">faultDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp">pointInTimeDataDiskCloneTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb">recoStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName">scanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds">scanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId">sourceDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup">sparseDiskgroup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys">sshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds">vipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput">isSnapshotRetentionDaysForceUpdatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput">newGiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput">newOsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput">snapshotRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated">isSnapshotRetentionDaysForceUpdated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion">newGiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion">newOsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds"></a>

```typescript
public readonly backupNetworkNsgIds: string[];
```

- *Type:* string[]

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId"></a>

```typescript
public readonly backupSubnetId: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage"></a>

```typescript
public readonly dataStoragePercentage: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dbSystemOptions`<sup>Required</sup> <a name="dbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions"></a>

```typescript
public readonly dbSystemOptions: DatabaseDbSystemsUpgradeDbSystemOptionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy"></a>

```typescript
public readonly diskRedundancy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains"></a>

```typescript
public readonly faultDomains: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache"></a>

```typescript
public readonly iormConfigCache: DatabaseDbSystemsUpgradeIormConfigCacheList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId"></a>

```typescript
public readonly lastMaintenanceRunId: string;
```

- *Type:* string

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId"></a>

```typescript
public readonly lastPatchHistoryEntryId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DatabaseDbSystemsUpgradeMaintenanceWindowList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a>

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId"></a>

```typescript
public readonly nextMaintenanceRunId: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `pointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="pointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp"></a>

```typescript
public readonly pointInTimeDataDiskCloneTimestamp: string;
```

- *Type:* string

---

##### `recoStorageSizeInGb`<sup>Required</sup> <a name="recoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb"></a>

```typescript
public readonly recoStorageSizeInGb: number;
```

- *Type:* number

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName"></a>

```typescript
public readonly scanDnsName: string;
```

- *Type:* string

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId"></a>

```typescript
public readonly scanDnsRecordId: string;
```

- *Type:* string

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds"></a>

```typescript
public readonly scanIpIds: string[];
```

- *Type:* string[]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sourceDbSystemId`<sup>Required</sup> <a name="sourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId"></a>

```typescript
public readonly sourceDbSystemId: string;
```

- *Type:* string

---

##### `sparseDiskgroup`<sup>Required</sup> <a name="sparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup"></a>

```typescript
public readonly sparseDiskgroup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys"></a>

```typescript
public readonly sshPublicKeys: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDbSystemsUpgradeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds"></a>

```typescript
public readonly vipIds: string[];
```

- *Type:* string[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isSnapshotRetentionDaysForceUpdatedInput`<sup>Optional</sup> <a name="isSnapshotRetentionDaysForceUpdatedInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput"></a>

```typescript
public readonly isSnapshotRetentionDaysForceUpdatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newGiVersionInput`<sup>Optional</sup> <a name="newGiVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput"></a>

```typescript
public readonly newGiVersionInput: string;
```

- *Type:* string

---

##### `newOsVersionInput`<sup>Optional</sup> <a name="newOsVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput"></a>

```typescript
public readonly newOsVersionInput: string;
```

- *Type:* string

---

##### `snapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput"></a>

```typescript
public readonly snapshotRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseDbSystemsUpgradeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSnapshotRetentionDaysForceUpdated`<sup>Required</sup> <a name="isSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated"></a>

```typescript
public readonly isSnapshotRetentionDaysForceUpdated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `newGiVersion`<sup>Required</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion"></a>

```typescript
public readonly newGiVersion: string;
```

- *Type:* string

---

##### `newOsVersion`<sup>Required</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion"></a>

```typescript
public readonly newOsVersion: string;
```

- *Type:* string

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemsUpgradeConfig <a name="DatabaseDbSystemsUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeConfig: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated">isSnapshotRetentionDaysForceUpdated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion">newGiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion">newOsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSnapshotRetentionDaysForceUpdated`<sup>Optional</sup> <a name="isSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated"></a>

```typescript
public readonly isSnapshotRetentionDaysForceUpdated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `newGiVersion`<sup>Optional</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion"></a>

```typescript
public readonly newGiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `newOsVersion`<sup>Optional</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion"></a>

```typescript
public readonly newOsVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `snapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDbSystemsUpgradeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

### DatabaseDbSystemsUpgradeDbSystemOptions <a name="DatabaseDbSystemsUpgradeDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeDbSystemOptions: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions = { ... }
```


### DatabaseDbSystemsUpgradeIormConfigCache <a name="DatabaseDbSystemsUpgradeIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeIormConfigCache: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache = { ... }
```


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlans <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeIormConfigCacheDbPlans: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans = { ... }
```


### DatabaseDbSystemsUpgradeMaintenanceWindow <a name="DatabaseDbSystemsUpgradeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeMaintenanceWindow: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow = { ... }
```


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek = { ... }
```


### DatabaseDbSystemsUpgradeMaintenanceWindowMonths <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeMaintenanceWindowMonths: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths = { ... }
```


### DatabaseDbSystemsUpgradeTimeouts <a name="DatabaseDbSystemsUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

const databaseDbSystemsUpgradeTimeouts: databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemsUpgradeDbSystemOptionsList <a name="DatabaseDbSystemsUpgradeDbSystemOptionsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference <a name="DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement">storageManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement"></a>

```typescript
public readonly storageManagement: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeDbSystemOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```typescript
public readonly flashCacheLimit: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share"></a>

```typescript
public readonly share: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeIormConfigCacheDbPlans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheList <a name="DatabaseDbSystemsUpgradeIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeIormConfigCacheOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans"></a>

```typescript
public readonly dbPlans: DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective"></a>

```typescript
public readonly objective: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeIormConfigCache;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get"></a>

```typescript
public get(index: number): DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeMaintenanceWindowMonths;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a>

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbSystemsUpgradeMaintenanceWindow;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a>

---


### DatabaseDbSystemsUpgradeTimeoutsOutputReference <a name="DatabaseDbSystemsUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseDbSystemsUpgrade } from 'rhizo-co-terraform-provider-oci'

new databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDbSystemsUpgradeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---



