# `recoveryProtectionPolicy` Submodule <a name="`recoveryProtectionPolicy` Submodule" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecoveryProtectionPolicy <a name="RecoveryProtectionPolicy" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy oci_recovery_protection_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectionPolicy.RecoveryProtectionPolicy(scope: Construct, id: string, config: RecoveryProtectionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig">RecoveryProtectionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig">RecoveryProtectionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetMustEnforceCloudLocality">resetMustEnforceCloudLocality</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetPolicyLockedDateTime">resetPolicyLockedDateTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: RecoveryProtectionPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMustEnforceCloudLocality` <a name="resetMustEnforceCloudLocality" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetMustEnforceCloudLocality"></a>

```typescript
public resetMustEnforceCloudLocality(): void
```

##### `resetPolicyLockedDateTime` <a name="resetPolicyLockedDateTime" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetPolicyLockedDateTime"></a>

```typescript
public resetPolicyLockedDateTime(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RecoveryProtectionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isConstruct"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

recoveryProtectionPolicy.RecoveryProtectionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformElement"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformResource"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RecoveryProtectionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecoveryProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecoveryProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RecoveryProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.isPredefinedPolicy">isPredefinedPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference">RecoveryProtectionPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.mustEnforceCloudLocalityInput">mustEnforceCloudLocalityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.policyLockedDateTimeInput">policyLockedDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.mustEnforceCloudLocality">mustEnforceCloudLocality</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `isPredefinedPolicy`<sup>Required</sup> <a name="isPredefinedPolicy" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.isPredefinedPolicy"></a>

```typescript
public readonly isPredefinedPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryProtectionPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference">RecoveryProtectionPolicyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.backupRetentionPeriodInDaysInput"></a>

```typescript
public readonly backupRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mustEnforceCloudLocalityInput`<sup>Optional</sup> <a name="mustEnforceCloudLocalityInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.mustEnforceCloudLocalityInput"></a>

```typescript
public readonly mustEnforceCloudLocalityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyLockedDateTimeInput`<sup>Optional</sup> <a name="policyLockedDateTimeInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.policyLockedDateTimeInput"></a>

```typescript
public readonly policyLockedDateTimeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | RecoveryProtectionPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a>

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mustEnforceCloudLocality`<sup>Required</sup> <a name="mustEnforceCloudLocality" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.mustEnforceCloudLocality"></a>

```typescript
public readonly mustEnforceCloudLocality: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyLockedDateTime`<sup>Required</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.policyLockedDateTime"></a>

```typescript
public readonly policyLockedDateTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecoveryProtectionPolicyConfig <a name="RecoveryProtectionPolicyConfig" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.Initializer"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectionPolicyConfig: recoveryProtectionPolicy.RecoveryProtectionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#backup_retention_period_in_days RecoveryProtectionPolicy#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#compartment_id RecoveryProtectionPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#display_name RecoveryProtectionPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#defined_tags RecoveryProtectionPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#freeform_tags RecoveryProtectionPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#id RecoveryProtectionPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.mustEnforceCloudLocality">mustEnforceCloudLocality</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#must_enforce_cloud_locality RecoveryProtectionPolicy#must_enforce_cloud_locality}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.policyLockedDateTime">policyLockedDateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#policy_locked_date_time RecoveryProtectionPolicy#policy_locked_date_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#backup_retention_period_in_days RecoveryProtectionPolicy#backup_retention_period_in_days}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#compartment_id RecoveryProtectionPolicy#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#display_name RecoveryProtectionPolicy#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#defined_tags RecoveryProtectionPolicy#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#freeform_tags RecoveryProtectionPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#id RecoveryProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mustEnforceCloudLocality`<sup>Optional</sup> <a name="mustEnforceCloudLocality" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.mustEnforceCloudLocality"></a>

```typescript
public readonly mustEnforceCloudLocality: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#must_enforce_cloud_locality RecoveryProtectionPolicy#must_enforce_cloud_locality}.

---

##### `policyLockedDateTime`<sup>Optional</sup> <a name="policyLockedDateTime" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.policyLockedDateTime"></a>

```typescript
public readonly policyLockedDateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#policy_locked_date_time RecoveryProtectionPolicy#policy_locked_date_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: RecoveryProtectionPolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#timeouts RecoveryProtectionPolicy#timeouts}

---

### RecoveryProtectionPolicyTimeouts <a name="RecoveryProtectionPolicyTimeouts" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.Initializer"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

const recoveryProtectionPolicyTimeouts: recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#create RecoveryProtectionPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#delete RecoveryProtectionPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#update RecoveryProtectionPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#create RecoveryProtectionPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#delete RecoveryProtectionPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/recovery_protection_policy#update RecoveryProtectionPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecoveryProtectionPolicyTimeoutsOutputReference <a name="RecoveryProtectionPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { recoveryProtectionPolicy } from 'rhizo-co-terraform-provider-oci'

new recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RecoveryProtectionPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.recoveryProtectionPolicy.RecoveryProtectionPolicyTimeouts">RecoveryProtectionPolicyTimeouts</a>

---



