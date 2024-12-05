# `identityUserCapabilitiesManagement` Submodule <a name="`identityUserCapabilitiesManagement` Submodule" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserCapabilitiesManagement <a name="IdentityUserCapabilitiesManagement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

new identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement(scope: Construct, id: string, config: IdentityUserCapabilitiesManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys">resetCanUseApiKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens">resetCanUseAuthTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword">resetCanUseConsolePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys">resetCanUseCustomerSecretKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials">resetCanUseSmtpCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityUserCapabilitiesManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

---

##### `resetCanUseApiKeys` <a name="resetCanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys"></a>

```typescript
public resetCanUseApiKeys(): void
```

##### `resetCanUseAuthTokens` <a name="resetCanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens"></a>

```typescript
public resetCanUseAuthTokens(): void
```

##### `resetCanUseConsolePassword` <a name="resetCanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword"></a>

```typescript
public resetCanUseConsolePassword(): void
```

##### `resetCanUseCustomerSecretKeys` <a name="resetCanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys"></a>

```typescript
public resetCanUseCustomerSecretKeys(): void
```

##### `resetCanUseSmtpCredentials` <a name="resetCanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials"></a>

```typescript
public resetCanUseSmtpCredentials(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityUserCapabilitiesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityUserCapabilitiesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserCapabilitiesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput">canUseApiKeysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput">canUseAuthTokensInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput">canUseConsolePasswordInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput">canUseCustomerSecretKeysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput">canUseSmtpCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys">canUseApiKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens">canUseAuthTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword">canUseConsolePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys">canUseCustomerSecretKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials">canUseSmtpCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId">userId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityUserCapabilitiesManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a>

---

##### `canUseApiKeysInput`<sup>Optional</sup> <a name="canUseApiKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput"></a>

```typescript
public readonly canUseApiKeysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseAuthTokensInput`<sup>Optional</sup> <a name="canUseAuthTokensInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput"></a>

```typescript
public readonly canUseAuthTokensInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseConsolePasswordInput`<sup>Optional</sup> <a name="canUseConsolePasswordInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput"></a>

```typescript
public readonly canUseConsolePasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseCustomerSecretKeysInput`<sup>Optional</sup> <a name="canUseCustomerSecretKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput"></a>

```typescript
public readonly canUseCustomerSecretKeysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseSmtpCredentialsInput`<sup>Optional</sup> <a name="canUseSmtpCredentialsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput"></a>

```typescript
public readonly canUseSmtpCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityUserCapabilitiesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `canUseApiKeys`<sup>Required</sup> <a name="canUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys"></a>

```typescript
public readonly canUseApiKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseAuthTokens`<sup>Required</sup> <a name="canUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens"></a>

```typescript
public readonly canUseAuthTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseConsolePassword`<sup>Required</sup> <a name="canUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword"></a>

```typescript
public readonly canUseConsolePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseCustomerSecretKeys`<sup>Required</sup> <a name="canUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys"></a>

```typescript
public readonly canUseCustomerSecretKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `canUseSmtpCredentials`<sup>Required</sup> <a name="canUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials"></a>

```typescript
public readonly canUseSmtpCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserCapabilitiesManagementConfig <a name="IdentityUserCapabilitiesManagementConfig" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.Initializer"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

const identityUserCapabilitiesManagementConfig: identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys">canUseApiKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens">canUseAuthTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword">canUseConsolePassword</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys">canUseCustomerSecretKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials">canUseSmtpCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}.

---

##### `canUseApiKeys`<sup>Optional</sup> <a name="canUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys"></a>

```typescript
public readonly canUseApiKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}.

---

##### `canUseAuthTokens`<sup>Optional</sup> <a name="canUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens"></a>

```typescript
public readonly canUseAuthTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}.

---

##### `canUseConsolePassword`<sup>Optional</sup> <a name="canUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword"></a>

```typescript
public readonly canUseConsolePassword: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}.

---

##### `canUseCustomerSecretKeys`<sup>Optional</sup> <a name="canUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys"></a>

```typescript
public readonly canUseCustomerSecretKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}.

---

##### `canUseSmtpCredentials`<sup>Optional</sup> <a name="canUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials"></a>

```typescript
public readonly canUseSmtpCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityUserCapabilitiesManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}

---

### IdentityUserCapabilitiesManagementTimeouts <a name="IdentityUserCapabilitiesManagementTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.Initializer"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

const identityUserCapabilitiesManagementTimeouts: identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserCapabilitiesManagementTimeoutsOutputReference <a name="IdentityUserCapabilitiesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityUserCapabilitiesManagement } from 'rhizo-co-terraform-provider-oci'

new identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityUserCapabilitiesManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

---


