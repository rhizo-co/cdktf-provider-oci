# `recoveryRecoveryServiceSubnet` Submodule <a name="`recoveryRecoveryServiceSubnet` Submodule" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryRecoveryServiceSubnet <a name="RecoveryRecoveryServiceSubnet" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet oci_recovery_recovery_service_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

new recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet(scope: Construct, id: string, config: RecoveryRecoveryServiceSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig">RecoveryRecoveryServiceSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig">RecoveryRecoveryServiceSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: RecoveryRecoveryServiceSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetSubnets` <a name="resetSubnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RecoveryRecoveryServiceSubnet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecoveryRecoveryServiceSubnet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecoveryRecoveryServiceSubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryRecoveryServiceSubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryRecoveryServiceSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference">RecoveryRecoveryServiceSubnetTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecoveryRecoveryServiceSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryRecoveryServiceSubnetConfig <a name="RecoveryRecoveryServiceSubnetConfig" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.Initializer"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

const recoveryRecoveryServiceSubnetConfig: recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#compartment_id RecoveryRecoveryServiceSubnet#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#display_name RecoveryRecoveryServiceSubnet#display_name}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#vcn_id RecoveryRecoveryServiceSubnet#vcn_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#defined_tags RecoveryRecoveryServiceSubnet#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#freeform_tags RecoveryRecoveryServiceSubnet#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#id RecoveryRecoveryServiceSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#nsg_ids RecoveryRecoveryServiceSubnet#nsg_ids}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnet_id RecoveryRecoveryServiceSubnet#subnet_id}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#subnets RecoveryRecoveryServiceSubnet#subnets}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryRecoveryServiceSubnetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#timeouts RecoveryRecoveryServiceSubnet#timeouts}

---

### RecoveryRecoveryServiceSubnetTimeouts <a name="RecoveryRecoveryServiceSubnetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.Initializer"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

const recoveryRecoveryServiceSubnetTimeouts: recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#create RecoveryRecoveryServiceSubnet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#delete RecoveryRecoveryServiceSubnet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_recovery_service_subnet#update RecoveryRecoveryServiceSubnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryRecoveryServiceSubnetTimeoutsOutputReference <a name="RecoveryRecoveryServiceSubnetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { recoveryRecoveryServiceSubnet } from 'rhizo-co-terraform-provider-oci'

new recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryRecoveryServiceSubnetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryRecoveryServiceSubnet.RecoveryRecoveryServiceSubnetTimeouts">RecoveryRecoveryServiceSubnetTimeouts</a>

---



