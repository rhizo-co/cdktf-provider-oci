# `recoveryProtectedDatabase` Submodule <a name="`recoveryProtectedDatabase` Submodule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryProtectedDatabase <a name="RecoveryProtectedDatabase" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database oci_recovery_protected_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabase(scope: Construct, id: string, config: RecoveryProtectedDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig">RecoveryProtectedDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig">RecoveryProtectedDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets">putRecoveryServiceSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize">resetDatabaseSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule">resetDeletionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped">resetIsRedoLogsShipped</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecoveryServiceSubnets` <a name="putRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets"></a>

```typescript
public putRecoveryServiceSubnets(value: IResolvable | RecoveryProtectedDatabaseRecoveryServiceSubnets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putRecoveryServiceSubnets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: RecoveryProtectedDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

---

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseSize` <a name="resetDatabaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDatabaseSize"></a>

```typescript
public resetDatabaseSize(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeletionSchedule` <a name="resetDeletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetDeletionSchedule"></a>

```typescript
public resetDeletionSchedule(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsRedoLogsShipped` <a name="resetIsRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetIsRedoLogsShipped"></a>

```typescript
public resetIsRedoLogsShipped(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RecoveryProtectedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecoveryProtectedDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecoveryProtectedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryProtectedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health">health</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails">healthDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource">isReadOnlyResource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets">recoveryServiceSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName">vpcUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput">databaseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput">deletionScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput">isRedoLogsShippedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput">protectionPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput">recoveryServiceSubnetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize">databaseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule">deletionSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped">isRedoLogsShipped</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `health`<sup>Required</sup> <a name="health" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

---

##### `healthDetails`<sup>Required</sup> <a name="healthDetails" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.healthDetails"></a>

```typescript
public readonly healthDetails: string;
```

- *Type:* string

---

##### `isReadOnlyResource`<sup>Required</sup> <a name="isReadOnlyResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isReadOnlyResource"></a>

```typescript
public readonly isReadOnlyResource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.metrics"></a>

```typescript
public readonly metrics: RecoveryProtectedDatabaseMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList">RecoveryProtectedDatabaseMetricsList</a>

---

##### `policyLockedDateTime`<sup>Required</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.policyLockedDateTime"></a>

```typescript
public readonly policyLockedDateTime: string;
```

- *Type:* string

---

##### `recoveryServiceSubnets`<sup>Required</sup> <a name="recoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnets"></a>

```typescript
public readonly recoveryServiceSubnets: RecoveryProtectedDatabaseRecoveryServiceSubnetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList">RecoveryProtectedDatabaseRecoveryServiceSubnetsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryProtectedDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference">RecoveryProtectedDatabaseTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vpcUserName`<sup>Required</sup> <a name="vpcUserName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.vpcUserName"></a>

```typescript
public readonly vpcUserName: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseSizeInput`<sup>Optional</sup> <a name="databaseSizeInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSizeInput"></a>

```typescript
public readonly databaseSizeInput: string;
```

- *Type:* string

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueNameInput"></a>

```typescript
public readonly dbUniqueNameInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionScheduleInput`<sup>Optional</sup> <a name="deletionScheduleInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionScheduleInput"></a>

```typescript
public readonly deletionScheduleInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isRedoLogsShippedInput`<sup>Optional</sup> <a name="isRedoLogsShippedInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShippedInput"></a>

```typescript
public readonly isRedoLogsShippedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `protectionPolicyIdInput`<sup>Optional</sup> <a name="protectionPolicyIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyIdInput"></a>

```typescript
public readonly protectionPolicyIdInput: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetsInput`<sup>Optional</sup> <a name="recoveryServiceSubnetsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.recoveryServiceSubnetsInput"></a>

```typescript
public readonly recoveryServiceSubnetsInput: IResolvable | RecoveryProtectedDatabaseRecoveryServiceSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecoveryProtectedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseSize`<sup>Required</sup> <a name="databaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.databaseSize"></a>

```typescript
public readonly databaseSize: string;
```

- *Type:* string

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionSchedule`<sup>Required</sup> <a name="deletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.deletionSchedule"></a>

```typescript
public readonly deletionSchedule: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRedoLogsShipped`<sup>Required</sup> <a name="isRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.isRedoLogsShipped"></a>

```typescript
public readonly isRedoLogsShipped: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryProtectedDatabaseConfig <a name="RecoveryProtectedDatabaseConfig" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectedDatabaseConfig: recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName">dbUniqueName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId">protectionPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets">recoveryServiceSubnets</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]</code> | recovery_service_subnets block. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize">databaseSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule">deletionSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped">isRedoLogsShipped</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#compartment_id RecoveryProtectedDatabase#compartment_id}.

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.dbUniqueName"></a>

```typescript
public readonly dbUniqueName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#db_unique_name RecoveryProtectedDatabase#db_unique_name}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#display_name RecoveryProtectedDatabase#display_name}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#password RecoveryProtectedDatabase#password}.

---

##### `protectionPolicyId`<sup>Required</sup> <a name="protectionPolicyId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.protectionPolicyId"></a>

```typescript
public readonly protectionPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#protection_policy_id RecoveryProtectedDatabase#protection_policy_id}.

---

##### `recoveryServiceSubnets`<sup>Required</sup> <a name="recoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.recoveryServiceSubnets"></a>

```typescript
public readonly recoveryServiceSubnets: IResolvable | RecoveryProtectedDatabaseRecoveryServiceSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]

recovery_service_subnets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnets RecoveryProtectedDatabase#recovery_service_subnets}

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_id RecoveryProtectedDatabase#database_id}.

---

##### `databaseSize`<sup>Optional</sup> <a name="databaseSize" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.databaseSize"></a>

```typescript
public readonly databaseSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#database_size RecoveryProtectedDatabase#database_size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#defined_tags RecoveryProtectedDatabase#defined_tags}.

---

##### `deletionSchedule`<sup>Optional</sup> <a name="deletionSchedule" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.deletionSchedule"></a>

```typescript
public readonly deletionSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#deletion_schedule RecoveryProtectedDatabase#deletion_schedule}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#freeform_tags RecoveryProtectedDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#id RecoveryProtectedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isRedoLogsShipped`<sup>Optional</sup> <a name="isRedoLogsShipped" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.isRedoLogsShipped"></a>

```typescript
public readonly isRedoLogsShipped: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#is_redo_logs_shipped RecoveryProtectedDatabase#is_redo_logs_shipped}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#subscription_id RecoveryProtectedDatabase#subscription_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryProtectedDatabaseTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#timeouts RecoveryProtectedDatabase#timeouts}

---

### RecoveryProtectedDatabaseMetrics <a name="RecoveryProtectedDatabaseMetrics" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectedDatabaseMetrics: recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics = { ... }
```


### RecoveryProtectedDatabaseRecoveryServiceSubnets <a name="RecoveryProtectedDatabaseRecoveryServiceSubnets" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectedDatabaseRecoveryServiceSubnets: recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}. |

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#recovery_service_subnet_id RecoveryProtectedDatabase#recovery_service_subnet_id}.

---

### RecoveryProtectedDatabaseTimeouts <a name="RecoveryProtectedDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectedDatabaseTimeouts: recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#create RecoveryProtectedDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#delete RecoveryProtectedDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protected_database#update RecoveryProtectedDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryProtectedDatabaseMetricsList <a name="RecoveryProtectedDatabaseMetricsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get"></a>

```typescript
public get(index: number): RecoveryProtectedDatabaseMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### RecoveryProtectedDatabaseMetricsOutputReference <a name="RecoveryProtectedDatabaseMetricsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs">backupSpaceEstimateInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs">backupSpaceUsedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds">currentRetentionPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs">dbSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled">isRedoLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays">minimumRecoveryNeededInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds">unprotectedWindowInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupSpaceEstimateInGbs`<sup>Required</sup> <a name="backupSpaceEstimateInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceEstimateInGbs"></a>

```typescript
public readonly backupSpaceEstimateInGbs: number;
```

- *Type:* number

---

##### `backupSpaceUsedInGbs`<sup>Required</sup> <a name="backupSpaceUsedInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.backupSpaceUsedInGbs"></a>

```typescript
public readonly backupSpaceUsedInGbs: number;
```

- *Type:* number

---

##### `currentRetentionPeriodInSeconds`<sup>Required</sup> <a name="currentRetentionPeriodInSeconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.currentRetentionPeriodInSeconds"></a>

```typescript
public readonly currentRetentionPeriodInSeconds: number;
```

- *Type:* number

---

##### `dbSizeInGbs`<sup>Required</sup> <a name="dbSizeInGbs" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.dbSizeInGbs"></a>

```typescript
public readonly dbSizeInGbs: number;
```

- *Type:* number

---

##### `isRedoLogsEnabled`<sup>Required</sup> <a name="isRedoLogsEnabled" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.isRedoLogsEnabled"></a>

```typescript
public readonly isRedoLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `minimumRecoveryNeededInDays`<sup>Required</sup> <a name="minimumRecoveryNeededInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.minimumRecoveryNeededInDays"></a>

```typescript
public readonly minimumRecoveryNeededInDays: number;
```

- *Type:* number

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `unprotectedWindowInSeconds`<sup>Required</sup> <a name="unprotectedWindowInSeconds" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.unprotectedWindowInSeconds"></a>

```typescript
public readonly unprotectedWindowInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RecoveryProtectedDatabaseMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseMetrics">RecoveryProtectedDatabaseMetrics</a>

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsList <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsList" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get"></a>

```typescript
public get(index: number): RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryProtectedDatabaseRecoveryServiceSubnets[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>[]

---


### RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference <a name="RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput">recoveryServiceSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId">recoveryServiceSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetIdInput`<sup>Optional</sup> <a name="recoveryServiceSubnetIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetIdInput"></a>

```typescript
public readonly recoveryServiceSubnetIdInput: string;
```

- *Type:* string

---

##### `recoveryServiceSubnetId`<sup>Required</sup> <a name="recoveryServiceSubnetId" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.recoveryServiceSubnetId"></a>

```typescript
public readonly recoveryServiceSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryProtectedDatabaseRecoveryServiceSubnets;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseRecoveryServiceSubnets">RecoveryProtectedDatabaseRecoveryServiceSubnets</a>

---


### RecoveryProtectedDatabaseTimeoutsOutputReference <a name="RecoveryProtectedDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { recoveryProtectedDatabase } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryProtectedDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectedDatabase.RecoveryProtectedDatabaseTimeouts">RecoveryProtectedDatabaseTimeouts</a>

---



