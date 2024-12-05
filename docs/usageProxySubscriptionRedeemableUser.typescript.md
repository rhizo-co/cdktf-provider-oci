# `usageProxySubscriptionRedeemableUser` Submodule <a name="`usageProxySubscriptionRedeemableUser` Submodule" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsageProxySubscriptionRedeemableUser <a name="UsageProxySubscriptionRedeemableUser" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user oci_usage_proxy_subscription_redeemable_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

new usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser(scope: Construct, id: string, config: UsageProxySubscriptionRedeemableUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems">putItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putItems` <a name="putItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems"></a>

```typescript
public putItems(value: IResolvable | UsageProxySubscriptionRedeemableUserItems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts"></a>

```typescript
public putTimeouts(value: UsageProxySubscriptionRedeemableUserTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UsageProxySubscriptionRedeemableUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UsageProxySubscriptionRedeemableUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UsageProxySubscriptionRedeemableUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput">itemsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items"></a>

```typescript
public readonly items: UsageProxySubscriptionRedeemableUserItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts"></a>

```typescript
public readonly timeouts: UsageProxySubscriptionRedeemableUserTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput"></a>

```typescript
public readonly itemsInput: IResolvable | UsageProxySubscriptionRedeemableUserItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | UsageProxySubscriptionRedeemableUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UsageProxySubscriptionRedeemableUserConfig <a name="UsageProxySubscriptionRedeemableUserConfig" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

const usageProxySubscriptionRedeemableUserConfig: usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items">items</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items"></a>

```typescript
public readonly items: IResolvable | UsageProxySubscriptionRedeemableUserItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#items UsageProxySubscriptionRedeemableUser#items}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}.

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts"></a>

```typescript
public readonly timeouts: UsageProxySubscriptionRedeemableUserTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#timeouts UsageProxySubscriptionRedeemableUser#timeouts}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}.

---

### UsageProxySubscriptionRedeemableUserItems <a name="UsageProxySubscriptionRedeemableUserItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

const usageProxySubscriptionRedeemableUserItems: usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId">emailId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}. |

---

##### `emailId`<sup>Required</sup> <a name="emailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId"></a>

```typescript
public readonly emailId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}.

---

### UsageProxySubscriptionRedeemableUserTimeouts <a name="UsageProxySubscriptionRedeemableUserTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

const usageProxySubscriptionRedeemableUserTimeouts: usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UsageProxySubscriptionRedeemableUserItemsList <a name="UsageProxySubscriptionRedeemableUserItemsList" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

new usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get"></a>

```typescript
public get(index: number): UsageProxySubscriptionRedeemableUserItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UsageProxySubscriptionRedeemableUserItems[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>[]

---


### UsageProxySubscriptionRedeemableUserItemsOutputReference <a name="UsageProxySubscriptionRedeemableUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

new usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput">emailIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId">emailId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailIdInput`<sup>Optional</sup> <a name="emailIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput"></a>

```typescript
public readonly emailIdInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `emailId`<sup>Required</sup> <a name="emailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId"></a>

```typescript
public readonly emailId: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UsageProxySubscriptionRedeemableUserItems;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>

---


### UsageProxySubscriptionRedeemableUserTimeoutsOutputReference <a name="UsageProxySubscriptionRedeemableUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer"></a>

```typescript
import { usageProxySubscriptionRedeemableUser } from 'rhizo-co-terraform-provider-oci'

new usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | UsageProxySubscriptionRedeemableUserTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

---



