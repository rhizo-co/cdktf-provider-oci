# `databasePluggableDatabasesLocalClone` Submodule <a name="`databasePluggableDatabasesLocalClone` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasesLocalClone <a name="DatabasePluggableDatabasesLocalClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone oci_database_pluggable_databases_local_clone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone(scope: Construct, id: string, config: DatabasePluggableDatabasesLocalCloneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig">DatabasePluggableDatabasesLocalCloneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig">DatabasePluggableDatabasesLocalCloneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword">resetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked">resetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword">resetTargetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabasePluggableDatabasesLocalCloneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPdbAdminPassword` <a name="resetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword"></a>

```typescript
public resetPdbAdminPassword(): void
```

##### `resetShouldPdbAdminAccountBeLocked` <a name="resetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked"></a>

```typescript
public resetShouldPdbAdminAccountBeLocked(): void
```

##### `resetTargetTdeWalletPassword` <a name="resetTargetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword"></a>

```typescript
public resetTargetTdeWalletPassword(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabasePluggableDatabasesLocalClone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabasePluggableDatabasesLocalClone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasesLocalClone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId">containerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted">isRestricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName">pdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput">clonedPdbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput">pdbAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput">shouldPdbAdminAccountBeLockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput">targetTdeWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName">clonedPdbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword">targetTdeWalletPassword</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DatabasePluggableDatabasesLocalCloneConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a>

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId"></a>

```typescript
public readonly containerDatabaseId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted"></a>

```typescript
public readonly isRestricted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName"></a>

```typescript
public readonly pdbName: string;
```

- *Type:* string

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails"></a>

```typescript
public readonly pdbNodeLevelDetails: DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig"></a>

```typescript
public readonly pluggableDatabaseManagementConfig: DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig"></a>

```typescript
public readonly refreshableCloneConfig: DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a>

---

##### `clonedPdbNameInput`<sup>Optional</sup> <a name="clonedPdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput"></a>

```typescript
public readonly clonedPdbNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pdbAdminPasswordInput`<sup>Optional</sup> <a name="pdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput"></a>

```typescript
public readonly pdbAdminPasswordInput: string;
```

- *Type:* string

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput"></a>

```typescript
public readonly pluggableDatabaseIdInput: string;
```

- *Type:* string

---

##### `shouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput"></a>

```typescript
public readonly shouldPdbAdminAccountBeLockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetTdeWalletPasswordInput`<sup>Optional</sup> <a name="targetTdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput"></a>

```typescript
public readonly targetTdeWalletPasswordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabasePluggableDatabasesLocalCloneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

---

##### `clonedPdbName`<sup>Required</sup> <a name="clonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName"></a>

```typescript
public readonly clonedPdbName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `targetTdeWalletPassword`<sup>Required</sup> <a name="targetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword"></a>

```typescript
public readonly targetTdeWalletPassword: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasesLocalCloneConfig <a name="DatabasePluggableDatabasesLocalCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalCloneConfig: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName">clonedPdbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword">targetTdeWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clonedPdbName`<sup>Required</sup> <a name="clonedPdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName"></a>

```typescript
public readonly clonedPdbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}.

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId"></a>

```typescript
public readonly pluggableDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdbAdminPassword`<sup>Optional</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword"></a>

```typescript
public readonly pdbAdminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}.

---

##### `shouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked"></a>

```typescript
public readonly shouldPdbAdminAccountBeLocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}.

---

##### `targetTdeWalletPassword`<sup>Optional</sup> <a name="targetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword"></a>

```typescript
public readonly targetTdeWalletPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabasePluggableDatabasesLocalCloneTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#timeouts DatabasePluggableDatabasesLocalClone#timeouts}

---

### DatabasePluggableDatabasesLocalCloneConnectionStrings <a name="DatabasePluggableDatabasesLocalCloneConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalCloneConnectionStrings: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings = { ... }
```


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalClonePdbNodeLevelDetails: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails = { ... }
```


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig = { ... }
```


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalCloneRefreshableCloneConfig: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig = { ... }
```


### DatabasePluggableDatabasesLocalCloneTimeouts <a name="DatabasePluggableDatabasesLocalCloneTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

const databasePluggableDatabasesLocalCloneTimeouts: databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasesLocalCloneConnectionStringsList <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault"></a>

```typescript
public readonly pdbDefault: string;
```

- *Type:* string

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault"></a>

```typescript
public readonly pdbIpDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesLocalCloneConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a>

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```typescript
public readonly managementStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get"></a>

```typescript
public get(index: number): DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a>

---


### DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference <a name="DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer"></a>

```typescript
import { databasePluggableDatabasesLocalClone } from 'rhizo-co-terraform-provider-oci'

new databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabasePluggableDatabasesLocalCloneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

---



