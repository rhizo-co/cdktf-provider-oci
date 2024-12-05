# `delegateAccessControlDelegationSubscription` Submodule <a name="`delegateAccessControlDelegationSubscription` Submodule" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DelegateAccessControlDelegationSubscription <a name="DelegateAccessControlDelegationSubscription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription oci_delegate_access_control_delegation_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

new delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription(scope: Construct, id: string, config: DelegateAccessControlDelegationSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig">DelegateAccessControlDelegationSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig">DelegateAccessControlDelegationSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts"></a>

```typescript
public putTimeouts(value: DelegateAccessControlDelegationSubscriptionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DelegateAccessControlDelegationSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DelegateAccessControlDelegationSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DelegateAccessControlDelegationSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DelegateAccessControlDelegationSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput">serviceProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput">subscribedServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId">serviceProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType">subscribedServiceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeouts"></a>

```typescript
public readonly timeouts: DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference">DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serviceProviderIdInput`<sup>Optional</sup> <a name="serviceProviderIdInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderIdInput"></a>

```typescript
public readonly serviceProviderIdInput: string;
```

- *Type:* string

---

##### `subscribedServiceTypeInput`<sup>Optional</sup> <a name="subscribedServiceTypeInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceTypeInput"></a>

```typescript
public readonly subscribedServiceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DelegateAccessControlDelegationSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceProviderId`<sup>Required</sup> <a name="serviceProviderId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.serviceProviderId"></a>

```typescript
public readonly serviceProviderId: string;
```

- *Type:* string

---

##### `subscribedServiceType`<sup>Required</sup> <a name="subscribedServiceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.subscribedServiceType"></a>

```typescript
public readonly subscribedServiceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DelegateAccessControlDelegationSubscriptionConfig <a name="DelegateAccessControlDelegationSubscriptionConfig" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.Initializer"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

const delegateAccessControlDelegationSubscriptionConfig: delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId">serviceProviderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType">subscribedServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#compartment_id DelegateAccessControlDelegationSubscription#compartment_id}.

---

##### `serviceProviderId`<sup>Required</sup> <a name="serviceProviderId" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.serviceProviderId"></a>

```typescript
public readonly serviceProviderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#service_provider_id DelegateAccessControlDelegationSubscription#service_provider_id}.

---

##### `subscribedServiceType`<sup>Required</sup> <a name="subscribedServiceType" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.subscribedServiceType"></a>

```typescript
public readonly subscribedServiceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#subscribed_service_type DelegateAccessControlDelegationSubscription#subscribed_service_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#defined_tags DelegateAccessControlDelegationSubscription#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#description DelegateAccessControlDelegationSubscription#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#freeform_tags DelegateAccessControlDelegationSubscription#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#id DelegateAccessControlDelegationSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DelegateAccessControlDelegationSubscriptionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#timeouts DelegateAccessControlDelegationSubscription#timeouts}

---

### DelegateAccessControlDelegationSubscriptionTimeouts <a name="DelegateAccessControlDelegationSubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.Initializer"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

const delegateAccessControlDelegationSubscriptionTimeouts: delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#create DelegateAccessControlDelegationSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#delete DelegateAccessControlDelegationSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/delegate_access_control_delegation_subscription#update DelegateAccessControlDelegationSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference <a name="DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer"></a>

```typescript
import { delegateAccessControlDelegationSubscription } from 'rhizo-co-terraform-provider-oci'

new delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DelegateAccessControlDelegationSubscriptionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.delegateAccessControlDelegationSubscription.DelegateAccessControlDelegationSubscriptionTimeouts">DelegateAccessControlDelegationSubscriptionTimeouts</a>

---



