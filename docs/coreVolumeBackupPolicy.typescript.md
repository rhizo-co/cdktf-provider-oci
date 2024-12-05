# `coreVolumeBackupPolicy` Submodule <a name="`coreVolumeBackupPolicy` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeBackupPolicy <a name="CoreVolumeBackupPolicy" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy oci_core_volume_backup_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackupPolicy.CoreVolumeBackupPolicy(scope: Construct, id: string, config: CoreVolumeBackupPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig">CoreVolumeBackupPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig">CoreVolumeBackupPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules">putSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetSchedules">resetSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedules` <a name="putSchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules"></a>

```typescript
public putSchedules(value: IResolvable | CoreVolumeBackupPolicySchedules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreVolumeBackupPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDestinationRegion"></a>

```typescript
public resetDestinationRegion(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSchedules` <a name="resetSchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetSchedules"></a>

```typescript
public resetSchedules(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeBackupPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreVolumeBackupPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVolumeBackupPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVolumeBackupPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeBackupPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList">CoreVolumeBackupPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference">CoreVolumeBackupPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegionInput">destinationRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedulesInput">schedulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedules"></a>

```typescript
public readonly schedules: CoreVolumeBackupPolicySchedulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList">CoreVolumeBackupPolicySchedulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVolumeBackupPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference">CoreVolumeBackupPolicyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegionInput"></a>

```typescript
public readonly destinationRegionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedulesInput"></a>

```typescript
public readonly schedulesInput: IResolvable | CoreVolumeBackupPolicySchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreVolumeBackupPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeBackupPolicyConfig <a name="CoreVolumeBackupPolicyConfig" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupPolicyConfig: coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.destinationRegion">destinationRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.schedules">schedules</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]</code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.destinationRegion"></a>

```typescript
public readonly destinationRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.schedules"></a>

```typescript
public readonly schedules: IResolvable | CoreVolumeBackupPolicySchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#schedules CoreVolumeBackupPolicy#schedules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVolumeBackupPolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#timeouts CoreVolumeBackupPolicy#timeouts}

---

### CoreVolumeBackupPolicySchedules <a name="CoreVolumeBackupPolicySchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupPolicySchedules: coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.backupType">backupType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#backup_type CoreVolumeBackupPolicy#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.period">period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#period CoreVolumeBackupPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.retentionSeconds">retentionSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#retention_seconds CoreVolumeBackupPolicy#retention_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_month CoreVolumeBackupPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_week CoreVolumeBackupPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#hour_of_day CoreVolumeBackupPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.month">month</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#month CoreVolumeBackupPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_seconds CoreVolumeBackupPolicy#offset_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetType">offsetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_type CoreVolumeBackupPolicy#offset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#time_zone CoreVolumeBackupPolicy#time_zone}. |

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#backup_type CoreVolumeBackupPolicy#backup_type}.

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#period CoreVolumeBackupPolicy#period}.

---

##### `retentionSeconds`<sup>Required</sup> <a name="retentionSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.retentionSeconds"></a>

```typescript
public readonly retentionSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#retention_seconds CoreVolumeBackupPolicy#retention_seconds}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_month CoreVolumeBackupPolicy#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_week CoreVolumeBackupPolicy#day_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#hour_of_day CoreVolumeBackupPolicy#hour_of_day}.

---

##### `month`<sup>Optional</sup> <a name="month" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#month CoreVolumeBackupPolicy#month}.

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_seconds CoreVolumeBackupPolicy#offset_seconds}.

---

##### `offsetType`<sup>Optional</sup> <a name="offsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetType"></a>

```typescript
public readonly offsetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_type CoreVolumeBackupPolicy#offset_type}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#time_zone CoreVolumeBackupPolicy#time_zone}.

---

### CoreVolumeBackupPolicyTimeouts <a name="CoreVolumeBackupPolicyTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

const coreVolumeBackupPolicyTimeouts: coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#create CoreVolumeBackupPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#delete CoreVolumeBackupPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#update CoreVolumeBackupPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#create CoreVolumeBackupPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#delete CoreVolumeBackupPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#update CoreVolumeBackupPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeBackupPolicySchedulesList <a name="CoreVolumeBackupPolicySchedulesList" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get"></a>

```typescript
public get(index: number): CoreVolumeBackupPolicySchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVolumeBackupPolicySchedules[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>[]

---


### CoreVolumeBackupPolicySchedulesOutputReference <a name="CoreVolumeBackupPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetType">resetOffsetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfMonth"></a>

```typescript
public resetDayOfMonth(): void
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfWeek"></a>

```typescript
public resetDayOfWeek(): void
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetHourOfDay"></a>

```typescript
public resetHourOfDay(): void
```

##### `resetMonth` <a name="resetMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetMonth"></a>

```typescript
public resetMonth(): void
```

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetSeconds"></a>

```typescript
public resetOffsetSeconds(): void
```

##### `resetOffsetType` <a name="resetOffsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetType"></a>

```typescript
public resetOffsetType(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupTypeInput">backupTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.monthInput">monthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetTypeInput">offsetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSecondsInput">retentionSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupType">backupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.month">month</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSeconds">offsetSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetType">offsetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSeconds">retentionSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupTypeInput"></a>

```typescript
public readonly backupTypeInput: string;
```

- *Type:* string

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```typescript
public readonly dayOfMonthInput: number;
```

- *Type:* number

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.monthInput"></a>

```typescript
public readonly monthInput: string;
```

- *Type:* string

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSecondsInput"></a>

```typescript
public readonly offsetSecondsInput: number;
```

- *Type:* number

---

##### `offsetTypeInput`<sup>Optional</sup> <a name="offsetTypeInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetTypeInput"></a>

```typescript
public readonly offsetTypeInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `retentionSecondsInput`<sup>Optional</sup> <a name="retentionSecondsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSecondsInput"></a>

```typescript
public readonly retentionSecondsInput: number;
```

- *Type:* number

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupType"></a>

```typescript
public readonly backupType: string;
```

- *Type:* string

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonth"></a>

```typescript
public readonly dayOfMonth: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.month"></a>

```typescript
public readonly month: string;
```

- *Type:* string

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSeconds"></a>

```typescript
public readonly offsetSeconds: number;
```

- *Type:* number

---

##### `offsetType`<sup>Required</sup> <a name="offsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetType"></a>

```typescript
public readonly offsetType: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `retentionSeconds`<sup>Required</sup> <a name="retentionSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSeconds"></a>

```typescript
public readonly retentionSeconds: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVolumeBackupPolicySchedules;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>

---


### CoreVolumeBackupPolicyTimeoutsOutputReference <a name="CoreVolumeBackupPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreVolumeBackupPolicy } from 'rhizo-co-terraform-provider-oci'

new coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVolumeBackupPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---



