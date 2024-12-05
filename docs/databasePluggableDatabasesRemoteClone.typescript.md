# `databasePluggableDatabasesRemoteClone` Submodule <a name="`databasePluggableDatabasesRemoteClone` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasesRemoteClone <a name="DatabasePluggableDatabasesRemoteClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone oci_database_pluggable_databases_remote_clone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone(scope: Construct, id: string, config: DatabasePluggableDatabasesRemoteCloneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig">DatabasePluggableDatabasesRemoteCloneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig">DatabasePluggableDatabasesRemoteCloneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetPdbAdminPassword">resetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetShouldPdbAdminAccountBeLocked">resetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTargetTdeWalletPassword">resetTargetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabasePluggableDatabasesRemoteCloneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPdbAdminPassword` <a name="resetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetPdbAdminPassword"></a>

```typescript
public resetPdbAdminPassword(): void
```

##### `resetShouldPdbAdminAccountBeLocked` <a name="resetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetShouldPdbAdminAccountBeLocked"></a>

```typescript
public resetShouldPdbAdminAccountBeLocked(): void
```

##### `resetTargetTdeWalletPassword` <a name="resetTargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTargetTdeWalletPassword"></a>

```typescript
public resetTargetTdeWalletPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasesRemoteClone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabasePluggableDatabasesRemoteClone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePluggableDatabasesRemoteClone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePluggableDatabasesRemoteClone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasesRemoteClone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList">DatabasePluggableDatabasesRemoteCloneConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference">DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbNameInput">clonedPdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPasswordInput">pdbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLockedInput">shouldPdbAdminAccountBeLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPasswordInput">sourceContainerDbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseIdInput">targetContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPasswordInput">targetTdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbName">clonedPdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPassword">sourceContainerDbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseId">targetContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPassword">targetTdeWalletPassword</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DatabasePluggableDatabasesRemoteCloneConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList">DatabasePluggableDatabasesRemoteCloneConnectionStringsList</a>

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbNodeLevelDetails"></a>

```typescript
public readonly pdbNodeLevelDetails: DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseManagementConfig"></a>

```typescript
public readonly pluggableDatabaseManagementConfig: DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.refreshableCloneConfig"></a>

```typescript
public readonly refreshableCloneConfig: DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference">DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference</a>

---

##### `clonedPdbNameInput`<sup>Optional</sup> <a name="clonedPdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbNameInput"></a>

```typescript
public readonly clonedPdbNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pdbAdminPasswordInput`<sup>Optional</sup> <a name="pdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPasswordInput"></a>

```typescript
public readonly pdbAdminPasswordInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseIdInput"></a>

```typescript
public readonly pluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `shouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLockedInput"></a>

```typescript
public readonly shouldPdbAdminAccountBeLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceContainerDbAdminPasswordInput`<sup>Optional</sup> <a name="sourceContainerDbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPasswordInput"></a>

```typescript
public readonly sourceContainerDbAdminPasswordInput: string;
```

- *Type:* string

---

##### `targetContainerDatabaseIdInput`<sup>Optional</sup> <a name="targetContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseIdInput"></a>

```typescript
public readonly targetContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `targetTdeWalletPasswordInput`<sup>Optional</sup> <a name="targetTdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPasswordInput"></a>

```typescript
public readonly targetTdeWalletPasswordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabasePluggableDatabasesRemoteCloneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

---

##### `clonedPdbName`<sup>Required</sup> <a name="clonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.clonedPdbName"></a>

```typescript
public readonly clonedPdbName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceContainerDbAdminPassword`<sup>Required</sup> <a name="sourceContainerDbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.sourceContainerDbAdminPassword"></a>

```typescript
public readonly sourceContainerDbAdminPassword: string;
```

- *Type:* string

---

##### `targetContainerDatabaseId`<sup>Required</sup> <a name="targetContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetContainerDatabaseId"></a>

```typescript
public readonly targetContainerDatabaseId: string;
```

- *Type:* string

---

##### `targetTdeWalletPassword`<sup>Required</sup> <a name="targetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.targetTdeWalletPassword"></a>

```typescript
public readonly targetTdeWalletPassword: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasesRemoteCloneConfig <a name="DatabasePluggableDatabasesRemoteCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteCloneConfig: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.clonedPdbName">clonedPdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#cloned_pdb_name DatabasePluggableDatabasesRemoteClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pluggable_database_id DatabasePluggableDatabasesRemoteClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.sourceContainerDbAdminPassword">sourceContainerDbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#source_container_db_admin_password DatabasePluggableDatabasesRemoteClone#source_container_db_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetContainerDatabaseId">targetContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_container_database_id DatabasePluggableDatabasesRemoteClone#target_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#id DatabasePluggableDatabasesRemoteClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pdb_admin_password DatabasePluggableDatabasesRemoteClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesRemoteClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetTdeWalletPassword">targetTdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_tde_wallet_password DatabasePluggableDatabasesRemoteClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clonedPdbName`<sup>Required</sup> <a name="clonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.clonedPdbName"></a>

```typescript
public readonly clonedPdbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#cloned_pdb_name DatabasePluggableDatabasesRemoteClone#cloned_pdb_name}.

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pluggable_database_id DatabasePluggableDatabasesRemoteClone#pluggable_database_id}.

---

##### `sourceContainerDbAdminPassword`<sup>Required</sup> <a name="sourceContainerDbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.sourceContainerDbAdminPassword"></a>

```typescript
public readonly sourceContainerDbAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#source_container_db_admin_password DatabasePluggableDatabasesRemoteClone#source_container_db_admin_password}.

---

##### `targetContainerDatabaseId`<sup>Required</sup> <a name="targetContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetContainerDatabaseId"></a>

```typescript
public readonly targetContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_container_database_id DatabasePluggableDatabasesRemoteClone#target_container_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#id DatabasePluggableDatabasesRemoteClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdbAdminPassword`<sup>Optional</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#pdb_admin_password DatabasePluggableDatabasesRemoteClone#pdb_admin_password}.

---

##### `shouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesRemoteClone#should_pdb_admin_account_be_locked}.

---

##### `targetTdeWalletPassword`<sup>Optional</sup> <a name="targetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.targetTdeWalletPassword"></a>

```typescript
public readonly targetTdeWalletPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#target_tde_wallet_password DatabasePluggableDatabasesRemoteClone#target_tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasesRemoteCloneTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#timeouts DatabasePluggableDatabasesRemoteClone#timeouts}

---

### DatabasePluggableDatabasesRemoteCloneConnectionStrings <a name="DatabasePluggableDatabasesRemoteCloneConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteCloneConnectionStrings: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings = { ... }
```


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteClonePdbNodeLevelDetails: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails = { ... }
```


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig = { ... }
```


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteCloneRefreshableCloneConfig: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig = { ... }
```


### DatabasePluggableDatabasesRemoteCloneTimeouts <a name="DatabasePluggableDatabasesRemoteCloneTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesRemoteCloneTimeouts: databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#create DatabasePluggableDatabasesRemoteClone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#delete DatabasePluggableDatabasesRemoteClone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#update DatabasePluggableDatabasesRemoteClone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#create DatabasePluggableDatabasesRemoteClone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#delete DatabasePluggableDatabasesRemoteClone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_remote_clone#update DatabasePluggableDatabasesRemoteClone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasesRemoteCloneConnectionStringsList <a name="DatabasePluggableDatabasesRemoteCloneConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference <a name="DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings">DatabasePluggableDatabasesRemoteCloneConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbDefault"></a>

```typescript
public readonly pdbDefault: string;
```

- *Type:* string

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.pdbIpDefault"></a>

```typescript
public readonly pdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesRemoteCloneConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneConnectionStrings">DatabasePluggableDatabasesRemoteCloneConnectionStrings</a>

---


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails">DatabasePluggableDatabasesRemoteClonePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```typescript
public readonly managementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesRemoteClonePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig">DatabasePluggableDatabasesRemoteCloneRefreshableCloneConfig</a>

---


### DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference <a name="DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesRemoteClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabasePluggableDatabasesRemoteCloneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesRemoteClone.DatabasePluggableDatabasesRemoteCloneTimeouts">DatabasePluggableDatabasesRemoteCloneTimeouts</a>

---



