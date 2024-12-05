# `identityAuthenticationPolicy` Submodule <a name="`identityAuthenticationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAuthenticationPolicy <a name="IdentityAuthenticationPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

new identityAuthenticationPolicy.IdentityAuthenticationPolicy(scope: Construct, id: string, config: IdentityAuthenticationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy">putNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy">putPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkPolicy` <a name="putNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy"></a>

```typescript
public putNetworkPolicy(value: IdentityAuthenticationPolicyNetworkPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `putPasswordPolicy` <a name="putPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy"></a>

```typescript
public putPasswordPolicy(value: IdentityAuthenticationPolicyPasswordPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityAuthenticationPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy"></a>

```typescript
public resetNetworkPolicy(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityAuthenticationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityAuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy">networkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput">networkPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: IdentityAuthenticationPolicyNetworkPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a>

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: IdentityAuthenticationPolicyPasswordPolicyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityAuthenticationPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput"></a>

```typescript
public readonly networkPolicyInput: IdentityAuthenticationPolicyNetworkPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: IdentityAuthenticationPolicyPasswordPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityAuthenticationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAuthenticationPolicyConfig <a name="IdentityAuthenticationPolicyConfig" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

const identityAuthenticationPolicyConfig: identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy">networkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy">passwordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: IdentityAuthenticationPolicyNetworkPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: IdentityAuthenticationPolicyPasswordPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityAuthenticationPolicyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

### IdentityAuthenticationPolicyNetworkPolicy <a name="IdentityAuthenticationPolicyNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

const identityAuthenticationPolicyNetworkPolicy: identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds">networkSourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}. |

---

##### `networkSourceIds`<sup>Optional</sup> <a name="networkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds"></a>

```typescript
public readonly networkSourceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

### IdentityAuthenticationPolicyPasswordPolicy <a name="IdentityAuthenticationPolicyPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

const identityAuthenticationPolicyPasswordPolicy: identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired">isLowercaseCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired">isNumericCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired">isSpecialCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired">isUppercaseCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed">isUsernameContainmentAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}. |

---

##### `isLowercaseCharactersRequired`<sup>Optional</sup> <a name="isLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired"></a>

```typescript
public readonly isLowercaseCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

##### `isNumericCharactersRequired`<sup>Optional</sup> <a name="isNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired"></a>

```typescript
public readonly isNumericCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

##### `isSpecialCharactersRequired`<sup>Optional</sup> <a name="isSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired"></a>

```typescript
public readonly isSpecialCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

##### `isUppercaseCharactersRequired`<sup>Optional</sup> <a name="isUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired"></a>

```typescript
public readonly isUppercaseCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

##### `isUsernameContainmentAllowed`<sup>Optional</sup> <a name="isUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed"></a>

```typescript
public readonly isUsernameContainmentAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

### IdentityAuthenticationPolicyTimeouts <a name="IdentityAuthenticationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

const identityAuthenticationPolicyTimeouts: identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAuthenticationPolicyNetworkPolicyOutputReference <a name="IdentityAuthenticationPolicyNetworkPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

new identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds">resetNetworkSourceIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNetworkSourceIds` <a name="resetNetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds"></a>

```typescript
public resetNetworkSourceIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput">networkSourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds">networkSourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkSourceIdsInput`<sup>Optional</sup> <a name="networkSourceIdsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput"></a>

```typescript
public readonly networkSourceIdsInput: string[];
```

- *Type:* string[]

---

##### `networkSourceIds`<sup>Required</sup> <a name="networkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds"></a>

```typescript
public readonly networkSourceIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityAuthenticationPolicyNetworkPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---


### IdentityAuthenticationPolicyPasswordPolicyOutputReference <a name="IdentityAuthenticationPolicyPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

new identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired">resetIsLowercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired">resetIsNumericCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired">resetIsSpecialCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired">resetIsUppercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed">resetIsUsernameContainmentAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsLowercaseCharactersRequired` <a name="resetIsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired"></a>

```typescript
public resetIsLowercaseCharactersRequired(): void
```

##### `resetIsNumericCharactersRequired` <a name="resetIsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired"></a>

```typescript
public resetIsNumericCharactersRequired(): void
```

##### `resetIsSpecialCharactersRequired` <a name="resetIsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired"></a>

```typescript
public resetIsSpecialCharactersRequired(): void
```

##### `resetIsUppercaseCharactersRequired` <a name="resetIsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired"></a>

```typescript
public resetIsUppercaseCharactersRequired(): void
```

##### `resetIsUsernameContainmentAllowed` <a name="resetIsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed"></a>

```typescript
public resetIsUsernameContainmentAllowed(): void
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength"></a>

```typescript
public resetMinimumPasswordLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput">isLowercaseCharactersRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput">isNumericCharactersRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput">isSpecialCharactersRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput">isUppercaseCharactersRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput">isUsernameContainmentAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired">isLowercaseCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired">isNumericCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired">isSpecialCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired">isUppercaseCharactersRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed">isUsernameContainmentAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isLowercaseCharactersRequiredInput`<sup>Optional</sup> <a name="isLowercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput"></a>

```typescript
public readonly isLowercaseCharactersRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNumericCharactersRequiredInput`<sup>Optional</sup> <a name="isNumericCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput"></a>

```typescript
public readonly isNumericCharactersRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSpecialCharactersRequiredInput`<sup>Optional</sup> <a name="isSpecialCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput"></a>

```typescript
public readonly isSpecialCharactersRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUppercaseCharactersRequiredInput`<sup>Optional</sup> <a name="isUppercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput"></a>

```typescript
public readonly isUppercaseCharactersRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUsernameContainmentAllowedInput`<sup>Optional</sup> <a name="isUsernameContainmentAllowedInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput"></a>

```typescript
public readonly isUsernameContainmentAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput"></a>

```typescript
public readonly minimumPasswordLengthInput: number;
```

- *Type:* number

---

##### `isLowercaseCharactersRequired`<sup>Required</sup> <a name="isLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired"></a>

```typescript
public readonly isLowercaseCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isNumericCharactersRequired`<sup>Required</sup> <a name="isNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired"></a>

```typescript
public readonly isNumericCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSpecialCharactersRequired`<sup>Required</sup> <a name="isSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired"></a>

```typescript
public readonly isSpecialCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUppercaseCharactersRequired`<sup>Required</sup> <a name="isUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired"></a>

```typescript
public readonly isUppercaseCharactersRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUsernameContainmentAllowed`<sup>Required</sup> <a name="isUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed"></a>

```typescript
public readonly isUsernameContainmentAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityAuthenticationPolicyPasswordPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---


### IdentityAuthenticationPolicyTimeoutsOutputReference <a name="IdentityAuthenticationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityAuthenticationPolicy } from 'rhizo-co-terraform-provider-oci'

new identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityAuthenticationPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---



