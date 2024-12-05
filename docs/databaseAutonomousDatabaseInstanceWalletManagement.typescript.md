# `databaseAutonomousDatabaseInstanceWalletManagement` Submodule <a name="`databaseAutonomousDatabaseInstanceWalletManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseInstanceWalletManagement <a name="DatabaseAutonomousDatabaseInstanceWalletManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management oci_database_autonomous_database_instance_wallet_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement(scope: Construct, id: string, config: DatabaseAutonomousDatabaseInstanceWalletManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig">DatabaseAutonomousDatabaseInstanceWalletManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig">DatabaseAutonomousDatabaseInstanceWalletManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetShouldRotate">resetShouldRotate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a>

---

##### `resetGracePeriod` <a name="resetGracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetGracePeriod"></a>

```typescript
public resetGracePeriod(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShouldRotate` <a name="resetShouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetShouldRotate"></a>

```typescript
public resetShouldRotate(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseInstanceWalletManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isConstruct"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformElement"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformResource"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseInstanceWalletManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabaseInstanceWalletManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabaseInstanceWalletManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseInstanceWalletManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference">DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeRotated">timeRotated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.gracePeriodInput">gracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.shouldRotateInput">shouldRotateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.shouldRotate">shouldRotate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference">DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference</a>

---

##### `timeRotated`<sup>Required</sup> <a name="timeRotated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeRotated"></a>

```typescript
public readonly timeRotated: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.gracePeriodInput"></a>

```typescript
public readonly gracePeriodInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `shouldRotateInput`<sup>Optional</sup> <a name="shouldRotateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.shouldRotateInput"></a>

```typescript
public readonly shouldRotateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a>

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `shouldRotate`<sup>Required</sup> <a name="shouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.shouldRotate"></a>

```typescript
public readonly shouldRotate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseInstanceWalletManagementConfig <a name="DatabaseAutonomousDatabaseInstanceWalletManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseInstanceWalletManagementConfig: databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#autonomous_database_id DatabaseAutonomousDatabaseInstanceWalletManagement#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.gracePeriod">gracePeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#grace_period DatabaseAutonomousDatabaseInstanceWalletManagement#grace_period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#id DatabaseAutonomousDatabaseInstanceWalletManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.shouldRotate">shouldRotate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#should_rotate DatabaseAutonomousDatabaseInstanceWalletManagement#should_rotate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#autonomous_database_id DatabaseAutonomousDatabaseInstanceWalletManagement#autonomous_database_id}.

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.gracePeriod"></a>

```typescript
public readonly gracePeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#grace_period DatabaseAutonomousDatabaseInstanceWalletManagement#grace_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#id DatabaseAutonomousDatabaseInstanceWalletManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shouldRotate`<sup>Optional</sup> <a name="shouldRotate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.shouldRotate"></a>

```typescript
public readonly shouldRotate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#should_rotate DatabaseAutonomousDatabaseInstanceWalletManagement#should_rotate}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#timeouts DatabaseAutonomousDatabaseInstanceWalletManagement#timeouts}

---

### DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts <a name="DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseInstanceWalletManagementTimeouts: databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#create DatabaseAutonomousDatabaseInstanceWalletManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#delete DatabaseAutonomousDatabaseInstanceWalletManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#update DatabaseAutonomousDatabaseInstanceWalletManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#create DatabaseAutonomousDatabaseInstanceWalletManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#delete DatabaseAutonomousDatabaseInstanceWalletManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_instance_wallet_management#update DatabaseAutonomousDatabaseInstanceWalletManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabaseInstanceWalletManagement } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseInstanceWalletManagement.DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts">DatabaseAutonomousDatabaseInstanceWalletManagementTimeouts</a>

---



