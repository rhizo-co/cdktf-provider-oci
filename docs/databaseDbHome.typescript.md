# `databaseDbHome` Submodule <a name="`databaseDbHome` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbHome"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbHome <a name="DatabaseDbHome" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home oci_database_db_home}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHome(scope: Construct, id: string, config?: DatabaseDbHomeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig">DatabaseDbHomeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig">DatabaseDbHomeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete">resetEnableDatabaseDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion">resetIsDesupportedVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled">resetIsUnifiedAuditingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId">resetVmClusterId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatabase` <a name="putDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase"></a>

```typescript
public putDatabase(value: DatabaseDbHomeDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseDbHomeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

---

##### `resetDatabase` <a name="resetDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId"></a>

```typescript
public resetDatabaseSoftwareImageId(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableDatabaseDelete` <a name="resetEnableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete"></a>

```typescript
public resetEnableDatabaseDelete(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsDesupportedVersion` <a name="resetIsDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion"></a>

```typescript
public resetIsDesupportedVersion(): void
```

##### `resetIsUnifiedAuditingEnabled` <a name="resetIsUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled"></a>

```typescript
public resetIsUnifiedAuditingEnabled(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId"></a>

```typescript
public resetKmsKeyVersionId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmClusterId` <a name="resetVmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId"></a>

```typescript
public resetVmClusterId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

databaseDbHome.DatabaseDbHome.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

databaseDbHome.DatabaseDbHome.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

databaseDbHome.DatabaseDbHome.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

databaseDbHome.DatabaseDbHome.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDbHome to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDbHome that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbHome to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation">dbHomeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput">databaseInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput">enableDatabaseDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput">isDesupportedVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput">isUnifiedAuditingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete">enableDatabaseDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion">isDesupportedVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database"></a>

```typescript
public readonly database: DatabaseDbHomeDatabaseOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a>

---

##### `dbHomeLocation`<sup>Required</sup> <a name="dbHomeLocation" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation"></a>

```typescript
public readonly dbHomeLocation: string;
```

- *Type:* string

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId"></a>

```typescript
public readonly lastPatchHistoryEntryId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDbHomeTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput"></a>

```typescript
public readonly databaseInput: DatabaseDbHomeDatabase;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableDatabaseDeleteInput`<sup>Optional</sup> <a name="enableDatabaseDeleteInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput"></a>

```typescript
public readonly enableDatabaseDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isDesupportedVersionInput`<sup>Optional</sup> <a name="isDesupportedVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput"></a>

```typescript
public readonly isDesupportedVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="isUnifiedAuditingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput"></a>

```typescript
public readonly isUnifiedAuditingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput"></a>

```typescript
public readonly kmsKeyVersionIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseDbHomeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput"></a>

```typescript
public readonly vmClusterIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableDatabaseDelete`<sup>Required</sup> <a name="enableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete"></a>

```typescript
public readonly enableDatabaseDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDesupportedVersion`<sup>Required</sup> <a name="isDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion"></a>

```typescript
public readonly isDesupportedVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnifiedAuditingEnabled`<sup>Required</sup> <a name="isUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled"></a>

```typescript
public readonly isUnifiedAuditingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbHomeConfig <a name="DatabaseDbHomeConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeConfig: databaseDbHome.DatabaseDbHomeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete">enableDatabaseDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion">isDesupportedVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId">vmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Optional</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database"></a>

```typescript
public readonly database: DatabaseDbHomeDatabase;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database DatabaseDbHome#database}

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}.

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}.

---

##### `enableDatabaseDelete`<sup>Optional</sup> <a name="enableDatabaseDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete"></a>

```typescript
public readonly enableDatabaseDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDesupportedVersion`<sup>Optional</sup> <a name="isDesupportedVersion" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion"></a>

```typescript
public readonly isDesupportedVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}.

---

##### `isUnifiedAuditingEnabled`<sup>Optional</sup> <a name="isUnifiedAuditingEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled"></a>

```typescript
public readonly isUnifiedAuditingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseDbHomeTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#timeouts DatabaseDbHome#timeouts}

---

##### `vmClusterId`<sup>Optional</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId"></a>

```typescript
public readonly vmClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}.

---

### DatabaseDbHomeDatabase <a name="DatabaseDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeDatabase: databaseDbHome.DatabaseDbHomeDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword">backupTdePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName">pdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases">pluggableDatabases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery">timeStampForPointInTimeRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}.

---

##### `backupTdePassword`<sup>Optional</sup> <a name="backupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword"></a>

```typescript
public readonly backupTdePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}.

---

##### `databaseSoftwareImageId`<sup>Optional</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `dbBackupConfig`<sup>Optional</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig"></a>

```typescript
public readonly dbBackupConfig: DatabaseDbHomeDatabaseDbBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_backup_config DatabaseDbHome#db_backup_config}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}.

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `keyStoreId`<sup>Optional</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}.

---

##### `pdbName`<sup>Optional</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}.

---

##### `pluggableDatabases`<sup>Optional</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases"></a>

```typescript
public readonly pluggableDatabases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}.

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}.

---

##### `timeStampForPointInTimeRecovery`<sup>Optional</sup> <a name="timeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```typescript
public readonly timeStampForPointInTimeRecovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}.

---

### DatabaseDbHomeDatabaseConnectionStrings <a name="DatabaseDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeDatabaseConnectionStrings: databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings = { ... }
```


### DatabaseDbHomeDatabaseDbBackupConfig <a name="DatabaseDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeDatabaseDbBackupConfig: databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">autoBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}. |

---

##### `autoBackupEnabled`<sup>Optional</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```typescript
public readonly autoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}.

---

##### `autoBackupWindow`<sup>Optional</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```typescript
public readonly autoBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}.

---

##### `autoFullBackupDay`<sup>Optional</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```typescript
public readonly autoFullBackupDay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}.

---

##### `autoFullBackupWindow`<sup>Optional</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```typescript
public readonly autoFullBackupWindow: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}.

---

##### `backupDeletionPolicy`<sup>Optional</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```typescript
public readonly backupDeletionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}.

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: IResolvable | DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_destination_details DatabaseDbHome#backup_destination_details}

---

##### `recoveryWindowInDays`<sup>Optional</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}.

---

##### `runImmediateFullBackup`<sup>Optional</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```typescript
public readonly runImmediateFullBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}.

---

### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails: databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}. |

---

##### `dbrsPolicyId`<sup>Optional</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```typescript
public readonly dbrsPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}.

---

### DatabaseDbHomeTimeouts <a name="DatabaseDbHomeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

const databaseDbHomeTimeouts: databaseDbHome.DatabaseDbHomeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbHomeDatabaseConnectionStringsList <a name="DatabaseDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get"></a>

```typescript
public get(index: number): DatabaseDbHomeDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">cdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">cdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `cdbDefault`<sup>Required</sup> <a name="cdbDefault" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```typescript
public readonly cdbDefault: string;
```

- *Type:* string

---

##### `cdbIpDefault`<sup>Required</sup> <a name="cdbIpDefault" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```typescript
public readonly cdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbHomeDatabaseConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```typescript
public get(index: number): DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">resetDbrsPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDbrsPolicyId` <a name="resetDbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```typescript
public resetDbrsPolicyId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrsPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrsPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbrsPolicyIdInput`<sup>Optional</sup> <a name="dbrsPolicyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```typescript
public readonly dbrsPolicyIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dbrsPolicyId`<sup>Required</sup> <a name="dbrsPolicyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```typescript
public readonly dbrsPolicyId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>

---


### DatabaseDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">resetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">resetAutoBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">resetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">resetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">resetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">resetRecoveryWindowInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">resetRunImmediateFullBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```typescript
public putBackupDestinationDetails(value: IResolvable | DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]

---

##### `resetAutoBackupEnabled` <a name="resetAutoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```typescript
public resetAutoBackupEnabled(): void
```

##### `resetAutoBackupWindow` <a name="resetAutoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```typescript
public resetAutoBackupWindow(): void
```

##### `resetAutoFullBackupDay` <a name="resetAutoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```typescript
public resetAutoFullBackupDay(): void
```

##### `resetAutoFullBackupWindow` <a name="resetAutoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```typescript
public resetAutoFullBackupWindow(): void
```

##### `resetBackupDeletionPolicy` <a name="resetBackupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```typescript
public resetBackupDeletionPolicy(): void
```

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```typescript
public resetBackupDestinationDetails(): void
```

##### `resetRecoveryWindowInDays` <a name="resetRecoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```typescript
public resetRecoveryWindowInDays(): void
```

##### `resetRunImmediateFullBackup` <a name="resetRunImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```typescript
public resetRunImmediateFullBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">autoBackupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">autoBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">autoFullBackupDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">autoFullBackupWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backupDeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">recoveryWindowInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">runImmediateFullBackupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">autoBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recoveryWindowInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">runImmediateFullBackup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```typescript
public readonly backupDestinationDetails: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `autoBackupEnabledInput`<sup>Optional</sup> <a name="autoBackupEnabledInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```typescript
public readonly autoBackupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoBackupWindowInput`<sup>Optional</sup> <a name="autoBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```typescript
public readonly autoBackupWindowInput: string;
```

- *Type:* string

---

##### `autoFullBackupDayInput`<sup>Optional</sup> <a name="autoFullBackupDayInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```typescript
public readonly autoFullBackupDayInput: string;
```

- *Type:* string

---

##### `autoFullBackupWindowInput`<sup>Optional</sup> <a name="autoFullBackupWindowInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```typescript
public readonly autoFullBackupWindowInput: string;
```

- *Type:* string

---

##### `backupDeletionPolicyInput`<sup>Optional</sup> <a name="backupDeletionPolicyInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```typescript
public readonly backupDeletionPolicyInput: string;
```

- *Type:* string

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```typescript
public readonly backupDestinationDetailsInput: IResolvable | DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>[]

---

##### `recoveryWindowInDaysInput`<sup>Optional</sup> <a name="recoveryWindowInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```typescript
public readonly recoveryWindowInDaysInput: number;
```

- *Type:* number

---

##### `runImmediateFullBackupInput`<sup>Optional</sup> <a name="runImmediateFullBackupInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```typescript
public readonly runImmediateFullBackupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```typescript
public readonly autoBackupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoBackupWindow`<sup>Required</sup> <a name="autoBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```typescript
public readonly autoBackupWindow: string;
```

- *Type:* string

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```typescript
public readonly autoFullBackupDay: string;
```

- *Type:* string

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```typescript
public readonly autoFullBackupWindow: string;
```

- *Type:* string

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```typescript
public readonly backupDeletionPolicy: string;
```

- *Type:* string

---

##### `recoveryWindowInDays`<sup>Required</sup> <a name="recoveryWindowInDays" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```typescript
public readonly recoveryWindowInDays: number;
```

- *Type:* number

---

##### `runImmediateFullBackup`<sup>Required</sup> <a name="runImmediateFullBackup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```typescript
public readonly runImmediateFullBackup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbHomeDatabaseDbBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbHomeDatabaseOutputReference <a name="DatabaseDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig">putDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword">resetBackupTdePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">resetDatabaseSoftwareImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig">resetDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId">resetKeyStoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName">resetPdbName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases">resetPluggableDatabases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword">resetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">resetTimeStampForPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDbBackupConfig` <a name="putDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```typescript
public putDbBackupConfig(value: DatabaseDbHomeDatabaseDbBackupConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---

##### `resetBackupId` <a name="resetBackupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetBackupTdePassword` <a name="resetBackupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```typescript
public resetBackupTdePassword(): void
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseSoftwareImageId` <a name="resetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```typescript
public resetDatabaseSoftwareImageId(): void
```

##### `resetDbBackupConfig` <a name="resetDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```typescript
public resetDbBackupConfig(): void
```

##### `resetDbName` <a name="resetDbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName"></a>

```typescript
public resetDbName(): void
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```typescript
public resetDbWorkload(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetKeyStoreId` <a name="resetKeyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId"></a>

```typescript
public resetKeyStoreId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```typescript
public resetKmsKeyVersionId(): void
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```typescript
public resetNcharacterSet(): void
```

##### `resetPdbName` <a name="resetPdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName"></a>

```typescript
public resetPdbName(): void
```

##### `resetPluggableDatabases` <a name="resetPluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```typescript
public resetPluggableDatabases(): void
```

##### `resetTdeWalletPassword` <a name="resetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```typescript
public resetTdeWalletPassword(): void
```

##### `resetTimeStampForPointInTimeRecovery` <a name="resetTimeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```typescript
public resetTimeStampForPointInTimeRecovery(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId"></a>

```typescript
public resetVaultId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches">oneOffPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix">sidPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput">backupTdePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">databaseSoftwareImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput">dbBackupConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput">keyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput">pdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">pluggableDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">timeStampForPointInTimeRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword">backupTdePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases">pluggableDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">timeStampForPointInTimeRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DatabaseDbHomeDatabaseConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a>

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```typescript
public readonly dbBackupConfig: DatabaseDbHomeDatabaseDbBackupConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `oneOffPatches`<sup>Required</sup> <a name="oneOffPatches" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches"></a>

```typescript
public readonly oneOffPatches: string[];
```

- *Type:* string[]

---

##### `sidPrefix`<sup>Required</sup> <a name="sidPrefix" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix"></a>

```typescript
public readonly sidPrefix: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `backupTdePasswordInput`<sup>Optional</sup> <a name="backupTdePasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```typescript
public readonly backupTdePasswordInput: string;
```

- *Type:* string

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseSoftwareImageIdInput`<sup>Optional</sup> <a name="databaseSoftwareImageIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```typescript
public readonly databaseSoftwareImageIdInput: string;
```

- *Type:* string

---

##### `dbBackupConfigInput`<sup>Optional</sup> <a name="dbBackupConfigInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```typescript
public readonly dbBackupConfigInput: DatabaseDbHomeDatabaseDbBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```typescript
public readonly dbWorkloadInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyStoreIdInput`<sup>Optional</sup> <a name="keyStoreIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput"></a>

```typescript
public readonly keyStoreIdInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```typescript
public readonly kmsKeyVersionIdInput: string;
```

- *Type:* string

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```typescript
public readonly ncharacterSetInput: string;
```

- *Type:* string

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```typescript
public readonly pdbNameInput: string;
```

- *Type:* string

---

##### `pluggableDatabasesInput`<sup>Optional</sup> <a name="pluggableDatabasesInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```typescript
public readonly pluggableDatabasesInput: string[];
```

- *Type:* string[]

---

##### `tdeWalletPasswordInput`<sup>Optional</sup> <a name="tdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```typescript
public readonly tdeWalletPasswordInput: string;
```

- *Type:* string

---

##### `timeStampForPointInTimeRecoveryInput`<sup>Optional</sup> <a name="timeStampForPointInTimeRecoveryInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```typescript
public readonly timeStampForPointInTimeRecoveryInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `backupTdePassword`<sup>Required</sup> <a name="backupTdePassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```typescript
public readonly backupTdePassword: string;
```

- *Type:* string

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```typescript
public readonly databaseSoftwareImageId: string;
```

- *Type:* string

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pluggableDatabases`<sup>Required</sup> <a name="pluggableDatabases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```typescript
public readonly pluggableDatabases: string[];
```

- *Type:* string[]

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```typescript
public readonly tdeWalletPassword: string;
```

- *Type:* string

---

##### `timeStampForPointInTimeRecovery`<sup>Required</sup> <a name="timeStampForPointInTimeRecovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```typescript
public readonly timeStampForPointInTimeRecovery: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseDbHomeDatabase;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---


### DatabaseDbHomeTimeoutsOutputReference <a name="DatabaseDbHomeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseDbHome } from 'rhizo-co-terraform-provider-oci'

new databaseDbHome.DatabaseDbHomeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseDbHomeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

---



